import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from "react-native";

const MenuButton = ({ onMenuClick, title, buttonImg }) => {
  //console.log(buttonImg);
  return (
    <TouchableHighlight
      style={{
        flexDirection: "row",
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
      }}
      onPress={() => onMenuClick()}
      underlayColor="rgba(128, 128, 128, 0.1)"
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <Image
          source={buttonImg}
          style={{
            height: 25,
            width: 25,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            marginLeft: 10,
            marginTop: 2,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default MenuButton;

const styles = StyleSheet.create({});
