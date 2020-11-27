import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

//Icons
import { Ionicons } from "@expo/vector-icons";

const HomeScreenHeader = ({ navigation }) => {
  return (
    <View style={{ 
      backgroundColor: "#fff",
      paddingVertical: 15
}}>
  <SafeAreaView />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="ios-menu" size={25} color="gray" />
        </TouchableOpacity>
        <Text style={styles.centerText}>Recipies</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Ionicons name="ios-search" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    backgroundColor: "#fff",
 
  },
  centerText: {
    color: "black",
    fontSize: 20,
  },
});
export default HomeScreenHeader;
