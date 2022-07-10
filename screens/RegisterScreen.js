import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import { auth } from "../firebase";
const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to Login",
    });
  }, [navigation]);
  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
            imageUrl ||
            "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg",
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar style="light" />

      {/* Text from react-native-element has h3 */}
      <Text h3 style={{ marginBottom: 50, textAlign: "center" }}>
        Create a Signal account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="text"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile Image Url (Optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button
        containerStyle={styles.button}
        raised
        onPress={register}
        title="Register"
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  Button: {
    width: 200,
    marginTop: 10,
  },
});
