import React, { useReducer, useState } from "react";
import {
    SafeAreaView,
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Title } from "react-native-paper";

const Verified = (props) => {
    const dispatch = useDispatch();


    return (
        <View style={{ flex: 1 }}>
            <Modal
                isVisible={props.isModalVisible}
                backdropOpacity={0.8}
                onBackdropPress={props.hideModal}
                animationInTiming={1}
                animationOutTiming={1}
                // coverScreen={true}
                hasBackdrop={true}
                backdropTransitionInTiming={1}
                backdropTransitionOutTiming={1}
            >
                <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
                    <View style={Styles.Container}>
                        <ScrollView>
                            <View style={Styles.Details}>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        lineHeight: 22,
                                        textAlign: "center",
                                        color: "#194d33",
                                    }}
                                >
                                    VERIFICATION LINK HAS SENT TO YOUR EMAIL
                                </Text>
                            </View>

                            <View style={Styles.Button}>
                                <TouchableOpacity
                                    onPress={props.hideModal}
                                >
                                    <Avatar.Icon
                                        icon="check"
                                        size={34}
                                        backgroundColor = "green"
                                    />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </Modal>
        </View>
    );
};

const Styles = StyleSheet.create({
    Container: {
        marginLeft: Platform.OS === "ios" ? "2.5%" : "5%",
        width: Platform.OS === "ios" ? "95%" : "90%",
        height: "auto",
        justifyContent: "center",
        backgroundColor: "#fff",
        paddingTop: 30,
        // paddingBottom: 20,
        borderWidth: 3,
        borderColor: "#194d33",
        maxHeight: "70%",
    },

    Details: {
        marginHorizontal: 20,
    },
    Button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // flexWrap: "wrap",
        paddingTop: 20,
        paddingBottom: 20,
    },
});

export default Verified;
