import Dialog from "react-native-dialog";
import React, { useReducer, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";

const FeedNowDialogBox = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <Modal
                isVisible={props.isDialogShow}
                backdropOpacity={0.8}
                onBackdropPress={props.hideDialog}
                animationInTiming={1}
                animationOutTiming={1}
                hasBackdrop={true}
                backdropTransitionInTiming={1}
                backdropTransitionOutTiming={1}
            >
                <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
                    <View style={Styles.Container}>
                        <View style={Styles.Details}>
                            <Text style={Styles.Title}>Feed Now</Text>
                            <Text style={Styles.Description}>
                                Do you want to feed your pet now ?
                            </Text>

                            <View style={Styles.Inline}>
                                <Dialog.Button label="Cancel" onPress={props.hideDialog} />
                                <Dialog.Button label="Feed Now" onPress={props.feedNowHandler} />
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
        </View>
    );
};

const Styles = StyleSheet.create({
    Container: {
        width: "100%",
        height: 170,
        justifyContent: "center",
        backgroundColor: "#fff",
    },

    Details: {
        marginHorizontal: 30,
    },

    Inline: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        flexWrap: "wrap",
        marginTop: 10,
    },
    Title: {
        fontWeight: "bold",
        fontSize: 18,
    },

    Description: {
        fontSize: 16,
        marginTop: 10,
    },
});

export default FeedNowDialogBox;
