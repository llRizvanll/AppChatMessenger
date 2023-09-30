import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { StringConstant } from "../utils/constants/constants";


const ChatScreen = props => {
    return(
        <View style={styles.container}>
            <Text> Chat Screen </Text>
            <Button title="Go to settings " onPress={() => {
                props.navigation.navigate(StringConstant.CHAT_SETTINGS_SCREEN)
            }}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:"center",
      alignItems:'center'
    },
    textStyle: {
      fontFamily: "black",
    },
  });

  
export default ChatScreen;

