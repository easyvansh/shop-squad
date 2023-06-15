import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback
  } from "react-native";
  import React, { useState } from "react";
  import Svg, { Defs, Pattern } from "react-native-svg";
  import { Path as SvgPath } from "react-native-svg";
  import { Text as SvgText } from "react-native-svg";
  import { Image as SvgImage } from "react-native-svg";
  import { useNavigation,} from "@react-navigation/native";
import TopBar from "./topBar";
import { FlatList } from "react-native";
import { Product1, Product2, Product3, Product4, Product5 } from './productData';

const { height, width } = Dimensions.get("window");
  
const Component= () => {

  const navigation = useNavigation();
  const handleProductPress = () => {
    navigation.navigate("ProductDescription")
  }

  const gotoSquad = () =>{
    navigation.navigate('HomePage', { scrollToSection: true });
  }
  const hostingData = [
      { id: '1',  component: <Product1 onPress={handleProductPress} />  },
      { id: '2', component: <Product2 onPress={handleProductPress}/>},
    ];
  const participatingData = [
    
      { id: '3', component: <Product3 onPress={handleProductPress}/>},
      { id: '4', component: <Product4 onPress={handleProductPress}/>},
      { id: '5', component: <Product5 onPress={handleProductPress}/> },
    ];
  
    const renderProduct = ({ item }) => {
      return item.component;
      };
    
    return(
        <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} scrollable={true}>
     
                
                <View style = {styles.hostingContainer}>
                 <Text style={styles.headingText}>Hosting</Text>
                 <FlatList
        data={hostingData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
      />

                </View> 
                <View style = {styles.participatingContainer}>
                 <Text style={styles.headingText}>Paticipating</Text>
<View style={styles.productContainer}>

<FlatList
        data={participatingData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
      />
</View>

</View> 

                <View style={styles.completedContainer}>
                <Text style={[styles.headingText,{color:"rgba(56, 199, 130, 1)"}]}>Completed</Text>
                <TouchableOpacity onPress={gotoSquad}>
                    {/* <View style={[styles.button,{backgroundColor}]}> */}
                    <Text style ={style}>Explore Squads Now</Text>
                    {/* </View> */}

                    </TouchableOpacity>
                </View>
            </ScrollView>
            
            </View>
    )
  };
  
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      position: "relative",
      top: 0,
      marginTop: height * 0.1,
      left: 0,
      height:height*2,
      bottom: 0,
      right: 0,
      height: "100%",
    },
    hostingContainer:{
      postion:'relative',
      top:0,
      
      height: height * 0.38,
      width: width ,
      backgroundColor:'rgba(240, 255, 227, 1)',
      shadowColor: "black",
      shadowOpacity: 0,
      shadowOffset: {
        width: 50,
        height: 0,
      },
      elevation: 3,
      shadowRadius: 2,
      marginBottom:10,
    },
    participatingContainer:{
      postion:'relative',
      top:0,
      marginTop:10,
      height: height * 0.38,
      width: width ,
      backgroundColor:"rgba(56, 199, 130, 0.2)",
      shadowColor: "black",
      shadowOpacity: 0,
      shadowOffset: {
        width: 50,
        height: 0,
      },
      elevation: 0.5,
      shadowRadius: 2,
    },
    productContainer:{
      opacity: 1,
      position: "relative",
      alignItems: "center",
      marginBottom: 0,
      left: 5,
      width:width*0.98,
      flex:0,
      marginLeft: 0,
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      height: height * 0.3,
      flexDirection:'row',
    },
    completedContainer:{
      height: height,

      
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
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      right:0,
      marginHorizontal:8,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      shadowColor: 'rgba(0, 0, 0, 0.5)',
      shadowOpacity: 0.8,
      shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
    shadowRadius: 8,
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
    iconAwesomeShoppingBag:{
      width: width * 0.06,
      height: width * 0.06,
        resizeMode: "contain",
        position:'absolute',
        right:0,
        marginRight:5,
    },
    iconIconicMdAddContainer:{
      
      width: width * 0.03,
      height: width * 0.03,
      resizeMode: "contain",
      position:'absolute',
      right:0,
      bottom:0,
      marginBottom:10,
      alignItems: "center",
      justifyItems: "center",
      marginRight:0,
      backgroundColor:'white',
      borderRadius:width/32,
    },
    iconIonicMdAdd:{
      width: width * 0.03,
      height: width * 0.03,
    },
    squadUserContainer: {
      top: 1,
      left: 10,
      width: width * 0.4,
      height: width * 0.125,
      overflow: "hidden",
      flexDirection:'row',
      alignItems:'center',
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
  
  export default Component;
  