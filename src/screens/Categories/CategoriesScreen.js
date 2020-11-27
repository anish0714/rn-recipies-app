import React from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { categories } from "../../data/dataArrays";
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";
const CategoriesScreen = ({ navigation }) => {
  //console.log(categories)
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView />
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return <CategoriesCard item={item} navigation={navigation} />;
        }}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
