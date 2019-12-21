import React, { Component, useState } from "react";
import { View, TextInput, StyleSheet, ScrollView, Button } from "react-native";

import Post from "./post";
import TextIn from "./textInput";

function container() {
  const [messages, addMessage] = useState([]);
  const [postMode, changePostMode] = useState(false);

  const handleAdd = text => {
    addMessage(messages => {
      let list = [...messages];
      list.unshift({
        text: text,
        id: Math.random() + text
      });
      return list;
    });
    changePostMode(false);
  };

  handleDeletePost = id => {
    addMessage(messages => {
      return messages.filter(message => message.id != id);
    });
  };

  const handleMakePost = () => {
    changePostMode(true);
  };

  const handleCancel = () => {
    changePostMode(false);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.button}>
        <Button title="Make Post" onPress={handleMakePost} />
      </View>
      <View style={styles.textList}>
        <TextIn
          handleAdd={handleAdd}
          visible={postMode}
          handleCancel={handleCancel}
        />
        <ScrollView>
          <View>
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
    </View>
  );
}
export default container;

const styles = StyleSheet.create({
  mainContainer: {
    width: "95%",
    paddingVertical: 10,
    marginTop: 40,
    justifyContent: "space-around",
    alignItems: "center"
  },

  button: {
    width: "50%"
  },

  textList: {
    paddingVertical: 10,
    marginVertical: 10,
    justifyContent: "space-around",
    width: "80%"
  }
});
