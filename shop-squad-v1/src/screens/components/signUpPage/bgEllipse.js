import React from "react";
import {View,StyleSheet } from "react-native";
import Svg, {
  Defs,
  Pattern,
  Path as SvgPath,
  Text as SvgText,
  Image as SvgImage,
} from "react-native-svg";

const BgEllipse = () => {
  return (
  <View style={styles.bgContainer}>
    <Svg
    data-layer="7123e298-e66a-48af-a930-d3274bd5d8c9"
    style={styles.signUpPage_ellipse2}
    preserveAspectRatio="none"
    viewBox="0 0 1027 1057"
    fill="rgba(195, 238, 217, 1)"
  >
    <SvgPath d="M 513.5 0 C 797.0982055664062 0 1027 236.6175231933594 1027 528.5 C 1027 820.3824462890625 797.0982055664062 1057 513.5 1057 C 229.9017944335938 1057 0 820.3824462890625 0 528.5 C 0 236.6175231933594 229.9017944335938 0 513.5 0 Z" />
  </Svg>
    <Svg
      data-layer="30d4d144-85f4-49b0-a0c7-33ecada6367a"
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

  signUpPage_ellipse1: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 1027,
    height: 1057,
    left: -83,
    top: -248,
  },  signUpPage_ellipse2: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 1027,
    height: 1057,
    left: -44,
    top: -168,

  },
});

export default BgEllipse;
