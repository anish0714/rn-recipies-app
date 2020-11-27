import React, { useRef, useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";

//ICONS
import { Ionicons, EvilIcons } from "@expo/vector-icons";

//Constants
const { height, width } = Dimensions.get("window");

const IMAGE_HEIGHT = width / 2 + 100;
const RecipeDetailsScreenCarouselHeader = ({
  photosArray,
  navigation,
  title,
}) => {
  const carouselRef = useRef(null);
  const [slider1ActiveSlide, setSlider1ActiveSlide] = useState(0);

  const renderItem = ({ item }) => {
    return (
      <ImageBackground
        source={{ uri: item }}
        //resizeMode='contain'
        style={{
          // ...StyleSheet.absoluteFillObject,
          width: "100%",
          height: IMAGE_HEIGHT,
        }}
      >
        <SafeAreaView />
        <View
          style={{
            alignItems: "center",
            // marginHorizontal: 10,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="ios-arrow-back"
              size={30}
              // color="blue"
              style={{ marginLeft: 10, color: "black" }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 20,
              color: "black",
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 1,
            //flex: 1,
            //   alignItems: "center",
            // justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "lightgray",
            }}
          >
            *Contents can be added here for reference
          </Text>
        </View>
      </ImageBackground>
    );
  };
  return (
    <View style={styles.carouselContainer}>
      <View style={styles.carousel}>
        <Carousel
          ref={carouselRef}
          data={photosArray}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width}
          //Image poping while sliding--------
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          // inactiveSlideScale={0.5}
          // inactiveSlideOpacity={0.1}
          //----------------------------------
          firstItem={0}
          loop={true}
          autoplay={true}
          autoplayDelay={3000}
          autoplayInterval={2000}
          onSnapToItem={(index) => setSlider1ActiveSlide(index)}
          // itemHeight={height}
          containerCustomStyle={{ overflow: "visible" }}
          contentContainerCustomStyle={{ overflow: "visible" }}
          layout={"default"}
        />
        {/* <View style={styles.containerPagination}> */}
        <Pagination
          dotsLength={photosArray.length}
          activeDotIndex={slider1ActiveSlide}
          containerStyle={styles.paginationContainer}
          dotColor="black"
          dotStyle={styles.paginationDot}
          inactiveDotColor="gray"
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={carouselRef}
          tappableDots={!!carouselRef}
        />
        {/* </View> */}
      </View>
    </View>
  );
};

export default RecipeDetailsScreenCarouselHeader;

const styles = StyleSheet.create({
  carouselContainer: {
    //   minHeight: 250,
  },
  carousel: {},
  paginationContainer: {
    // paddingTop: 7,
    // paddingBottom: 1,
    //backgroundColor: 'lightgrey'
    flex: 1,
    position: "absolute",
    alignSelf: "center",
    paddingVertical: 8,
    marginTop: IMAGE_HEIGHT - 50,
  },
  paginationDot: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
    marginHorizontal: 0,
  },
  containerPagination: {
    width: "100%",
    height: 20,
    //backgroundColor: 'grey'
  },
});
