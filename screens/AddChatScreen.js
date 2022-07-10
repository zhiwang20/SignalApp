import { StyleSheet, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "../firebase";
import { StatusBar } from "expo-status-bar";

const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState("");

  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => navigation.goBack())
      .catch((err) => alert(err.message));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a New Chat",
    });
  }, [navigation]);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Input
          value={input}
          onChangeText={(text) => setInput(text)}
          placeholder="Enter a Chat Name"
          leftIcon={
            <Icon
              style={{ marginRight: 5 }}
              name="wechat"
              type="antdesign"
              size={24}
              color={"gray"}
            />
          }
          onSubmitEditing={createChat}
        />
        <Button
          disabled={!input}
          onPress={createChat}
          title="Create New Chat"
        />
      </View>
    </>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%",
  },
});
