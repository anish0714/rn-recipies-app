import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import MenuButton from "./MenuButton";

//Icons
import { Ionicons } from "@expo/vector-icons";

//Navigation
import { useNavigation } from "@react-navigation/native";

const DrawerContents = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          styles={{
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              //alignItems: "center",
              paddingHorizontal: 10,
              // justifyContent: "center",
              //borderWidth: 10,
            }}
          >
            {/* <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="ios-home" size={25} color="black" />
              )}
              label="HOME"
              onPress={() => {
                props.navigation.navigate("Home");
                props.navigation.closeDrawer();
              }}
            /> */}
            <MenuButton
              title="HOME"
              buttonImg={require("../../../assets/icons/home.png")}
              onMenuClick={() => {
                props.navigation.navigate("Home");
                props.navigation.closeDrawer();
              }}
            />
            <MenuButton
              title="CATEGORIES"
              buttonImg={require("../../../assets/icons/category.png")}
              onMenuClick={() => props.navigation.navigate("Categories")}
            />
            <MenuButton
              title="SEARCH"
              buttonImg={require("../../../assets/icons/search.png")}
              onMenuClick={() => props.navigation.navigate("Search")}
            />
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContents;

const styles = StyleSheet.create({
  userInfoSection: {
    paddingLeft: 20,
  },
});

{
  /* <View
      styles={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          paddingHorizontal: 20,
        }}
      >
        <MenuButton
          title="HOME"
          source={require("../../../assets/icons/home.png")}
          onMenuClick={() => navigation.navigate("Home")}
        />
      </View>
    </View> */
}
///////////////////////////////////

{
  /* <View style={{ flex: 1 }}>
<DrawerContentScrollView {...props}>
  <View style={{ flex: 1 }}>
    <View style={styles.userInfoSection}>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Image source={require("../../../assets/icons/home.png")} />
      </View>
    </View>
  </View>
</DrawerContentScrollView>
</View> */
}
