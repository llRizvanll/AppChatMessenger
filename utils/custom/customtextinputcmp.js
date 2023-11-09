import React, { useState, useEffect, useCallback } from "react";
import {
  TextInput
} from "react-native";

export const CustomTextInput = ({value, onChange, ...props }) => {

    const [textValue, setTextValue ] = useState("");

    const textValueChangeCallback = useCallback((newValue) => {
            if(newValue === undefined) return;
            setTextValue(newValue);
            onChange && onChange(newValue);
        }, [setTextValue,value]
    );
    return(
        <TextInput
        onChange={(event) => textValueChangeCallback(event.target.value)}
        value={textValue}
        {...props}

        style={{
            height: 50,
            width: "auto",
            borderRadius: 10,
            textAlign: "center",
            fontSize: 20
          }}
        ></TextInput>
    )
}
