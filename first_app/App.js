import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Container from "./src/components/container";

export default function App() {
  const [prevCount, next] = useState(1);
  return (
    <View style={styles.container}>
      <Container />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: "100%",
    backgroundColor: "#eff",
    alignItems: "center"
    // justifyContent: "space-"
  }
});
