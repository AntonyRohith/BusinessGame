import React from "react";
import { View, Text, StyleSheet } from "react-native";

import CornerBox from "./CornerBox.jsx";

export default () => {
  return (
    <View style={style.BoardContainer}>
      <CornerBox styles={{ right: 0, bottom: 0 }}></CornerBox>
      <CornerBox styles={{ bottom: 0 }}></CornerBox>
      <CornerBox styles={{}}></CornerBox>
      <CornerBox styles={{ right: 0 }}></CornerBox>
    </View>
  );
};

const style = StyleSheet.create({
  BoardContainer: {
    width: "60%",
    minHeight: "400px",
    position: "relative",
    backgroundColor: "aqua",
  },
});

const screenHeight = window.innerHeight;
