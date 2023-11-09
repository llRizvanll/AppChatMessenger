import React, { useCallback, useReducer } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { InputTextView } from "./../components/Input";
import { Feather } from "@expo/vector-icons";
import { SubmitButton } from "../components/SubmitButton";
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducers";
import { signup } from "../utils/actions/authActions";

export const initialState = {
  inputValues: {
    firstname: "",
    lastname: "",
    mail: "",
    password: "",
  },
  inputValidaties: {
    firstname: false,
    lastname: false,
    mail: false,
    password: false,
  },
  formIsValid: false,
};

export const SignUpForm = (props) => {
  const [formState, dispatchFormState] = useReducer(reducer, initialState);
  const formLabels = {
    firstname: "First Name",
    lastname: "Last Name",
    mail: "Email",
    password: "Password",
  };

  /**
   * form validation
   * @param {*} inputId
   * @param {*} inputValue
   */
  const inputChangeHandler = useCallback(
    (inputId, inputValue) => {
      console.log('input id & value ', inputId, ' --- ', inputValue);
      const result = validateInput(inputId, inputValue);
      dispatchFormState({ inputId, validationResult: result, inputValue });
    },
    [dispatchFormState]
  );

  const authHandler = () => {
    console.log("🚀 ~ file: SignupForm.js:55 ~ authHandler ~ formState.inputValues.firstname",
      formState.inputValues.lastname,
      formState.inputValues.mail,
      formState.inputValues.password,
      " formState.inputValues.firstname",
      formState.inputValues.lastname,
      formState.inputValues.mail,
      formState.inputValues.spassword);
    const action = signup(
      formState.inputValues.firstname,
      formState.inputValues.lastname,
      formState.inputValues.mail,
      formState.inputValues.password
    );

  };
  return (
    <>
      <InputTextView
        label={formLabels.firstname}
        icon="user"
        iconPack={Feather}
        iconSize={24}
        id="firstname"
        autoCapitalize="none"
        onInputChanged={inputChangeHandler}
        errorText={formState.inputValidaties["firstname"]}
      />
      <InputTextView
        label={formLabels.lastname}
        icon="user"
        id="lastname"
        iconPack={Feather}
        iconSize={24}
        autoCapitalize="none"
        onInputChanged={inputChangeHandler}
        errorText={formState.inputValidaties["lastname"]}
      />
      <InputTextView
        id="mail"
        label={formLabels.mail}
        icon="mail"
        iconPack={Feather}
        iconSize={24}
        onInputChanged={inputChangeHandler}
        keyboardType="email-address"
        autoCapitalize="none"
        errorText={formState.inputValidaties["mail"]}
      />
      <InputTextView
        id="password"
        label={formLabels.password}
        icon="lock"
        iconPack={Feather}
        autoCapitalize="none"
        secureTextEntry
        iconSize={24}
        onInputChanged={inputChangeHandler}
        errorText={formState.inputValidaties["password"]}
      />
      <SubmitButton
        title="Sign up"
        disabled={!formState.formIsValid}
        onPress={() => {
          console.log("Button pressed ");
          authHandler();
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
