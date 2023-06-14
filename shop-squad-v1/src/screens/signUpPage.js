import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

import BgEllipse from "./components/signUpPage/bgEllipse";
import Content from "./components/signUpPage/content";

const SignUpPage = () => {
  return (
    <View style={styles.signUpPage}>
      <BgEllipse/>
      <Content />
    </View>
    
  );
};

const styles = StyleSheet.create({
  signUpPage: {
    flex: 1,
    height:"100%",
    width:"100%",
    position:'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    left: 0,
    top: 0,
  },
});

export default SignUpPage;
