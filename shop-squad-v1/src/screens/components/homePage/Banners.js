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
import { TextInput, icker, TouchableHighlight } from "react-native";
import { Image as ReactImage } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProductDescription from "../../productDescription";

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

  const navigation = useNavigation();
  const handleProductPress = () => {
    navigation.navigate("ProductDescription");
  };

  const headingSlides = [
    { id: 1, image: require("./slide1.png") },
    { id: 2, image: require("./slide2.png") },
    { id: 3, image: require("./slide3.png") },
    { id: 4, image: require("./slide4.png") },
  ];

  const headingData = [
    { id: "1", image: require("./banner1.png") },
    { id: "2", image: require("./banner2.png") },
  ];

  const weeklyHighlightsData = [
    { id: "1", image: require("./banner2.png") },
    { id: "2", image: require("./banners4.png") },
    { id: "3", image: require("./banners5.png") },
  ];
  const topRetailersData = [
    { id: "1", image: require("./banners3.png") },
    { id: "2", image: require("./banners5.png") },
    { id: "3", image: require("./banner2.png") },
  ];

  const renderBannerItem = ({ item }) => {
    return (
      <View style={styles.bannerContainer}>
        <Image source={item.image} style={styles.bannerImage} />
      </View>
    );
  };

  const renderStars = () =>{
    const svgImages = [];
    for (let i = 0;i<5;i++){
      svgImages.push(<Svg
        style={styles.stars}
        preserveAspectRatio="none"
        viewBox="1.4413726329803467 -0.0008913278579711914 20 19.14251708984375"
        fill="rgba(255, 196, 0, 1)"
      >
        <SvgPath d="M 10.36847686767578 0.6650020480155945 L 7.927360534667969 5.614526271820068 L 2.46568775177002 6.410786628723145 C 1.486250281333923 6.552842140197754 1.093727588653564 7.760316848754883 1.804006576538086 8.451904296875 L 5.755401611328125 12.30236434936523 L 4.820824146270752 17.74160766601562 C 4.652599811553955 18.72478294372559 5.688112258911133 19.46122932434082 6.555400371551514 19.00141716003418 L 11.44137287139893 16.43319892883301 L 16.32734680175781 19.00141716003418 C 17.19463539123535 19.45749092102051 18.23014640808105 18.72478103637695 18.06192207336426 17.74160766601562 L 17.12734413146973 12.30236434936523 L 21.07873916625977 8.451903343200684 C 21.78901863098145 7.760316371917725 21.3964958190918 6.552842140197754 20.41705894470215 6.410786151885986 L 14.95538520812988 5.614526271820068 L 12.51426792144775 0.6650020480155945 C 12.07688522338867 -0.2172394245862961 10.80959892272949 -0.2284543961286545 10.3684778213501 0.6650020480155945 Z" />
      </Svg>)
    }
    return svgImages
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} scrollable={true}>
        {/* Heading Banner */}
        <View style={styles.imageContainer}>
          <ScrollView
            ref={scrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            {headingSlides.map((slide, index) => (
              <Image source={slide.image} style={styles.image} key={slide.id} />
            ))}
          </ScrollView>
          {/* Slide Image Indicator */}
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
        {/* Heading Banners (Only 2) */}
        <View style={styles.headContainer}>
          <FlatList
            data={headingData}
            renderItem={renderBannerItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.weeklyHighlightsContainer}>
          <Text style={styles.heading1}>Weekly Highlights</Text>

          <ScrollView
            ref={scrollRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            <View style={styles.weeklyHighlightsBannerContainer}>
              {weeklyHighlightsData.map((slide, index) => (
                <View style={styles.weeklyHighlightImageContainer}>
                  <Image
                    source={slide.image}
                    style={styles.weeklyHighlightImage}
                    key={slide.id}
                  />
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={styles.topRetailersContainer}>
          <Text style={styles.heading2}>Top Retailers</Text>
          <View style={styles.topRetailersBannerContainer}>
            <ScrollView
              ref={scrollRef}
              horizontal
              // pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={handleScroll}
              scrollEventThrottle={16}
            >
              {topRetailersData.map((slide, index) => (
                <View style={styles.topRetailerImageContainer}>
                  <Image
                    source={slide.image}
                    style={styles.topRetailerImage}
                    key={index}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={styles.activeSquadWrapper}>
          <Text style={styles.activeSquadText}>Active Squad</Text>

          <TouchableOpacity style={styles.button} onPress={handleProductPress}>
            <View style={styles.squadContainerLeft1}>
              <View style={styles.squadImageContainer}>
                <Image
                  source={require("./squad1.png")}
                  style={styles.squadImage}
                />
              </View>
              <View style={styles.squadUserContainer}>
                <Image
                  source={require("./user.png")}
                  style={styles.squadUserImage}
                />
              </View>
              <View style={styles.ratingsContainer}>
                <Text style={styles.ratings}>5.0</Text>
                <View style={styles.starContainer}>
                  {renderStars()}
                </View>
                <Text style={styles.ratings}>(9)</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.squadContainerRight1}>
            <View style={styles.squadImageContainer}>
              <Image
                source={require("./squad2.png")}
                style={styles.squadImageContainer}
              />
            </View>
            <View style={styles.squadUserContainer}>
              <Image
                source={require("./user.png")}
                style={styles.squadUserImage}
              />
            </View>
            <View style={styles.ratingsContainer}>
              <Text style={styles.ratings}>5.0</Text>
              <View style={styles.starContainer}>
              {renderStars()}
              </View>
              <Text style={styles.ratings}>(9)</Text>
            </View>
          </View>
          <View style={styles.squadContainerLeft2}>
            <View style={styles.squadImageContainer}>
              <Image
                source={require("./squad3.png")}
                style={styles.squadImage}
              />
            </View>
            <View style={styles.squadUserContainer}>
              <Image
                source={require("./user.png")}
                style={styles.squadUserImage}
              />
            </View>
            <View style={styles.ratingsContainer}>
              <Text style={styles.ratings}>5.0</Text>
              <View style={styles.starContainer}>
              {renderStars()}
              </View>
              <Text style={styles.ratings}>(9)</Text>
            </View>
          </View>
          <View style={styles.squadContainerRight2}>
            <View style={styles.squadImageContainer}>
              <Image
                source={require("./squad4.png")}
                style={styles.squadImage}
              />
            </View>
            <View style={styles.squadUserContainer}>
              <Image
                source={require("./user.png")}
                style={styles.squadUserImage}
              />
            </View>
            <View style={styles.ratingsContainer}>
              <Text style={styles.ratings}>5.0</Text>
              <View style={styles.starContainer}>
              {renderStars()}
              </View>
              <Text style={styles.ratings}>(9)</Text>
            </View>
          </View>

          <View style={styles.squadContainerLeft3}>
            <View style={styles.squadImageContainer}>
              <Image
                source={require("./squad5.png")}
                style={styles.squadImage}
              />
            </View>
            <View style={styles.squadUserContainer}>
              <Image
                source={require("./user.png")}
                style={styles.squadUserImage}
              />
            </View>
            <View style={styles.ratingsContainer}>
              <Text style={styles.ratings}>5.0</Text>
              <View style={styles.starContainer}>
              {renderStars()}
              </View>
              <Text style={styles.ratings}>(9)</Text>
            </View>
          </View>
          <View style={styles.squadContainerRight3}>
            <View style={styles.squadImageContainer}>
              <Image
                source={require("./squad6.png")}
                style={styles.squadImageContainer}
              />
            </View>
            <View style={styles.squadUserContainer}>
              <Image
                source={require("./user.png")}
                style={styles.squadUserImage}
              />
            </View>
            <View style={styles.ratingsContainer}>
              <Text style={styles.ratings}>5.0</Text>
              <View style={styles.starContainer}>
              {renderStars()}
              </View>
              <Text style={styles.ratings}>(9)</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  homePage: {
    height: "100%",
  },
  container: {
    flex: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    marginTop: height * 0.14,
    left: 0,
    bottom: 0,
    right: 0,
    height: "100%",
    
  },
  imageContainer: {
    width: width * 0.9,
    overflow: "hidden",
    top: 0,
    marginTop: 15,
    position: "relative",
    alignSelf: "center",
    height: height * 0.25,
    top: 0,
    marginTop: 15,
    marginBottom: 0,
    paddingBottom: 0,
  },
  image: {
    height: height * 0.25,
    width: width * 0.9,
    marginTop: 15,
    overflow: "hidden",
    resizeMode: "cover",
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
    width: 8,
    height: 8,
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
  headContainer: {
    width: width * 0.9,
    overflow: "hidden",
    top: 0,
    marginTop: 15,
    position: "relative",
    marginHorizontal: 5,
  },
  bannerContainer: {
    width: width * 0.44,
    height: height * 0.18,
    alignItems: "center",
    overflow: "hidden",
    marginRight: 5,
    borderColor: "black",
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
    shadowRadius: 2,
  },
  bannerImage: {
    width: width * 0.42,
    height: height * 0.1,
    resizeMode: "cover",
  },
  weeklyHighlightsContainer: {
    width: width * 0.9,
    height: height * 0.23,
    overflow: "hidden",
    top: 0,
    marginTop: 15,
    position: "relative",
    marginHorizontal: 5,
  },
  heading1: {
    width: width * 0.9,
    fontSize: 18,
    fontWeight: "500",
    position: "relative",
    marginBottom: 5,
    fontStyle: "normal",
    color: "rgba(50, 50, 50, 1)",
  },
  weeklyHighlightsBannerContainer: {
    flexDirection: "row",
  },
  weeklyHighlightImageContainer: {
    width: width * 0.44,
    height: height * 0.18,
    alignItems: "center",
    overflow: "hidden",
    marginRight: 5,
    borderColor: "black",
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
    shadowRadius: 2,
  },
  weeklyHighlightImage: {
    width: width * 0.42,
    height: height * 0.1,
    resizeMode: "cover",
  },
  topRetailersContainer: {
    width: width * 0.9,
    height: height * 0.23,
    overflow: "hidden",
    top: 0,
    marginTop: 15,
    position: "relative",
    marginHorizontal: 5,
  },
  heading2: {
    width: width * 0.9,
    fontSize: 18,
    fontWeight: "500",
    position: "relative",
    marginBottom: 5,
    fontStyle: "normal",
    color: "rgba(50, 50, 50, 1)",
  },
  topRetailersBannerContainer: {
    flexDirection: "row",
  },
  topRetailerImageContainer: {
    width: width * 0.44,
    height: height * 0.18,
    alignItems: "center",
    overflow: "hidden",
    marginRight: 5,
    borderColor: "black",
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
    shadowRadius: 2,
  },
  topRetailerImage: {
    width: width * 0.42,
    height: height * 0.1,
    resizeMode: "cover",
  },
  activeSquadWrapper: {
    width: width * 0.9,
    height: height * 1.2,
    overflow: "hidden",
    top: 0,
    marginTop: 15,
    position: "relative",
    marginHorizontal: 5,
  },
  activeSquadText: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 18,
    fontWeight: "700",
    fontStyle: "normal",
    textAlign: "left",
  },
  squadContainerLeft1: {
    opacity: 1,
    position: "absolute",
    alignContent: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
    marginBottom: 0,
    left: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.9,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    // borderWidth:5,
    elevation: 4,
    shadowRadius: 6,
    width: width * 0.42,
    height: height * 0.3,
  },
  squadContainerLeft2: {
    opacity: 1,
    position: "relative",
    alignContent: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
    // top:0,
    // borderWidth:5,
    marginTop: height * 0.01,
    marginRight: 0,
    marginBottom: 0,
    left: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.9,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 4,
    shadowRadius: 6,
    width: width * 0.42,
    height: height * 0.3,
  },
  squadContainerLeft3: {
    opacity: 1,
    position: "absolute",
    alignContent: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
    marginTop: height * 0.72,
    marginRight: 0,
    marginBottom: 0,
    left: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.9,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 4,
    shadowRadius: 6,
    width: width * 0.42,
    height: height * 0.3,
  },
  squadContainerRight1: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignContent: "center",
    right: 0,
    marginTop: height * 0.06,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.9,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 4,
    shadowRadius: 6,
    width: width * 0.42,
    height: height * 0.3,
  },
  squadContainerRight2: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignContent: "center",
    right: 0,
    marginTop: height * 0.39,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.9,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 4,
    shadowRadius: 6,
    width: width * 0.42,
    height: height * 0.3,
  },
  squadContainerRight3: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignContent: "center",
    right: 0,
    marginTop: height * 0.72,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.9,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 4,
    shadowRadius: 6,
    width: width * 0.42,
    height: height * 0.3,
  },
  squadImageContainer: {
    height: height * 0.18,
    width: width * 0.42,
    overflow: "hidden",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  squadImage: {
    resizeMode: "cover",
    height: height * 0.18,
    width: width * 0.42,
  },
  squadUserContainer: {
    top: 1,
    left: 5,
    width: width * 0.1,
    height: width * 0.1,
    overflow: "hidden",
  },
  squadUserImage: {
    width: width * 0.1,
    height: width * 0.1,
    resizeMode: "contain",
  },
  ratingsContainer: {
    flexDirection: "row",
  },
  ratings: {
    left: 5,
    color: "rgba(122, 122, 122, 1)",
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    width: 30,
  },
  starContainer: {
    position: "relative",
    left: 0.5,
    height: 25,
    width: 100,
    flexDirection: "row",
  },
  stars: {
    width: 18,
    height: 18,
    resizeMode: "contain",
    marginHorizontal: 1,
  },
  button: {
    marginTop: height * 0.03,
    // borderWidth:5,/
    width: width * 0.45,
    height: height * 0.32,
    marginBottom: 0,
    left: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
  },
});

export default Banners;
