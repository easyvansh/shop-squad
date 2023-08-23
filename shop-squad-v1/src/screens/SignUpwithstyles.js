import React, { useState, useEffect } from 'react';
import {
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Linking,
  Image as ReactImage,
  View, TextInput, StyleSheet, Pressable
} from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './config';
import { useCreateUserMutation } from "../../store/apiSlice";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BgEllipse from '../signUpPage/bgEllipse';
import Content from '../signUpPage/content';
import Svg, {
  Defs,
  Pattern,
  Path as SvgPath,
  Text as SvgText,
  Image as SvgImage,
} from "react-native-svg";

const {height,width}=Dimensions.get('window')
function Signup({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [createUser] = useCreateUserMutation();
  useEffect(() => {
    // Enable the button only when both email and passwords are filled
    setIsButtonEnabled(email && password && confirmPassword);
  }, [email, password, confirmPassword]);

  const createAccount = async () => {
    try {
      if (password === confirmPassword) {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('User successfully signed up!');
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Password:', password);
        // If account ok -> create the user on the database
        onCreateUser();
        navigation.navigate('Main');
      } else {
        setError("Passwords don't match");
      }
    } catch (error) {
      console.error('Sign-up error:', error.code, error.message);
      if (error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password') {
        setError('Your email or password was incorrect');
      } else if (error.code === 'auth/email-already-in-use') {
        setError('An account with this email already exists');
      } else if (error.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters');
      } else {
        setError('There was a problem creating your account');
      }
    }
  };



  

  const dispatch = useDispatch();
  
  const onCreateUser = async () => {
    const user = auth.currentUser;
    const result = await createUser({
      user: email,
      customer: {
        name: fullName,
        address: null,
        email: email,
      },
      uid: user.uid,
    });
    
    
    if (result.data?.status === "OK") {
      Alert.alert(
        "User has been Created",
        `Your User reference is: ${result.data.data.ref}`
        ); 
        }
      };

  return (
    <View style={styles.container}>
      <BgEllipse />
      <View style={styles.iconContainer}>
            <Svg
              style={styles.iconMaterialPerson}
              preserveAspectRatio="none"
              viewBox="6 6 50 50"
              fill="rgba(255, 255, 255, 1)"
            >
              <SvgPath d="M 31 31 C 37.90625 31 43.5 25.40625 43.5 18.5 C 43.5 11.59374809265137 37.90625 6 31 6 C 24.09374809265137 6 18.5 11.59374809265137 18.5 18.5 C 18.5 25.40625 24.09374809265137 31 31 31 Z M 31 37.25 C 22.65624809265137 37.25 6 41.4375 6 49.74999618530273 L 6 55.99999618530273 L 55.99999618530273 55.99999618530273 L 55.99999618530273 49.74999618530273 C 55.99999618530273 41.4375 39.34375 37.25 31 37.25 Z" />
            </Svg>
      </View>
      
      <View style={styles.inputContainer}>
      <TextInput
        value={fullName}
        onChangeText={setFullName}
        placeholder="Enter full name"
        autoCapitalize="words"
        style={styles.fullname}
        placeholderTextColor="rgba(255, 255, 255, 1)"
        underlineColorAndroid="transparent"
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholder="Enter email address"
        autoCapitalize="none"
        style={styles.emailAddress}
        placeholderTextColor="rgba(255, 255, 255, 1)"
        underlineColorAndroid="transparent"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        autoCapitalize="none"
        placeholderTextColor="rgba(255, 255, 255, 1)"
        underlineColorAndroid="transparent"
        secureTextEntry={true}
        style={styles.password}
      />
      <TextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm password"
        autoCapitalize="none"
        placeholderTextColor="rgba(255, 255, 255, 1)"
        underlineColorAndroid="transparent"
        secureTextEntry={true}
        style={styles.password}
      />
      </View>

      <View style={styles.buttonContainer}>
            <TouchableOpacity
            style={[styles.rectangleButton, { backgroundColor: isButtonEnabled ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.98)"  }]}
              onPress={createAccount}
              disabled={!isButtonEnabled}
            >
              <Text style={styles.signUp}>Sign Up</Text>
            </TouchableOpacity>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}

      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Login to existing account</Text>
      </Pressable>
      <View style={styles.signUpWithContainer}>
              <Text style={styles.signUpWith}>Sign Up With</Text>
              <View style={styles.logoContainer}>
                <TouchableOpacity
                  onPress={() => handleLogoPress("https://www.google.com")}
                >
                  <ReactImage
                    source={require("./googlelogo.png")}
                    style={styles.googlelogo}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleLogoPress("https://www.facebook.com")}
                >
                  <ReactImage
                    source={require("./facebooklogo.png")}
                    style={styles.facebooklogo}
                  />
                </TouchableOpacity>
              </View>
       </View>
       <View style = {styles.shopSquadLogoContainer}>
            <ReactImage style={styles.shopSquadLogo} source={require("./shopsquadlogo.png")}/>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor:'white',
  },
  input: {
    width: "95%",
    height: 50,
    borderColor: "rgba(0, 0, 0, 0)",
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 15,
    marginVertical: 10,
    elevation: 5,
    backgroundColor: "white",
  },
  error: {
    marginBottom: 20,
    color: 'red',
    marginVertical: 0,
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 28,
  },
  signInButton: {
    
    height: 50,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    elevation: 7,
    marginVertical: 15,
  },
  signInText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 0.25,
    lineHeight: 28,
  },
  link: {
    color: "white",
    marginVertical: 0,
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 28,
  },
  inputContainer: {
    position: "relative",
    height: 300,
    width: 250,
    top:0,
    marginTop:0,
    paddingHorizontal: 18,
    justifyContent: "center",
    alignContent: "center",
  },
  iconContainer: {
    position: "relative",
    top:20,
    marginTop: 10,
  },
  iconMaterialPerson: {
    opacity: 1,
    width: width * 0.2,
    height: width * 0.2,
    shadowColor: "black",
    shadowOpacity: 0.6,
    elevation: 2,
  },
  fullname: {
    color: "rgba(255, 255, 255, 1)",
    width: "100%",
    height: height * 0.05,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginBottom: 10,
    opacity: 1,
    position: "relative",
    fontSize: 13,
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "left",
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  emailAddress: {
    color: "rgba(255, 255, 255, 1)",
    width: "100%",
    height: height * 0.05,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginBottom: 10,
    opacity: 1,
    position: "relative",
    fontSize: 13,
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "left",
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  password: {
    color: "rgba(255, 255, 255, 1)",
    width: "100%",
    height: height * 0.05,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginBottom: 10,
    opacity: 1,
    position: "relative",
    fontSize: 13,
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "left",
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  buttonContainer: {
    width: width * 0.65,
    height: height * 0.08,
    position: "relative",
    top:-50,
    marginTop:0,
    justifyContent: "center",
    alignItems: "center",
  },
  rectangleButton: {
    padding: 0.5,
    width: width * 0.6,
    height: height * 0.09,
    opacity: 1,
    backgroundColor: "rgba(255, 255, 255, 1)",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: width / 2,
    borderTopRightRadius: width / 2,
    borderBottomLeftRadius: width / 2,
    borderBottomRightRadius: width / 2,
    shadowColor: "black",
    shadowOpacity: 0.9,
    // shadowOffset: {
    //   width: 0,
    //   height: 50,
    // },
    shadowRadius: 0,
    elevation: 2,
  },
  signUp: {
    opacity: 1,
    color: "rgba(56, 199, 130, 1)",
    position: "relative",
    fontSize: 20,
    fontWeight: "900",
    fontStyle: "normal",
  },
  signUpWithContainer: {
    position: "relative",
    width: width * 0.3,
    height: height * 0.12,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpWith: {
    opacity: 1,
    position: "absolute",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "left",
    top: 0,
    marginTop: 0,
  },
  logoContainer: {
    flexDirection: "row",
    width: width * 0.4,
    height: width * 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  googlelogo: {
    opacity: 1,
    position: "relative",
    width: width * 0.07,
    height: width * 0.07,
    marginRight: 8,
  },
  facebooklogo: {
    opacity: 1,
    position: "relative",
    width: width * 0.07,
    height: width * 0.07,
    marginLeft: 8,
  },
  shopSquadLogoContainer:{
    position: "relative",
    height:width * 0.4,
    top:-10,
    width:width,
    left:0,
    bottom: 0,
    },
  shopSquadLogo:{
    height:width * 0.35,
    width:width * 0.35,
  }
});

export default Signup;
