import React from "react";
import { View, StyleSheet } from "react-native";

export default (props) => {

  let styles = {
    position: "absolute",
    backgroundColor: "#fff",
    height: "20%",
    width: "20%",
  };

  styles={...styles,...props.styles};

  return <View style={styles}></View>;

};