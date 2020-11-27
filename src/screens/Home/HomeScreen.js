import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View, ScrollView, LogBox } from "react-native";
import { recipies, categories, ingredients } from "../../data/dataArrays";
//import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
//Components
import HomeScreenHeader from "../../components/Header/HomeScreenHeader";
import RenderRecipies from "../../components/RenderRecipies/RenderRecipies";

const HomeScreen = ({ navigation }) => {
  const [recipesData, setRecipiesData] = useState();
  const [categoriesData, setCategoriesData] = useState();
  const [ingredientsData, setIngredientsData] = useState();
  useEffect(() => {
    setRecipiesData(recipies);
    setCategoriesData(categories);
    setIngredientsData(ingredients);
  }, []);
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  return (
    <View style={styles.homeContainer}>
      {/* <ScrollView> */}
      <FlatList
        horizontal={false} //Vertical list
        // showsVerticalScrollIndicator={false} //--> Scroller Disable
        numColumns={2} //Defines number of columns
        key={2} //for number of columns
        keyExtractor={(item) => item.recipeId.toString()} //Needs to be string
        data={recipesData} //Array of data which needs to be looped and displayed
        ListHeaderComponent={<HomeScreenHeader navigation={navigation} />}
        ListFooterComponent={<View style={{ margin: 20 }} />}
        renderItem={({ item }) => {
          return (
            <RenderRecipies
              // title={item.title}
              // photo_url={item.photo_url}
              // photosArray={item.photosArray}
              // categoryId={item.categoryId}
              selectedRecipeData={item}
              categoriesData={categoriesData}
              navigation={navigation}
            />
          );
        }}
      />
      {/* </ScrollView> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
