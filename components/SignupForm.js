import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../utils/constants/constants";
import { InputTextView } from "./../components/Input";
import { Feather } from "@expo/vector-icons";
import { SubmitButton } from "../components/SubmitButton";

export const SignUpForm = (props) => {
  const formLabels = {
    firstName: "First Name",
    lastName: "Last Name",
    mail: "Email",
    password: "Password",
  };

  const inputChangeHandler = (inputId, inputValue) => {
    
  }
  return (
    <>
      <InputTextView
        label={formLabels.firstName}
        icon="user"
        iconPack={Feather}
        iconSize={24}
      />
      <InputTextView
        label={formLabels.lastName}
        icon="user"
        iconPack={Feather}
        iconSize={24}
      />
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
        title="Sign up"
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
