import React from "react";
//Screens
import HomeScreen from "../screens/Home/HomeScreen";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import RecipeScreen from "../screens/Recipe/RecipeScreen";
import DrawerContents from "../screens/Drawer/DrawerContents";
import SearchScreen from "../screens/Search/SearchScreen";
import RecipeDetailsScreen from "../screens/RecipeDetails/RecipeDetailsScreen";
import IngredientsDetailsScreen from "../screens/IngredientsDetail/IngredientsDetailsScreen";
//Navigation---> React Navigation 5
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// //Stack Navigator
// const StackNavigatorScreens = () => {
//   return (
//     <Stack.Navigator
//       headerMode="none"
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: "#009387",
//         },
//         headerTintColor: "#fff",
//         headerTitleStyle: {
//           fontWeight: "bold",
//         },
//       }}
//     >
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           title: "Overview",
//         }}
//       />
//       <Stack.Screen name="Categories" component={CategoriesScreen} />
//       <Stack.Screen name="Recipe" component={RecipeScreen} />
//       <Stack.Screen name="Search" component={SearchScreen} />
//     </Stack.Navigator>
//   );
// };

// //Drawer Navigator
// const DrawerStack = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: "#009387",
//         },
//         headerTintColor: "#fff",
//         headerTitleStyle: {
//           fontWeight: "bold",
//         },
//       }}
//       drawerStyle={
//         {
//           //width: 250,
//         }
//       }
//       drawerContent={(props) => <DrawerContents {...props} />}
//     >
//       <Drawer.Screen name="Recipies App" component={StackNavigatorScreens} />
//     </Drawer.Navigator>
//   );
// };

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <DrawerStack />
//     </NavigationContainer>
//   );
// };
// export default AppNavigator;

//Navigation -----> React Navigation 4
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

//Stack Navigator--->

//All Screens
const StackNavigatorScreens = createStackNavigator(
  {
    Home: HomeScreen,

    Recipe: RecipeScreen,
    // RecipesList: RecipesListScreen,
    IngredientsDetails: IngredientsDetailsScreen,
    RecipeDetails: RecipeDetailsScreen,
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        flex: 1,
      },
    }),
  }
);

//Drawer Navigator
const DrawerStack = createDrawerNavigator(
  {
    Main: StackNavigatorScreens,
    Categories: CategoriesScreen,
    Search: SearchScreen,
  },
  {
    drawerPosition: "left",
    initialRouteName: "Main",
    contentComponent: DrawerContents,
  }
);

export default AppNavigator = createAppContainer(DrawerStack);
