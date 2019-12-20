import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const post = props => {
  return (
    <TouchableOpacity
      onLongPress={() => props.handleDeletePost(props.message.id)}
    >
      <View style={styles.textItem}>
        <Text>{props.message.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default post;

const styles = StyleSheet.create({
  textItem: {
    padding: 5,
    marginVertical: 10,
    width: "90%",
    borderWidth: 0.5
  }
});
