import React from "react";
import { StyleSheet,View, Text } from "react-native";
import { Colors } from "../utils/constants/constants";

export const PageContainer = (props) => {
  return (
    <View
      styles={{
        ...styles.container,
        ...props.styles,
      }}
    >
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: Colors.lightblue,
  },
});

