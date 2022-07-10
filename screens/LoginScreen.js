import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Button, Input, Image } from "react-native-elements";
import { auth } from "../firebase";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    //onAuthStateChanged knows when the persisted user object is first available.
    const unsubcribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        navigation.replace("Home");
      }
    });
    //cleanup function:
    return unsubcribe;
    // return () => {
    //     unsubcribe()
    // }
  }, []);

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainers}>
        <Input
          placeholder="Email"
          autoFocus
          type="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
      </View>
      <Button style={styles.button} onPress={signIn} title="Login" />
      <Button
        onPress={() => navigation.navigate("Register")}
        style={styles.button}
        type="outline"
        title="Register"
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
  inputContainers: {
    width: 300,
  },
});

export default LoginScreen;
