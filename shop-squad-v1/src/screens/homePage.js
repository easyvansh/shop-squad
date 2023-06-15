import React from "react";
import { Text, View, StyleSheet ,Dimensions,ScrollView} from "react-native";
import SearchBar from "./components/homePage/searchBar";

import { TouchableOpacity, Image,Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Slide from "./components/homePage/slide";
import Banners from "./components/homePage/Banners";
import SearchPage from "./searchPage";

const { height, width } = Dimensions.get("window");




const HomePage = () => {
  const navigation = useNavigation();

  const handleSearchBarPress = () => {
    navigation.navigate('SearchPage'); // Replace 'SearchResults' with the name of the search results page you want to navigate to
  };

  const openMenu = () => {
    navigation.openDrawer();
  };

  const CustomButton = ({ onPress }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.menuButton}
      >
        <Image source={require("./components/homePage/menu-icon.png")} style={styles.menuIcon} />
      </TouchableOpacity> 
    )
    
  };



  return (
   <View style={styles.container}>
      <CustomButton onPress={openMenu} />
      <TouchableOpacity onPress={handleSearchBarPress} style={styles.searchIcon}>
      <SearchBar />
      </TouchableOpacity>
      <Banners/>
    
    </View>
  );
};
const styles = StyleSheet.create({
  homePage:{
    flex:1,
    borderWidth:52,
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuButton:{
    top:5,
    marginTop: 20,
    opacity: 1,
    position: "absolute",
    left:10,
    marginLeft: 8,
    width:width * 0.12,
    height:width * 0.2,
    
  },
  menuIcon:{
    top:25,
    opacity: 1,
    tintColor: 'rgba(56, 199, 130, 1)',
    position: "absolute",
    width:width * 0.12,
    height:width * 0.12,
  },
  searchIcon:{
    width: "83%",
    height: "13%",
    right:0,
    top:0,
    marginRight: 0,
    opacity: 1,
    position: "absolute",
  }
});

export default HomePage;
