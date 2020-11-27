import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

//ICONS
import { Ionicons } from "@expo/vector-icons";

const IngredientHeader = ({ title, navigation }) => {
  return (
    <View>
      <SafeAreaView style={styles.safeArea} />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="ios-arrow-back"
            size={30}
            // color="blue"
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Ingredints required for {title}</Text>
      </View>
    </View>
  );
};

export default IngredientHeader;

const styles = StyleSheet.create({
  safeArea: { backgroundColor: "white" },
  container: {
    alignItems: "center",
    //marginBottom: 5,
    flexDirection: "row",
    backgroundColor: "white",
    paddingBottom: 5,
  },
  icon: { marginLeft: 10, color: "black" },
  text: {
    fontSize: 15,
    marginLeft: 8,
    color: "black",
    //  fontWeight: "bold",
  },
});
