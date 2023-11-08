import { StyleSheet, TextInput, View, Text } from "react-native";
import { Colors } from "../utils/constants/constants";

export const InputTextView = (props) => {
  return (
    <View styles={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.inputViewContainer}>
        {props.icon && (
          <props.iconPack
            name={props.icon}
            size={props.iconSize}
            style={styles.iconStyle}
          />
        )}
        <TextInput style={styles.textInputStyle} />
      </View>

      {props.errorText && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{props.errorText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  inputViewContainer: {
    width: "100%",
    backgroundColor: Colors.nearlyWhite,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontFamily: "bold",
    marginVertical: 8,
    letterSpacing: 0.3,
    color: Colors.textColor,
    paddingHorizontal: 5,
  },
  iconStyle: {
    marginRight: 10,
    color: Colors.grey,
  },
  textInputStyle: {
    color: Colors.textColor,
    flex: 1,
    fontFamily: "regular",
    letterSpacing: 0.3,
    paddingTop: 10,
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    fontFamily: "regular",
    fontSize: 13,
    color: Colors.red,
    letterSpacing: 0.3,
  },
});
