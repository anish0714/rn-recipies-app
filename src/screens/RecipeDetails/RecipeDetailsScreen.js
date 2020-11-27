import React from "react";

import { Text, View, StyleSheet, ScrollView, Button } from "react-native";

//COMPONENT
import RecipeDetailsScreenCarouselHeader from "../../components/Header/RecipeDetailsScreenCarouselHeader";

//ICON
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RecipeDetailsScreen = ({ navigation }) => {
  const selectedRecipeData = navigation.getParam("selectedRecipeData");

  const {
    title,
    photosArray,
    time,
    ingredients,
    description,
  } = selectedRecipeData;
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <RecipeDetailsScreenCarouselHeader
          photosArray={photosArray}
          title={title}
          navigation={navigation}
        />
        <View style={{ margin: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            About {title}
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Cooking time</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons name="timer" size={24} color="black" />
              <Text style={{ marginLeft: 2 }}>{time} mins</Text>
            </View>
          </View>

          <Text style={{ color: "gray", marginTop: 10 }}>{description}</Text>
        </View>
      </ScrollView>
      <View
        style={{
          borderWidth: 2.5,
          marginBottom: 20,
          marginHorizontal: 5,
          borderRadius: 20,
        }}
      >
        <Button
          title="INGREDIENTS"
          color="black"
          onPress={() =>
            navigation.navigate("IngredientsDetails", { ingredients, title })
          }
        />
      </View>
    </View>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({});
