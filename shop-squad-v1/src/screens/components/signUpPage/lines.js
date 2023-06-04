import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image as ReactImage,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Linking,
  Image,
} from "react-native";
import Svg, {
  Defs,
  Pattern,
  Path as SvgPath,
  Text as SvgText,
  Image as SvgImage,
} from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";

// Getting the dimensions of the user's device
// to style respectively and make the app responsive
const { height, width } = Dimensions.get("window");

const Lines = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    // Navigate to a different page/screen
    navigation.navigate("HomePage");
  };

  const handleLogoPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <KeyboardAvoidingView style={styles.screen} behavior="padding">
      <View style={styles.wrapper}>
        <View style={styles.container}>
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
              style={styles.fullname}
              placeholder="Full Name : "
              placeholderTextColor="rgba(255, 255, 255, 1)"
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={styles.username}
              placeholder="Username : "
              placeholderTextColor="rgba(255, 255, 255, 1)"
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={styles.emailAddress}
              placeholder="Email Address : "
              placeholderTextColor="rgba(255, 255, 255, 1)"
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={styles.password}
              placeholder="Password : "
              placeholderTextColor="rgba(255, 255, 255, 1)"
              underlineColorAndroid="transparent"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.rectangleButton}
              onPress={handlePress}
            >
              <Text style={styles.signUp}>Sign Up</Text>
            </TouchableOpacity>

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
          </View>
          <View style = {styles.shopSquadLogoContainer}>
            <Image style={styles.shopSquadLogo} source={require("./shopsquadlogo.png")}/>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  everything: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    marginTop: height * 0.2,
    width: width * 0.9,
    height: height * 0.8,
  },
  iconContainer: {
    position: "absolute",
    top: height * 0.05,
    marginTop: 15,
  },
  iconMaterialPerson: {
    opacity: 1,
    width: width * 0.2,
    height: width * 0.2,
  },
  inputContainer: {
    position: "absolute",
    height: height * 0.3,
    width: width * 0.6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    top: height * 0.05,
    marginTop: 120,
    justifyContent: "center",
    alignContent: "center",
  },
  fullname: {
    color: "rgba(255, 255, 255, 1)",
    width: width * 0.5,
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
  username: {
    color: "rgba(255, 255, 255, 1)",
    width: width * 0.5,
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
    width: width * 0.5,
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
    width: width * 0.5,
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
    height: height * 0.125,
    position: "relative",
    top: height * 0.15,
    marginTop: height * 0.15,
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
    shadowOffset: {
      width: 0,
      height: 50,
    },
    shadowRadius: 10,
    elevation: 10,
  },
  signUp: {
    opacity: 1,
    color: "rgba(56, 199, 130, 1)",
    position: "absolute",
    fontSize: 20,
    fontWeight: "800",
    fontStyle: "normal",
  },
  signUpWithContainer: {
    position: "absolute",
    width: width * 0.65,
    height: height * 0.125,
    top: height * 0.08,
    marginTop: height * 0.05,
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
    width: width * 0.2,
    height: width * 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  googlelogo: {
    opacity: 1,
    position: "relative",
    width: width * 0.06,
    height: width * 0.06,
    marginRight: 5,
  },
  facebooklogo: {
    opacity: 1,
    position: "relative",
    width: width * 0.06,
    height: width * 0.06,
    marginLeft: 5,
  },
  shopSquadLogoContainer:{
    position: "relative",
    height:width * 0.3,
    width:width,
    top: height * 0.2,
    left:15,
  },
  shopSquadLogo:{
    height:width * 0.28,
    width:width * 0.28,
  }
});

export default Lines;
