import React from 'react';
import{View,SafeAreaView,StyleSheet,ScrollView,Text,ImageBackground,Dimensions,Image, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const {height,width} = Dimensions.get('window');

const SideMenuScreen = ({ navigation }) => {
    const closeMenu = () => {
      navigation.closeDrawer();
    };
    // const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('SignUpPage'); 
  };
  
    return (
        // <SafeAreaView  >
          <ScrollView >
            <ImageBackground style={styles.background} source = {require('./components/sideMenu/bg.png')}>
            <View style={styles.container} >
            <View style = {styles.innerContainer}>
            <View style = {styles.userInfoContainer}>
                <View style = {styles.userImageContainer} >
                <Image style={styles.userImage} source = {require('./components/sideMenu/userImage.png')}/>
                </View>
                <View style = {styles.userNameContainer} >
                <Text style = {styles.userName}>Alfred Ng</Text>
                </View>
            </View>
            <View style = {styles.commands}>
            <View style = {styles.commandContainer}>
                <View style = {styles.commandTextContainerActive}>
                <Text style = {styles.commandTextActive}>Home</Text>
                </View>
                <View style = {styles.commandTextContainer}>

            <Text style = {styles.commandText}>
                Notifications</Text>
                </View>
                <View style = {styles.commandTextContainer}>

            <Text style = {styles.commandText}>Wishlist</Text>
                </View>
                
            </View>
            <View style = {styles.commandContainer}>
            <View style = {styles.commandTextContainer}>
                <Text style = {styles.commandText}>Host</Text>
                </View>
                <View style = {styles.commandTextContainer}>

            <Text style = {styles.commandText}>
                My Profile</Text>
                </View>
                <View style = {styles.commandTextContainer}>

            <Text style = {styles.commandText}>My Squad</Text>
                </View>
            </View>
            <View style = {styles.commandContainer}>
            <View style = {styles.commandTextContainer}>

            <Text style = {styles.commandText}>
                Settings</Text>
                </View>
            <TouchableOpacity onPress={handleLogout}>
                <View style = {styles.serviceCommandTextcontainerActive}>

            <Text style = {styles.serviceCommandText}>Logout</Text>
                </View>
            </TouchableOpacity>
            </View>
            </View>
            </View>
          </View>
          </ImageBackground>
          </ScrollView>
    );
  };

const styles = StyleSheet.create({

    container:{
        flex:1,
        height:height,
        borderWidth:5,
        width:width*0.8,
        justifyContent:'center',
        alignItems: 'center',
    },
    background:{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width:width,
        height:height*1.1,
    },
    innerContainer:{
        height:height*0.9,
        width:width*0.65,
        borderBottomRightRadius:width*0.65/4,
        borderTopRightRadius:width*0.65/4,
        backgroundColor:'white',
        left:0,
        marginLeft:0,
        position:'absolute',
    },
    text:{
        fontSize: 30,
    },
    userInfoContainer:{
        position:'relative',
        top:height*(0.06),
        height:height*0.08,
        width:width*(0.65),
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
        padding:5,
    },
    userImageContainer:{
        position:'relative',
        width:width*(0.2),
        height:width*(0.2),
        borderRadius:(width*0.2)/4,
        paddingLeft:20,
        marginHorizontal:8
    },
    userImage:{
        width:width*(0.17),
        height:width*(0.17),
        resizeMode:'cover'
    },
    userNameContainer:{
        position:'relative',
        width:width*(0.37),
        height:width*(0.2),
        paddingHorizontal:5,
        alignItems:'center',
        top:15,
        // justifyContent: 'center',
    },
    userName:{
        fontSize: 22,
        fontWeight:'800',
        color:"rgba(56, 199, 130, 1)",
        opacity:0.8,
    },
    commands:{
        position:'relative',
        height:height*(0.6),
        top:height*(0.07),
    },
    commandContainer:{
        position:'relative',
        height:height*(0.17),
        alignItems:'center',
        
    },
    serviceCommands:{
        position:'relative',
        height:height*(0.15),
    },
    commandTextContainer:{
        width:width*(0.5),
        height:height*(0.038),
        alignItems:'flex-start',
        borderRadius:(width*0.5)/64,
        marginHorizontal:25,
        paddingHorizontal:40,
        marginVertical:2.5,
        borderWidth:0.2,
        alignContent:'center',
        justifyContent:'center',
    },
    commandTextContainerActive:{
        width:width*(0.5),
        height:height*(0.038),
        alignItems:'flex-start',
        borderRadius:(width*0.5)/64,
        marginHorizontal:25,
        paddingHorizontal:40,
        marginVertical:2.5,
        borderWidth:0.2,
        alignContent:'center',
        justifyContent:'center',
        backgroundColor:"rgba(56, 199, 130, 0.1)",
    },
    commandTextActive:{
        fontSize:18,
        opacity:0.6,
        fontWeight:'800',
        color:"rgba(56, 199, 130, 0.8)"
    },
    commandText:{
        fontSize:18,
        opacity:0.6,
        fontWeight:'800',
        color:"grey"
    },
    serviceCommandTextcontainerActive:{
        width:width*(0.5),
        height:height*(0.038),
        alignItems:'flex-start',
        borderRadius:(width*0.5)/64,
        marginHorizontal:25,
        paddingHorizontal:40,
        marginVertical:2.5,
        borderWidth:0.2,
        alignContent:'center',
        justifyContent:'center',
        backgroundColor:"rgba(225, 0, 0, 0.1)"
    }
        ,
    serviceCommandText:{
        fontSize:18,
        opacity:0.7,
        fontWeight:'800',
        color:"rgba(225, 0, 0, 0.8)"
    },
})

export default SideMenuScreen;