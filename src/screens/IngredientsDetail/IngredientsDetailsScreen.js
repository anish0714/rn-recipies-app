import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import { ingredients } from "../../data/dataArrays";
//COMPONENT
import IngridentsList from "../../components/IngridentsList/IngridentsList";
import IngredientHeader from "../../components/Header/IngredientHeader";

const IngredientsDetailsScreen = ({ navigation }) => {
  const ingredientItem = navigation.getParam("ingredients");
  const title = navigation.getParam("title");
  const [
    ingredientsForCurrentRecipe,
    setIngredientsForCurrentRecipe,
  ] = useState([]);
  useEffect(() => {
    setIngredientsForCurrentRecipe(getAllIngredients(ingredientItem));
  }, []);

  const getAllIngredients = (idArray) => {
    const ingredientsArray = [];
    idArray.map((ingredientArrayForSpecificRecipe) => {
      ingredients.map((data) => {
        if (data.ingredientId == ingredientArrayForSpecificRecipe[0]) {
          ingredientsArray.push({
            ingredientId: data.ingredientId,
            ingredientName: data.name,
            ingredientImage: data.photo_url,
            quantity: ingredientArrayForSpecificRecipe[1],
          });
        }
      });
    });
    return ingredientsArray;
  };
  return (
    <View style={styles.container}>
      <IngredientHeader title={title} navigation={navigation} />
      <FlatList
        data={ingredientsForCurrentRecipe}
        keyExtractor={(item) => item.ingredientId.toString()}
        renderItem={({ item }) => {
          return (
            <IngridentsList
              ingredientImage={item.ingredientImage}
              ingredientName={item.ingredientName}
              quantity={item.quantity}
            />
          );
        }}
      />
    </View>
  );
};

export default IngredientsDetailsScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
