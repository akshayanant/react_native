import React, { Component, useState } from "react";
import { View, TextInput, StyleSheet, ScrollView } from "react-native";

import Post from "./post";
import TextIn from "./textInput";

function container() {
  const [messages, addMessage] = useState([]);

  const handleAdd = text => {
    addMessage(messages => {
      let list = [...messages];
      list.unshift({
        text: text,
        id: Math.random() + text
      });
      return list;
    });
    console.log(messages);
  };

  handleDeletePost = id => {
    addMessage(messages => {
      return messages.filter(message => message.id != id);
    });
  };

  return (
    <View style={styles.mainContainer}>
      <TextIn handleAdd={handleAdd} />
      <ScrollView>
        <View style={styles.textList}>
          {messages.map(message => (
            <Post
              key={message.id}
              message={message}
              handleDeletePost={handleDeletePost}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
export default container;

const styles = StyleSheet.create({
  mainContainer: {
    width: "95%",
    paddingVertical: 10,
    marginTop: 40,
    justifyContent: "space-around"
  },

  textList: {
    paddingVertical: 10,
    marginVertical: 10,
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "dodgerblue"
  }
});
