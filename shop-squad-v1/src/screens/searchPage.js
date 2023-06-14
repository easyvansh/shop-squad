import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from "react-native";
import Svg, {
  Defs,
  Pattern,
  Path as SvgPath,
} from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";

const { height, width } = Dimensions.get("window");

const SearchBar = () => {

  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.navigate('HomePage'); 
  };

  const weeklyTopImages = [
    { id: "1", path: require("./components/searchPage/weeklyTop1.png"),text:'CoffeeConnects Coffee' },
    { id: "2", path: require("./components/searchPage/weeklyTop2.png") ,text:"Reader's Notebook"},
    { id: "3", path: require("./components/searchPage/weeklyTop3.png"),text:"UCHINO's Towel" },
    { id: "4", path: require("./components/searchPage/weeklyTop4.png") ,text:"Lululemon's Bottle"},
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      
      <TouchableOpacity
        onPress={handleBackButtonPress}
        style={styles.menuButton}
      >

          <View style = {styles.backContainer}>
          <View
            style={styles.backIconContainer}
          >
       <Svg  style={styles.iconIonicIosArrowBack} preserveAspectRatio="none" viewBox="11.250576972961426 6.1936492919921875 13.5029296875 23.618850708007812" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 15.32109355926514 18 L 24.2578125 9.0703125 C 24.91875076293945 8.409375190734863 24.91875076293945 7.340624809265137 24.2578125 6.686718940734863 C 23.59687423706055 6.025781631469727 22.52812576293945 6.032812595367432 21.8671875 6.686718940734863 L 11.7421875 16.8046875 C 11.10234355926514 17.44453048706055 11.08828163146973 18.47109413146973 11.69296836853027 19.13203048706055 L 21.86015701293945 29.3203125 C 22.19062614440918 29.65078163146973 22.62656402587891 29.8125 23.05546951293945 29.8125 C 23.484375 29.8125 23.92031288146973 29.65078163146973 24.25078201293945 29.3203125 C 24.91172027587891 28.65937423706055 24.91172027587891 27.59062576293945 24.25078201293945 26.93671798706055 L 15.32109355926514 18 Z"  /></Svg>
        
          </View>
          </View>

      </TouchableOpacity>
        <View style={styles.searchContainer}>
          <View
            style={styles.searchBar}
          >
          <Text
            style={styles.searchText}
          >
            Search
          </Text>
          <View
            style={styles.searchIconContainer}
          >
            <Svg  style={styles.iconAwesomeSearch} preserveAspectRatio="none" viewBox="0 -3.1789141985427705e-7 18.113525390625 18.11667823791504" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 17.86724472045898 15.66302871704102 L 14.33979034423828 12.13557434082031 C 14.18057727813721 11.97636222839355 13.96475505828857 11.88790988922119 13.73831844329834 11.88790988922119 L 13.16161441802979 11.88790988922119 C 14.13812160491943 10.63897228240967 14.71836566925049 9.068068504333496 14.71836566925049 7.359182357788086 C 14.71836566925049 3.293941259384155 11.42442226409912 -3.17891419854277e-07 7.359182834625244 -3.17891419854277e-07 C 3.293941020965576 -3.17891419854277e-07 0 3.293941259384155 0 7.359182357788086 C 0 11.42442226409912 3.293941736221313 14.71836471557617 7.359182834625244 14.71836471557617 C 9.068069458007812 14.71836471557617 10.63897228240967 14.1381196975708 11.88790988922119 13.16161346435547 L 11.88790988922119 13.73831844329834 C 11.88790988922119 13.96475601196289 11.97636222839355 14.18057632446289 12.13557529449463 14.3397912979126 L 15.66302967071533 17.86724472045898 C 15.99560737609863 18.1998233795166 16.53339385986328 18.1998233795166 16.8624324798584 17.86724472045898 L 17.86370849609375 16.86596870422363 C 18.19628524780273 16.53339195251465 18.19628524780273 15.99560642242432 17.86724472045898 15.66302680969238 Z M 7.359182834625244 11.88790988922119 C 4.857767581939697 11.88790988922119 2.830454587936401 9.864133834838867 2.830454587936401 7.359182357788086 C 2.830454587936401 4.857767105102539 4.854229927062988 2.830454349517822 7.359182834625244 2.830454349517822 C 9.860595703125 2.830454349517822 11.88790988922119 4.85422945022583 11.88790988922119 7.359182357788086 C 11.88790988922119 9.860595703125 9.864133834838867 11.88790988922119 7.359182834625244 11.88790988922119 Z"  /></Svg>
        
          </View>
          </View>
        </View>
      <View style ={styles.suggestionsContainer}>
        <View style ={styles.suggestion}>
            <Text style = {{fontSize:24, fontWeight:"500",width:"85%"}}>Coffee </Text>
            <Image style ={{width:40,height:40,borderTopLeftRadius: width/4,borderTopRightRadius: width/4, borderBottomLeftRadius: width/4,borderBottomRightRadius: width/4,}} source ={require('./components/searchPage/suggestionImage.png')}/>
        </View>
        <View style ={styles.suggestion}>
            <Text style = {{fontSize:24, fontWeight:"500",width:"85%"}}>Tote Bag</Text>
            <Image style ={{width:40,height:40,borderTopLeftRadius: width/4,borderTopRightRadius: width/4, borderBottomLeftRadius: width/4,borderBottomRightRadius: width/4,}} />
        </View>
        <View style ={styles.suggestion}>
            <Text style = {{fontSize:24, fontWeight:"500",width:"85%"}}>PS5 </Text>
            <Image style ={{width:40,height:40,borderTopLeftRadius: width/4,borderTopRightRadius: width/4, borderBottomLeftRadius: width/4,borderBottomRightRadius: width/4,}} />
        </View>
        <View style ={{alignItems: "center",paddingVertical:10, borderWidth:0.5, borderColor: "grey", width:'100%',}}>
            <Text style = {{fontSize:20, fontWeight:"600",color:'grey',opacity:0.5}}>Show More</Text>
        </View>
      </View>
      <View style ={styles.weeklyTopContainer}>
        <View style = {{alignItems: "center",paddingHorizontal:20,borderColor: "grey",width:'100%',flexDirection:'row',}}>
          <Text style = {{fontSize:24,paddingBottom:15, fontWeight:"800",opacity: 1,color: "rgba(56, 199, 130, 1)",position: "relative", fontStyle: "normal",}}>Top Weekly Products</Text>
        </View>
        {weeklyTopImages.map((image) => (
        <View style ={styles.weeklyTop}>
            <Image key ={image.id} style ={{width:60,height:60,borderTopLeftRadius: width/16,borderTopRightRadius: width/16, borderBottomLeftRadius: width/16,borderBottomRightRadius: width/16,}}  source ={image.path}/>
            <Text style = {{paddingHorizontal:20,fontSize:20, fontWeight:"600"}}>{image.text}</Text>
        </View>
        ))}
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
    backgroundColor: "white",
  },
  container: {
    position: "relative",
    height: height*(1.3),
    width: "100%",
    top: Platform.OS === "android" ? 20 : 10,
    paddingTop: Platform.OS === "android" ? 15 : 5, // Adjust paddingTop for Android
  },
  backContainer:{
   left:10, 
   flex:0,
   height: height * 0.1,
   width: width * 0.24,
  },
  backIconContainer:{
    opacity: 1,
    position: "relative",
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "rgba(56, 199, 130, 1)",
    borderTopLeftRadius: width/18,
    borderTopRightRadius: width/18,
    borderBottomLeftRadius: width/18,
    borderBottomRightRadius: width/18,
    width: width * 0.15,
    height: width * 0.15,
    marginTop: 5,
    right: 0,
    left:5,
    marginBottom: 0,
    marginRight: 10,
    padding: 4,
    shadowColor: "black",
    shadowOpacity: 0.7,
    shadowOffset: {
      width: 0,
      height: 50,
    },
    shadowRadius: 10,
    elevation: 10,
  },
  menuButton:{
    flex:0,
    height: height * 0.08,
    width: width * 0.2,
    postion:'absolute'
  },
  iconIonicIosArrowBack:{
    opacity: 1,
    position: "absolute",
    width:15,
    height:25,
  },
  searchContainer: {
    flex: 0,
    marginTop: 15,
    position: "absolute",
    right: 10,
  },
  searchBar: {
    right:0,
    justifyContent: "center",
    opacity: 1,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: width /16,
    borderTopRightRadius: width /16,
    borderBottomLeftRadius: width /16,
    borderBottomRightRadius: width /16,
    shadowColor: "black",
    shadowOpacity: 0.7,
    shadowOffset: {
      width: 0,
      height: 50,
    },
    shadowRadius: 10,
    elevation: 10,
    height: height * 0.08,
    width: width * 0.72,
  },
  searchText: {
    opacity: 1,
    alignContent: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255,0)",
    color: "rgba(169, 169, 169, 1)",
    fontSize: 18,
    fontWeight: "600",
    fontStyle: "normal",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 15,
    padding: 8,
  },
  searchIconContainer: {
    opacity: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(56, 199, 130, 1)",
    borderTopLeftRadius: width/18,
    borderTopRightRadius: width/18,
    borderBottomLeftRadius: width/18,
    borderBottomRightRadius: width/18,
    width: width * 0.14,
    height: width * 0.14,
    marginTop: 0,
    right: 0,
    marginBottom: 0,
    marginRight: 10,
    padding: 8,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 5,
    elevation: 5,
  },
  iconAwesomeSearch: {
    opacity: 1,
    position: "relative",
    padding:5,
    width: width * 0.08,
    height: width * 0.08,
   
  },
  suggestionsContainer:{
    flex:0,
    paddingVertical:15,
  },
  suggestion:{
    alignItems: "center",
    paddingHorizontal:20,
    paddingVertical:10,
    borderWidth:0.5,
    borderColor: "grey",
    width:'100%',
    flexDirection:'row',
    
  },
  weeklyTopContainer:{
    flex:0,
    paddingVertical:25,
    justifyContent:'center',
    alignItems: "center",
  },
  weeklyTop:{
    alignItems: "center",
    paddingHorizontal:20,
    paddingVertical:15,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height:2,
    },
    backgroundColor: "white",
    shadowRadius: 5,
    elevation: 4,
    marginVertical:5,
    borderColor: "grey",
    width:'90%',
    flexDirection:'row',
    borderTopLeftRadius: width/32,
    borderTopRightRadius: width/32,
    borderBottomLeftRadius: width/32,
    borderBottomRightRadius: width/32,
    
  }
});

export default SearchBar;
