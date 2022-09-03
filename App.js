import React from "react";
import { View, TextInput } from "react-native";

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
    />
  );
};

const UselessTextInputMultiline = () => {
  const [value, onChangeText] = React.useState("Input Code To Prettify");

  return (
    <View
      style={{
        backgroundColor: "aqua",
        borderBottomColor: "#000000",
        borderBottomWidth: 1,
        justifyContent: 'center', //Centered horizontally
        alignItems: 'center', //Centered vertically
        flex:1
      }}
    >
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        style={{ padding: 10, textAlign: "center", 
      backgroundColor:"white",
    borderRadius:"10px"}}
      />
    </View>
  );
};

export default UselessTextInputMultiline;
