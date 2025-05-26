import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { loginFunction, registerFunction } from "@/api/auth";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const registerInput = {
    username,
    password,
    image,
  };

  const registerHandling = () => {
    console.log("register Input", registerInput);
    mutate({username, image, password})
  };

  interface registerInput {
    username: string;
    password: string;
    image: string;
  }

  //let's try out useMutation for register
  const { mutate } = useMutation({
    mutationKey: ["Register"],
    mutationFn: ({ username, image, password }: registerInput) =>
      registerFunction(
        registerInput.username,
        registerInput.image,
        registerInput.password
      ),
    onSuccess: () => {
      // router.replace("/");
      alert("Registered");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="enter your username"
        onChangeText={(input) => {
          setUsername(input);
        }}
      >
        {" "}
      </TextInput>
      <Text>password</Text>
      <TextInput
        style={styles.input}
        placeholder="enter your username"
        onChangeText={(input) => {
          setPassword(input);
        }}
      >
        {" "}
      </TextInput>
      <Text>image</Text>
      <TextInput
        style={styles.input}
        placeholder="enter your username"
        onChangeText={(input) => {
          setImage(input);
        }}
      >
        {" "}
      </TextInput>

      <TouchableOpacity
        style={styles.registerButton}
        onPress={registerHandling}
      >
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    margin: 10,
    width: 250,
  },
  registerButton: {
    backgroundColor: "#4f46e5", // Indigo
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});
