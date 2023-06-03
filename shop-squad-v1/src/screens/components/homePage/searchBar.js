import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Platform,
  Button
} from "react-native";
import Svg, {
  Defs,
  Pattern,
  Path as SvgPath,
  Text as SvgText,
  Image as SvgImage,
} from "react-native-svg";


const { height, width } = Dimensions.get("window");

const SearchBar = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      

        <View style={styles.searchContainer}>
          <View
            data-layer="54587e1b-8799-494d-aaed-295610888361"
            style={styles.searchBar}
          >
          <Text
            data-layer="1b53bcdc-9067-4e26-97e6-5073a7d2fafe"
            style={styles.searchText}
          >
            Search
          </Text>
          <View
            data-layer="4243b8da-304d-4a6b-8c9d-c69db1c9123f"
            style={styles.searchIconContainer}
          >
            <Svg data-layer="4bbb3f6e-5c09-420a-af92-d64d7efd97a5" style={styles.homePage_iconAwesomeSearch} preserveAspectRatio="none" viewBox="0 -3.1789141985427705e-7 18.113525390625 18.11667823791504" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 17.86724472045898 15.66302871704102 L 14.33979034423828 12.13557434082031 C 14.18057727813721 11.97636222839355 13.96475505828857 11.88790988922119 13.73831844329834 11.88790988922119 L 13.16161441802979 11.88790988922119 C 14.13812160491943 10.63897228240967 14.71836566925049 9.068068504333496 14.71836566925049 7.359182357788086 C 14.71836566925049 3.293941259384155 11.42442226409912 -3.17891419854277e-07 7.359182834625244 -3.17891419854277e-07 C 3.293941020965576 -3.17891419854277e-07 0 3.293941259384155 0 7.359182357788086 C 0 11.42442226409912 3.293941736221313 14.71836471557617 7.359182834625244 14.71836471557617 C 9.068069458007812 14.71836471557617 10.63897228240967 14.1381196975708 11.88790988922119 13.16161346435547 L 11.88790988922119 13.73831844329834 C 11.88790988922119 13.96475601196289 11.97636222839355 14.18057632446289 12.13557529449463 14.3397912979126 L 15.66302967071533 17.86724472045898 C 15.99560737609863 18.1998233795166 16.53339385986328 18.1998233795166 16.8624324798584 17.86724472045898 L 17.86370849609375 16.86596870422363 C 18.19628524780273 16.53339195251465 18.19628524780273 15.99560642242432 17.86724472045898 15.66302680969238 Z M 7.359182834625244 11.88790988922119 C 4.857767581939697 11.88790988922119 2.830454587936401 9.864133834838867 2.830454587936401 7.359182357788086 C 2.830454587936401 4.857767105102539 4.854229927062988 2.830454349517822 7.359182834625244 2.830454349517822 C 9.860595703125 2.830454349517822 11.88790988922119 4.85422945022583 11.88790988922119 7.359182357788086 C 11.88790988922119 9.860595703125 9.864133834838867 11.88790988922119 7.359182834625244 11.88790988922119 Z"  /></Svg>
        
          </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    position: "absolute",
    alignItems: "center",
    height: "20%",
    width: "100%",
    top: Platform.OS === "android" ? 20 : 10,
    paddingTop: Platform.OS === "android" ? 15 : 5, // Adjust paddingTop for Android
  },
  searchContainer: {
    flex: 1,
    marginTop: 15,
    position: "absolute",
    justifyContent: "center",
    alignContent: "center",
    height: height * 0.08,
    width: width * 0.82,
    right: 2,
  },
  searchBar: {
    justifyContent: "center",
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: width / 2,
    borderTopRightRadius: width / 2,
    borderBottomLeftRadius: width / 2,
    borderBottomRightRadius: width / 2,
    shadowColor: "black",
    shadowOpacity: 0.7,
    shadowOffset: {
      width: 0,
      height: 50,
    },
    shadowRadius: 10,
    elevation: 10,
    height: height * 0.08,
    width: width * 0.8,
  },
  searchText: {
    opacity: 1,
    alignContent: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255,0)",
    color: "rgba(169, 169, 169, 1)",
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 10,
    padding: 8,
    height: height * 0.05,
  },
  searchIconContainer: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(56, 199, 130, 1)",
    borderTopLeftRadius: width/2,
    borderTopRightRadius: width/2,
    borderBottomLeftRadius: width/2,
    borderBottomRightRadius: width/2,
    width: width * 0.1,
    height: width * 0.1,
    marginTop: 0,
    right: 0,
    marginBottom: 0,
    marginRight: 10,
    padding: 8,
    shadowColor: "black",
    shadowOpacity: 0.7,
    shadowOffset: {
      width: 0,
      height: 50,
    },
    shadowRadius: 10,
    elevation: 10,
  },
  iconAwesomeSearch: {
    opacity: 1,
    position: "absolute",
    width:width * 0.1,
    height:width * 0.1,
   
  },
});

export default SearchBar;
