import React from "react";
import { StyleSheet,View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../utils/constants/constants";

export const SubmitButton = (props) => {
    const enabledBgColor = props.color || Colors.primary;
    const disabledBgColor = Colors.grey;
    const bgColor = props?.disabled ? disabledBgColor: enabledBgColor;
    const btnTextColor = props.disabled ? Colors.grey:Colors.nearlyWhite;

  return (
  <TouchableOpacity 
    onPress={props.disabled? () => {} : props.onPress}
    style={{...styles.buttonStyle, 
    ...props.style,
    ...{backgroundColor:bgColor}}}>
    <Text style={{...styles.buttonText, ...{color:btnTextColor} }}>{props.title}</Text>
  </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  buttonStyle:{
    backgroundColor:Colors.primary,
    alignItems:'center',
    paddingHorizontal:30,
    paddingVertical:10,
    margin:10,
    borderRadius:5
  },
  buttonText:{
    color: Colors.nearlyWhite
  }
});

