import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../utils/constants/constants";
import { InputTextView } from "./Input";
import { Feather } from "@expo/vector-icons";
import { SubmitButton } from "./SubmitButton";

export const SignInForm = (props) => {
  const formLabels = {
    firstName: "First Name",
    lastName: "Last Name",
    mail: "Email",
    password: "Password",
  };
  return (
    <>
      <InputTextView
        label={formLabels.mail}
        icon="mail"
        iconPack={Feather}
        iconSize={24}
      />
      <InputTextView
        label={formLabels.password}
        icon="lock"
        iconPack={Feather}
        iconSize={24}
      />
      <SubmitButton
        title="Sign In"
        disabled={false}
        onPress={() => {
          console.log("Button pressed ");
        }}
        style={{ marginTop: 20 }}
      />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    fontFamily: "black",
  },
});
