import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  View,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import AppLoading from "../components/AppLoading";
// import FeaturedRecipes from "../components/FeaturedRecipes";
// import FeaturedCategories from "../components/FeaturedCategories";
// import LatestRecipes from "../components/LatestRecipes";
import { LinearGradient } from "expo-linear-gradient";
import Heading from "../components/Heading";
import Styles from "../config/Styles";
import Strings from "../config/Strings";
import ColorsApp from "../config/ColorsApp";
import { Title, Text, Divider, FAB } from "react-native-paper";
import ActiveSchedules from "../components/Home/ActiveSchedules";
import ScheduleForm from "../components/Home/ScheduleForm";

export default function Home(props) {
  const yOffset = useRef(new Animated.Value(0)).current;
  const headerOpacity = yOffset.interpolate({
    inputRange: [0, 200],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const [isLoaded, setIsLoaded] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);

  const hideModal = () => {
    setModalVisible(false);
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const onChangeScreen = (screen) => {
    props.navigation.navigate(screen);
  };

  useEffect(() => {
    props.navigation.setOptions({
      title: Strings.ST1,
      headerTransparent: true,
      headerTintColor: "#ffffff",
      headerTitleStyle: { opacity: headerOpacity },
      headerBackground: () => (
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            opacity: headerOpacity,
            backgroundColor: ColorsApp.PRIMARY,
          }}
        />
      ),
    });
  }, [headerOpacity]);

  if (isLoaded) {
    return (
      <Animated.ScrollView
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
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.8)", "transparent"]}
          style={Styles.homeOverlay}
        />

        <ImageBackground
          source={require("../assets/images/header.jpg")}
          resizeMode={"cover"}
          style={Styles.headerBackground}
        >
          <View style={Styles.headerOverlay}>
            <Title style={Styles.headerTitle}>{Strings.ST21}</Title>
            <TouchableOpacity
              onPress={() => onChangeScreen("search")}
              activeOpacity={0.9}
            >
              <View style={Styles.headerButton}>
                <Text style={Styles.headerButtonText}>{Strings.ST22}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <SafeAreaView>
          <View style={Styles.HomeScreen}>
            <View style={Styles.cardContent}>
              <Text style={{ fontSize: 28, fontWeight: "bold" }}>
                Active Schedules
              </Text>
            </View>
            <Divider style={{ marginTop: 10, paddingTop: 2 }} />
            <ScheduleForm
              isModalVisible={isModalVisible}
              hideModal={hideModal}
              id={1}
            />
            <ActiveSchedules showModal={showModal} />
          </View>
        </SafeAreaView>
      </Animated.ScrollView>
    );
  } else {
    return <AppLoading />;
  }
}

// import React from 'react';
// import { StyleSheet, Dimensions, ScrollView } from 'react-native';
// import { Button, Block, Text, Input, theme } from 'galio-framework';
//
// import { Icon, Product } from '../components/';
//
// const { width } = Dimensions.get('screen');
// import products from '../constants/products';
//
// export default class Home extends React.Component {
//   renderSearch = () => {
//     const { navigation } = this.props;
//     const iconCamera = <Icon size={16} color={theme.COLORS.MUTED} name="zoom-in" family="material" />
//
//     return (
//       <Input
//         right
//         color="black"
//         style={styles.search}
//         iconContent={iconCamera}
//         placeholder="What are you looking for?"
//         onFocus={() => navigation.navigate('Pro')}
//       />
//     )
//   }
//
//   renderTabs = () => {
//     const { navigation } = this.props;
//
//     return (
//       <Block row style={styles.tabs}>
//         <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Pro')}>
//           <Block row middle>
//             <Icon name="grid" family="feather" style={{ paddingRight: 8 }} />
//             <Text size={16} style={styles.tabTitle}>Categories</Text>
//           </Block>
//         </Button>
//         <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Pro')}>
//           <Block row middle>
//             <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8 }} />
//             <Text size={16} style={styles.tabTitle}>Best Deals</Text>
//           </Block>
//         </Button>
//       </Block>
//     )
//   }
//
//   renderProducts = () => {
//     return (
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.products}>
//         <Block flex>
//           <Product product={products[0]} horizontal />
//           <Block flex row>
//             <Product product={products[1]} style={{ marginRight: theme.SIZES.BASE }} />
//             <Product product={products[2]} />
//           </Block>
//           <Product product={products[3]} horizontal />
//           <Product product={products[4]} full />
//         </Block>
//       </ScrollView>
//     )
//   }
//
//   render() {
//     return (
//       <Block flex center style={styles.home}>
//         {this.renderProducts()}
//       </Block>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   home: {
//     width: width,
//   },
//   search: {
//     height: 48,
//     width: width - 32,
//     marginHorizontal: 16,
//     borderWidth: 1,
//     borderRadius: 3,
//   },
//   header: {
//     backgroundColor: theme.COLORS.WHITE,
//     shadowColor: theme.COLORS.BLACK,
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowRadius: 8,
//     shadowOpacity: 0.2,
//     elevation: 4,
//     zIndex: 2,
//   },
//   tabs: {
//     marginBottom: 24,
//     marginTop: 10,
//     elevation: 4,
//   },
//   tab: {
//     backgroundColor: theme.COLORS.TRANSPARENT,
//     width: width * 0.50,
//     borderRadius: 0,
//     borderWidth: 0,
//     height: 24,
//     elevation: 0,
//   },
//   tabTitle: {
//     lineHeight: 19,
//     fontWeight: '300'
//   },
//   divider: {
//     borderRightWidth: 0.3,
//     borderRightColor: theme.COLORS.MUTED,
//   },
//   products: {
//     width: width - theme.SIZES.BASE * 2,
//     paddingVertical: theme.SIZES.BASE * 2,
//   },
// });
