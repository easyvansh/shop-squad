import React from "react";
import { Text, View, StyleSheet ,Dimensions,ScrollView} from "react-native";
import SearchBar from "./components/homePage/searchBar";

import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Slide from "./components/homePage/slide";
import Banners from "./components/homePage/Banners";


const { height, width } = Dimensions.get("window");

const HomePage = () => {
  const navigation = useNavigation;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={styles.menuButton}
      >
        <Image source={require("./components/homePage/menu-icon.png")} style={styles.menuIcon} />
      </TouchableOpacity>
      <SearchBar />
      <Banners/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  
  menuButton:{
    top:25,
    marginTop: 25,
    opacity: 1,
    position: "absolute",
    left:8,
    marginLeft: 8,
    
  },
  menuIcon:{
    opacity: 1,
    tintColor: 'rgba(56, 199, 130, 1)',
    position: "absolute",
    width:width * 0.1,
    height:width * 0.1,
  }
});

export default HomePage;
