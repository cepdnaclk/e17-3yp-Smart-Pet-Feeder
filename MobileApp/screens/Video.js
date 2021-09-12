import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import VideoPlayer from "expo-video-player";

export default function App() {
  console.log("video");
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          inFullscreen: false,

          // style: { justifyContent: "center", alignItems: "center" },
          source: {
            uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
