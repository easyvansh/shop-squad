import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Svg, { Defs, Pattern } from "react-native-svg";
import { Path as SvgPath } from "react-native-svg";
import { Text as SvgText } from "react-native-svg";
import { Image as ReactImage } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");



export default function SquadCard(props) {
  const {item} = props;
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
    <View style = {{alignItems: 'center'}}>
      <View style = {styles.squadContainer}>
      <Image
                  source={item.image}
                  style={styles.squadImage}
                />
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
  )
}

const styles = StyleSheet.create({


  squadContainer: {
    opacity: 1,
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "center",
    height:height*0.35,
    width:width*0.48,
    marginTop: height * 0.02,
    borderRadius:15,
    padding:1,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.9,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 2,
    shadowRadius: 2,
  },
  squadImageContainer: {
    borderWidth:5,
    borderColor:'black',
    height: height * 0.18,
    width: width * 0.42,
    overflow: "hidden",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  squadImage: {
    height: height * 0.22,
    width: width * 0.48,
    overflow: "hidden",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    resizeMode: "cover",
  },
  squadUserContainer: {
    alignSelf:'flex-start',
    left: 20,
    width: width * 0.15,
    height: width * 0.15,
    overflow: "hidden",
    padding:0.5,
  },
  squadUserImage: {
    width: width * 0.12,
    height: width * 0.12,
    resizeMode: "contain",
  },
  ratingsContainer: {
    flexDirection: "row",
  },
  ratings: {
    marginLeft:15,
    color: "rgba(122, 122, 122, 1)",
    fontSize: 20,
    fontWeight: "500",
    fontStyle: "normal",
    width: 40,
  },
  starContainer: {
    alignItems:'center',
    // borderWidth:5,
    position: "relative",
    left: 0.5,
    height: 30,
    width: 100,
    flexDirection: "row",
  },
  stars: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginHorizontal: 1,
  },


})