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
  import React, { useState ,useRef} from "react";
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
  const handleBack= () =>{
    navigation.navigate('HomePage'); 
  }
  const scrollViewRef = useRef(null);

  const handleButtonPress = (sectionId) => {
    navigation.navigate('HomePage',{scrollToSection: "activeSquadSection"})
  };
  
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
      <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false} scrollable={true}>
     
                
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
                    <View style={styles.exploreContainer}>
                <Text style={[styles.headingText,{fontSize:18,fontWeight:"400",color:"black"}]}>No Completed Squad Yet.</Text>
                <TouchableOpacity style ={styles.exploreButton}onPress={handleButtonPress}>
                <Text style={[styles.headingText,{ fontSize:18,fontWeight:"500",color:"white"}]}>No Completed Squad Yet.</Text>
                    {/* <Text styles ={styles.exploreText}>Explore Squads Now</Text> */}

                    </TouchableOpacity>
                    </View>
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
      height: height * 0.3,
      postion:'relative',
      top:0,
      marginTop:10,
      flex:1,
      backgroundColor:"white",
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
  exploreContainer:{
    opacity: 1,
      position: "relative",
      alignItems: "center",
      flex:0,
      flexDirection:'column',
      
  },
  exploreButton:{
    height:50,
    width:250,
    marginTop:10,
    top:0,
    position: 'relative',
    backgroundColor:"rgba(56, 199, 130, 0.8)",
    justifyContent:'center',
    alignItems:'center',
    marginLeft: 0,
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
  },

  
  
  });
  
  export default Component;
  