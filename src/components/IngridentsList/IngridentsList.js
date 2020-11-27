import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const IngridentsList = ({ ingredientImage, ingredientName, quantity }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.listContainer}
        onPress={() => setIsClicked(!isClicked)}
      >
        <View style={styles.innerAlignment}>
          <Image
            resizeMode="contain"
            source={{ url: ingredientImage }}
            style={styles.image}
          />
          <View style={styles.textView}>
            <Text style={styles.upperText}>{ingredientName}</Text>
            <Text style={styles.bottomText}>{quantity}</Text>
          </View>
        </View>

        <Ionicons
          name={isClicked ? "ios-arrow-down" : "ios-arrow-forward"}
          size={50}
          color="lightgray"
          style={styles.arrowForward}
        />
      </TouchableOpacity>
      {isClicked ? (
        <Image
          //resizeMode="contain"
          source={{ url: ingredientImage }}
          style={{
            width: Dimensions.get("window").width - 30,
            height: Dimensions.get("window").width,
            //  alignItems: "center",
            alignSelf: "center",
          }}
        />
      ) : null}
    </View>
  );
};

export default IngridentsList;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    borderWidth: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    marginRight: 1,
  },
  innerAlignment: {
    // margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  textView: { marginLeft: 15 },
  upperText: { fontWeight: "bold" },
  bottomText: { color: "grey" },
  arrowForward: { marginHorizontal: 10 },
});
