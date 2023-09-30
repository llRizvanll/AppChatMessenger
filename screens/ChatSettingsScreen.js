import React from "react";
import { StyleSheet, Text, View } from "react-native";


const ChatSettingsScreen = props => {
    return(
        <View style={styles.container}>
            <Text> ChatListScreen </Text>
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

  
export default ChatSettingsScreen;

