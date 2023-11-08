import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PageContainer } from "./../components/PageContainer";

import { SignUpForm } from "../components/SignupForm";
import { SignInForm } from "../components/SigninForm";
import { Colors } from "../utils/constants/constants";
import { ImagesRef } from "../config/ImagesRef";

export const AuthScreen = (props) => {
  const [isSignup, setIsSignUp] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <PageContainer>
        <ScrollView>
          <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior={Platform.OS==='ios' && "height"  } keyboardVerticalOffset={100}>
            <View style={styles.imageContainer}>
              <Image source={ImagesRef.app_logo} style={styles.image}></Image>
            </View>

            {isSignup ? <SignUpForm /> : <SignInForm />}

            <TouchableOpacity
              onPress={() => setIsSignUp((prevState) => !prevState)}
              style={styles.linkContainer}
            >
              <Text style={styles.link}>
                {" "}
                {`Switch to ${isSignup ? "Sign in" : "Signup "} `}{" "}
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </PageContainer>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linkContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  link: {
    color: Colors.lightblue,
    letterSpacing: 0.3,
  },
  textStyle: {
    fontFamily: "black",
  },
  imageContainer: {
    maxHeight: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "50%",
    resizeMode: "contain",
  },
  keyboardAvoidingView:{
    flex:1,
    justifyContent:'center',
  },
});
