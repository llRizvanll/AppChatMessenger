import React, { useCallback, useReducer } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../utils/constants/constants";
import { InputTextView } from "./Input";
import { Feather } from "@expo/vector-icons";
import { SubmitButton } from "./SubmitButton";
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducers";
import { singin } from "../utils/actions/authActions";


export const initialState = {
  inputValues: {
mail: "",
password: "",
},
  inputValidaties: {
    mail: false,
    password: false,
  },
  formIsValid: false,
};
export const SignInForm = (props) => {
  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const formLabels = {
    firstName: "First Name",
    lastName: "Last Name",
    mail: "Email",
    password: "Password",
  };

  /**
   * form validation
   * @param {*} inputId
   * @param {*} inputValue
   */
  /**
   * form validation
   * @param {*} inputId
   * @param {*} inputValue
   */
  const inputChangeHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue);
      dispatchFormState({ inputId, validationResult: result,inputValue });
    },
    [dispatchFormState]
  );

  const authHandler = () => {
    singin(formState.mail,formState,password);
  }
  return (
    <>
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
