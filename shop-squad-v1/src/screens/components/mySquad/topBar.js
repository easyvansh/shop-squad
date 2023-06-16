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
  import { useNavigation } from "@react-navigation/native";
  
  const { height, width } = Dimensions.get("window");

  
  const TopBar= () => {
    const navigation = useNavigation();
    const handleBack= () =>{
      navigation.navigate('HomePage'); 
    }
  
    return (
          <View style={styles.container}>
            < View style={styles.topBar}>
              <TouchableOpacity  style={styles.backButtonContainer} onPress={handleBack}>
                <Svg
                  style={styles.iconIonicIosArrowBack}
                  preserveAspectRatio="none"
                  viewBox="11.250576972961426 6.1936492919921875 13.5029296875 23.618850708007812"
                  fill="rgba(56, 199, 130, 1)"
                >
                  <SvgPath d="M 15.32109355926514 18 L 24.2578125 9.0703125 C 24.91875076293945 8.409375190734863 24.91875076293945 7.340624809265137 24.2578125 6.686718940734863 C 23.59687423706055 6.025781631469727 22.52812576293945 6.032812595367432 21.8671875 6.686718940734863 L 11.7421875 16.8046875 C 11.10234355926514 17.44453048706055 11.08828163146973 18.47109413146973 11.69296836853027 19.13203048706055 L 21.86015701293945 29.3203125 C 22.19062614440918 29.65078163146973 22.62656402587891 29.8125 23.05546951293945 29.8125 C 23.484375 29.8125 23.92031288146973 29.65078163146973 24.25078201293945 29.3203125 C 24.91172027587891 28.65937423706055 24.91172027587891 27.59062576293945 24.25078201293945 26.93671798706055 L 15.32109355926514 18 Z" />
                </Svg>
              </TouchableOpacity>
                <Text style={styles.heading}>My Squad</Text>
              
            </View>
            </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      height: height * 0.08,
      marginTop: height * 0.03,
      width:"100%",
      flex: 0,
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:'white'
    },
    topBar: {
      position: "absolute",
      justifyContent: "center",
      height: height * 0.08,
      width: width,
      borderBottomLeftRadius: width / 16,
      borderBottomRightRadius: width / 16,
      backgroundColor:'white',
    },
    heading:{
        fontSize:25,
        alignSelf:'center',
        fontWeight:'bold',
    },
    backButtonContainer: {
      flex: 0,
      justifyContent: "center",
      alignItems: "center",
      height: width * 0.18,
      width: width * 0.18,
      position: "absolute",
      left: 15,
    },
    iconIonicIosArrowBack: {
      opacity: 1,
      position: "absolute",
      width: 15,
      height: 25,
    },
  });
  
  export default TopBar;
  