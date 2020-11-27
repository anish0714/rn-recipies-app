import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { block } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;

//Margin
const RECIPE_ITEM_MARGIN = 20;

const RenderRecipies = ({ selectedRecipeData, categoriesData, navigation }) => {
  const { categoryId, title, photo_url } = selectedRecipeData;
  //   const getCategoryName = (item) => {
  //     //MAP--->
  //     let name;
  //     categoriesData.map((data) => {
  //       if (data.id == item) {
  //         name = data.name;
  //       }
  //     });
  //     console.log(name);

  //     //FILTER--->
  //     let filterCategoryName = categoriesData.filter(({ id }) => id == item)[0];
  //     return categoriesData.filter(({ id }) => id == item)[0].name;
  //   };

  return (
    <TouchableOpacity
      style={styles.recipiesCardContainer}
      onPress={() =>
        navigation.navigate("RecipeDetails", {
          selectedRecipeData,
        })
      }
    >
      <Image
        source={{ url: photo_url }}
        //  resizeMode="contain"
        style={styles.image}
      />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.category}>
        {categoriesData.filter(({ id }) => id == categoryId)[0].name}
      </Text>
    </TouchableOpacity>
  );
};

export default RenderRecipies;

const styles = StyleSheet.create({
  recipiesCardContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#cccccc",
    width:
      (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
      recipeNumColums,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  image: {
    width:
      (SCREEN_WIDTH - (recipeNumColums + 2) * RECIPE_ITEM_MARGIN) /
      recipeNumColums,
    height: 150,
    borderRadius: 10,
    margin: 5,
  },
  title: {
    flex: 1,
    fontSize: 17,
    alignItems: "center",
    fontWeight: "bold",
    color: "#444444",
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  category: {
    marginTop: 5,
    marginBottom: 5,
  },
});
