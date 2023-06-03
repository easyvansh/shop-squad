import React, { useState, useRef } from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Text,
} from "react-native";
import Svg, { Defs, Pattern } from "react-native-svg";
import { Path as SvgPath } from "react-native-svg";
import { Text as SvgText } from "react-native-svg";
const { height, width } = Dimensions.get("window");

const Banners = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = (event) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / (width * 0.9));
    setActiveSlide(slide);
  };

  const scrollRef = useRef(null);
  const scrollToSlide = (slide) => {
    setActiveSlide(slide);
    scrollRef.current.scrollTo({ x: slide * (width * 0.9), animated: true });
  };

  const slides = [
    { id: 1, image: require("./slide1.png") },
    { id: 2, image: require("./slide2.png") },
    { id: 3, image: require("./slide3.png") },
    { id: 4, image: require("./slide4.png") },
  ];

  const data = [
    { id: "1", image: require("./banner1.png") },
    { id: "2", image: require("./banner2.png") },
  ];

  const renderBannerItem = ({ item }) => {
    return (
      <View style={styles.bannerContainer}>
        <Image source={item.image} style={styles.bannerImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {slides.map((slide, index) => (
            <Image source={slide.image} style={styles.image} key={slide.id} />
          ))}
        </ScrollView>
        <View style={styles.scrollIndicatorContainer}>
          {Array.from({ length: 4 }).map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => scrollToSlide(index)}
              style={[
                styles.scrollIndicator,
                activeSlide === index ? styles.activeScrollIndicator : null,
              ]}
            />
          ))}
        </View>
      </View>
      <View style={styles.rectangleContainer}>
        <FlatList
          data={data}
          renderItem={renderBannerItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View>
        <Text style= {styles.heading1}>Weekly Highlights</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.8,
    top: Platform.OS === "android" ? 60 : 50,
    marginTop: height * 0.04,
    left: 0,
    right: 0,
  },
  imageContainer: {
    position: "absolute",
    alignItems: "center",
    width: width * 0.9,
    height: height * 0.25,
    overflow: "hidden",
    top: 0,
    marginTop: 15,
    marginBottom: 0,
    paddingBottom: 0,
  },
  image: {
    height: height * 0.25,
    width: width * 0.9,
    overflow: "hidden",
    resizeMode: "contain",
    marginRight: 2,
  },
  scrollIndicatorContainer: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    marginTop: 2,
    bottom: 0,
    marginBottom: 0,
  },
  scrollIndicator: {
    width: 10,
    height: 10,
    borderRadius: 4,
    backgroundColor: "white",
    marginHorizontal: 5,
    opacity: 0.8,
    borderWidth: 1,
  },
  activeScrollIndicator: {
    backgroundColor: "grey",
    opacity: 1,
  },
  rectangleContainer: {
    position: "absolute",
    alignSelf: "center",
    width: width * 0.9,
    top: 0,
    marginTop: height * 0.28,
    left: 15,
    marginLeft: 5,
    right: 0,
    marginright: 2.5,
  },
  bannerContainer: {
    width: width * 0.43,
    height: height * 0.1,
    marginHorizontal: 2.5,
    overflow: "hidden",
    padding: 1,
  },
  bannerImage: {
    width: width * 0.45,
    height: height * 0.1,
    resizeMode: "cover",
    // resizeMode: "contain",
  },
  heading1:{
    width:width*0.9,
    fontSize: 16,
    fontWeight:"500",
    left:5,
    marginLeft:5,
  }
});

export default Banners;
