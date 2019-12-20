import React, { Component, useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

function container() {
  const [text, newText] = useState("");
  const [messages, addMessage] = useState([]);

  const handleChangeText = event => {
    newText(event);
  };

  const handleAdd = () => {
    addMessage(messages => {
      let list = messages;
      list.unshift(text);
      return list;
    });
    newText("");
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          value={text}
          onChangeText={handleChangeText}
          style={styles.textField}
        />
        <Button title="Add" onPress={handleAdd} />
      </View>
      <View style={styles.textList}>
        {messages.map(message => (
          <View style={styles.textItem}>
            <Text>{message}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
export default container;

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 10,
    marginTop: 40,
    justifyContent: "space-around"
  },
  inputContainer: {
    padding: 10,
    flexDirection: "row",
    marginTop: 1,
    alignItems: "center",
    justifyContent: "space-around",
    borderColor: "green",
    borderWidth: 1
  },

  textField: {
    padding: 10,
    width: "70%",
    borderBottomWidth: 1,
    borderColor: "lightblue"
  },

  textItem: {
    paddingVertical: 10,
    width: "80%",
    borderBottomWidth: 0.5
  },

  textList: {
    paddingVertical: 10,
    marginVertical: 10,
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "green",
    borderWidth: 1
  }
});
