import React, {useCallback, useEffect, useRef, useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    Image,
    ImageBackground,
    RefreshControl,
    Animated
} from "react-native";
import {Video, AVPlaybackStatus} from "expo-av";
import Styles from "../config/Styles";
import Maintainance from "../components/Error/Maintainance";
import {DotIndicator} from "react-native-indicators";
import ColorsApp from "../config/ColorsApp";
import {fetchImage} from "../store/actions/image";
import {useDispatch} from "react-redux";
// import VideoPlayer from "expo-video-player";

export default function App() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [isRefreshing, setIsRefreshing] = useState(false);
    const yOffset = useRef(new Animated.Value(0)).current;
    const headerOpacity = yOffset.interpolate({
        inputRange: [0, 200],
        outputRange: [0, 1],
        extrapolate: "clamp",
    });

    let myHeaders = new Headers();
    myHeaders.set('Accept', 'application/json');
    myHeaders.set('Content-Type', 'application/json');
    // myHeaders.set('Authorization', 'Token token=' + String(token));
    myHeaders.set('Cache-Control', 'no-cache');
    myHeaders.set('Pragma', 'no-cache');
    myHeaders.set('Expires', '0');

    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const finishLoad = (msg) => {
        setTimeout(function () {
            setIsLoading(false);
            setIsRefreshing(false);
        }, 10000);
    };
    const askImage = useCallback(() => {
        setError(null);
        setIsLoading(true);
        setIsRefreshing(true);


        return dispatch(fetchImage())
            .then((response) => {

                finishLoad();
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            });
    }, [dispatch, setIsLoading, setError]);


    useEffect(() => {
        askImage();
    }, [dispatch, askImage, setIsRefreshing]);

    if (error) {
        return <Maintainance loadStatus={askImage}/>;
    }

    if (isLoading) {
        return <DotIndicator color={ColorsApp.PRIMARY}/>;
    }

    return (


        <Animated.ScrollView
            refreshControl={
                <RefreshControl refreshing={isRefreshing} onRefresh={askImage}/>
            }
            onScroll={Animated.event(
                [
                    {
                        nativeEvent: {
                            contentOffset: {
                                y: yOffset,
                            },
                        },
                    },
                ],
                {useNativeDriver: true}
            )}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >

            <View style={styles.container}>

                <ImageBackground
                    // source={require("../assets/images/header.jpg")}
                    source={{
                        uri: "https://drive.google.com/uc?export=view&id=1wpmwXZEmz2RZECdpF_JWOlDIBATCSj3J&" + 'random_number=' + new Date().getTime(),
                        // method: 'GET',
                        // headers: myHeaders
                    }
                    }
                    resizeMode={"cover"}
                    style={Styles.headerBackground}


                >
                </ImageBackground>

                {/*<Image*/}
                {/*    source={{*/}
                {/*        uri: 'https://drive.google.com/uc?export=view&id=1wpmwXZEmz2RZECdpF_JWOlDIBATCSj3J',*/}
                {/*        method: 'GET',*/}
                {/*        headers: {*/}
                {/*            Pragma: 'no-cache'*/}
                {/*        },*/}
                {/*        body: 'Your Body goes here'*/}
                {/*    }}*/}
                {/*    // style={{ width: 400, height: 400 }}*/}
                {/*/>*/}


                {/*<VideoPlayer*/}
                {/*  videoProps={{*/}
                {/*    shouldPlay: true,*/}
                {/*    resizeMode: Video.RESIZE_MODE_CONTAIN,*/}
                {/*    inFullscreen: false,*/}

                {/*    // style: { justifyContent: "center", alignItems: "center" },*/}
                {/*    source: {*/}
                {/*      uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",*/}
                {/*    },*/}
                {/*  }}*/}
                {/*/>*/}
            </View>

        </Animated.ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 230,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
