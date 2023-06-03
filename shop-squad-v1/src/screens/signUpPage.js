import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

import BgEllipse from "./components/signUpPage/bgEllipse";
import Lines from "./components/signUpPage/lines";

const SignUpPage = () => {
  return (
    <View style = {styles.wrapperContainer}>
    <View  data-layer="aa7fc8d9-c9a5-46a7-96c2-abded47b8143"style={styles.signUpPage}>
      <BgEllipse/>
      <Lines />
    </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  wrapperContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'auto'
  },
  signUpPage: {
    opacity: 1,
    backgroundColor: "rgba(255, 255, 255, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 430,
    height: 932,
    left: 0,
    top: 0,
  },
});

export default SignUpPage;
