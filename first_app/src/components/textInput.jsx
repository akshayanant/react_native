import React, { Component, useState } from "react";
import { TextInput, StyleSheet, View, Button } from "react-native";

const textInput = props => {
  const [text, newText] = useState("");

  const handleChangeText = event => {
    newText(event);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        multiline={true}
        value={text}
        placeholder="Say Something"
        onChangeText={handleChangeText}
        style={styles.textField}
      />
      <Button title="Post" onPress={() => props.handleAdd(text)} />
    </View>
  );
};

export default textInput;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    flexDirection: "row",
    marginTop: 1,
    alignItems: "center",
    justifyContent: "space-around",
    borderColor: "dodgerblue",
    borderWidth: 3
  },
  textField: {
    padding: 10,
    width: "70%",
    borderWidth: 1,
    borderColor: "dodgerblue",
    borderStyle: "solid"
  }
});
