import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    Image,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import Svg, { Defs, Pattern } from "react-native-svg";
  import { Path as SvgPath } from "react-native-svg";
  import { Text as SvgText } from "react-native-svg";
  import { Image as SvgImage } from "react-native-svg";
  import { useNavigation,} from "@react-navigation/native";
import TopBar from "./components/mySquad/topBar";
import Component from "./components/mySquad/component";
  
  const { height, width } = Dimensions.get("window");

  
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


  const MySquad= () => {

    
    return(
      <View style={styles.container}>
        <TopBar/>
        <Component/>
            </View>
    )
  };
  
  const styles = StyleSheet.create({
    container:{
      flex: 0,
      height: "100%",
      width: "100%",
      backgroundColor:'white',
    },
    hostingContainer:{
      postion:'relative',
      top:0,
      borderWidth:5,
      marginTop:10,
      height: height * 0.4,
      width: width ,
      backgroundColor:'rgba(240, 255, 227, 1)',
    },
    headingText: {
      color: "rgba(50, 50, 50, 1)",
      fontSize: 20,
      fontWeight: "800",
      fontStyle: "normal",
      textAlign: "left",
      paddingHorizontal:25,
      paddingVertical:10,
    },
    squadContainer: {
      opacity: 1,
      position: "relative",
      alignContent: "center",
      backgroundColor: "rgba(255, 255, 255, 1)",
      marginBottom: 0,
      left: 10,
      marginLeft: 10,
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
      width: width * 0.44,
      height: height * 0.28,
    },
    squadImageContainer: {
      height: height * 0.18,
      width: width * 0.44,
      overflow: "hidden",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    squadImage: {
      resizeMode: "cover",
      height: height * 0.18,
      width: width * 0.44,
    },
    squadUserContainer: {
      top: 1,
      left: 10,
      width: width * 0.125,
      height: width * 0.125,
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
    marginTop:0,
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
  
  export default MySquad;
  