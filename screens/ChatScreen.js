import React, { useCallback, useState } from "react";
import {
  Button,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ImagesRef } from "../config/ImagesRef";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Colors } from "../utils/constants/constants";

const ChatScreen = (props) => {
  const [messageText, setMessageText] = useState("");

  const sendMessage = useCallback(() => {
    setMessageText("");
  }, [messageText]);

  return (
    <SafeAreaView edges={["right", "left", "bottom"]} style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardscreenStyle}
        behavior={Platform.OS === 'ios' && "padding"}
        keyboardVerticalOffset={100}
      >
        <ImageBackground
          source={ImagesRef.chat_background}
          style={styles.backgroundImage}
        />

        <View style={styles.inputBottomContainer}>
          <TouchableOpacity onPress={() => {}} style={styles.attachButton}>
            <Ionicons name="attach" size={24} color={Colors.lightblue} />
          </TouchableOpacity>
          <TextInput
            placeholder={"Enter text to send"}
            style={styles.textInputStyle}
            value={messageText}
            onSubmitEditing={sendMessage}
            onChangeText={(text) => setMessageText(text)}
          ></TextInput>

          {messageText === "" && (
            <TouchableOpacity onPress={() => {}} style={styles.cameraButton}>
              <Feather name="camera" size={24} color={Colors.lightblue} />
            </TouchableOpacity>
          )}

          {messageText !== "" && (
            <TouchableOpacity
              onPress={sendMessage}
              style={{ ...styles.attachButton, ...styles.sendButton }}
            >
              <Ionicons name="send" size={20} color={Colors.white} />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  keyboardscreenStyle:{flex:1},
  backgroundImage: {
    flex: 1,
  },
  textInputStyle: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: Colors.meta_gray,
    paddingHorizontal: 15,
    marginHorizontal: 15,
  },
  attachButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
  },
  cameraButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
  },
  sendButton: {
    backgroundColor: Colors.lightblue,
    borderRadius: 50,
    padding: 8,
    width: 35,
  },
  inputBottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 60,
  },
});

export default ChatScreen;
