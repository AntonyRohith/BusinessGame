import * as React from "react";
import { View, StyleSheet } from "react-native";

import Board from './src/component/Board/Board.jsx';
import Interface from './src/component/Interface/Interface.jsx';

export default function App() {
  return (
    <View style={styles.RootContainer}>
      <Board />
      <Interface />
    </View>
  );
}

const styles = StyleSheet.create({
  RootContainer: {
    display:"flex",
    flexDirection:"row",
    width:"100%",
    height:"100%"
  }
});