import React from 'react';
import { View, Text, StyleSheet } from "react-native";

export default () =>{
    return (
        <View style={styles.InterfaceContainer}>
            <Text>Interface</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    InterfaceContainer: {
      width: "40%",
      backgroundColor:"red"
    },
  });