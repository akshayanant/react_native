import React, { Component, useState } from "react";
import { TextInput, StyleSheet, View, Button, Modal } from "react-native";

const textInput = props => {
  const [text, newText] = useState("");

  const handleChangeText = event => {
    newText(event);
  };

  const handleAddText = () => {
    props.handleAdd(text);
    newText("");
  };

  const handleCancel = () => {
    props.handleCancel();
    newText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          multiline={true}
          value={text}
          placeholder="Say Something"
          onChangeText={handleChangeText}
          style={styles.textField}
        />
        <View style={styles.buttons}>
          <View>
            <Button title="cancel" onPress={handleCancel} color="blue" />
          </View>
          <View style={styles.buttons}>
            <Button title="Post" onPress={handleAddText} color="green" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default textInput;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    marginTop: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%"
  },
  textField: {
    padding: 10,
    marginVertical: 10,
    width: "80%",
    borderWidth: 1
  },
  buttons: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "center"
  }
});
