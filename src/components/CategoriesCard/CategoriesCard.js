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

import { recipies } from "../../data/dataArrays";

const CategoriesCard = ({ item: { photo_url, name, id } }) => {
  const getRecipies = (id) => {
    let count = 0;
    recipies.map((data) => {
      if (data.categoryId == id) {
        count++;
      }
    });
    let filterData = recipies.filter((recipe) => recipe.categoryId === id)
      .length;
    console.log(filterData);

    return count;
  };

  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ url: photo_url }} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>
        {recipies.filter((recipe) => recipe.categoryId === id).length}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    margin: 8,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  image: {
    width: "100%",
    height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    fontSize: 25,
    padding: 10,
  },
});
