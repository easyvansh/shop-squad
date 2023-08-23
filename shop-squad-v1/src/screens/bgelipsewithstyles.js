import React from "react";
import { Dimensions } from "react-native";
import {View,StyleSheet } from "react-native";
import Svg, {
  Defs,
  Pattern,
  Path as SvgPath,
  Text as SvgText,
  Image as SvgImage,
} from "react-native-svg";

const {height,width} = Dimensions.get('window')

const BgEllipse = () => {
  return (
  <View style={styles.bgContainer}>
    <Svg
    style={styles.signUpPage_ellipse2}
    preserveAspectRatio="none"
    viewBox="0 0 1027 1057"
    fill="rgba(195, 238, 217, 1)"
  >
    <SvgPath d="M 513.5 0 C 797.0982055664062 0 1027 236.6175231933594 1027 528.5 C 1027 820.3824462890625 797.0982055664062 1057 513.5 1057 C 229.9017944335938 1057 0 820.3824462890625 0 528.5 C 0 236.6175231933594 229.9017944335938 0 513.5 0 Z" />
  </Svg>
    <Svg

      style={styles.signUpPage_ellipse1}
      preserveAspectRatio="none"
      viewBox="0 0 1027 1057"
      fill="transparent"
    >
      <Defs>
        <Pattern
          id="img-ellipse1"
          patternContentUnits="userSpaceOnUse"
          width="100%"
          height="100%"
        >
          <SvgImage
            xlinkHref={require("./ellipse1.png")}
            x="0"
            y="0"
            width="1027.00px"
            height="1057.00px"
          />
        </Pattern>
      </Defs>
      <SvgPath
        d="M 513.5 0 C 797.0982055664062 0 1027 236.6175231933594 1027 528.5 C 1027 820.3824462890625 797.0982055664062 1057 513.5 1057 C 229.9017944335938 1057 0 820.3824462890625 0 528.5 C 0 236.6175231933594 229.9017944335938 0 513.5 0 Z"
        fill="url(#img-ellipse1)"
      />
    </Svg>

  </View>
  );
};

const styles = StyleSheet.create({
  bgContainer:{
    position:'absolute',
    flex:1,
    top:-200,
    zIndex:-1,
    paddingLeft:200,
  },
  signUpPage_ellipse1: {
    opacity: 1,
    position: "relative",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 200,
    width: 1027,
    height: 1057,
    left: -78,
    top: -260,
    zIndex:-1,
  },
    signUpPage_ellipse2: {
    opacity: 1,
    position:'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 400,
    width: 1027,
    height: 1057,
    left: -45,
    top: -220,
    zIndex:-1,

  },
});

export default BgEllipse;
