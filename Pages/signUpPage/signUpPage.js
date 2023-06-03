import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class SignUpPage extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="aa7fc8d9-c9a5-46a7-96c2-abded47b8143" style={styles.signUpPage}>
        <Svg data-layer="7123e298-e66a-48af-a930-d3274bd5d8c9" style={styles.signUpPage_ellipse2} preserveAspectRatio="none" viewBox="0 0 1027 1057" fill="rgba(195, 238, 217, 1)"><SvgPath d="M 513.5 0 C 797.0982055664062 0 1027 236.6175231933594 1027 528.5 C 1027 820.3824462890625 797.0982055664062 1057 513.5 1057 C 229.9017944335938 1057 0 820.3824462890625 0 528.5 C 0 236.6175231933594 229.9017944335938 0 513.5 0 Z"  /></Svg>
        <Svg data-layer="30d4d144-85f4-49b0-a0c7-33ecada6367a" style={styles.signUpPage_ellipse1} preserveAspectRatio="none" viewBox="0 0 1027 1057" fill="transparent"><Defs><Pattern id="img-ellipse1" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('./assets/ellipse1.png')} x="0" y="0" width="1027.00px" height="1057.00px" /></Pattern></Defs><SvgPath d="M 513.5 0 C 797.0982055664062 0 1027 236.6175231933594 1027 528.5 C 1027 820.3824462890625 797.0982055664062 1057 513.5 1057 C 229.9017944335938 1057 0 820.3824462890625 0 528.5 C 0 236.6175231933594 229.9017944335938 0 513.5 0 Z" fill="url(#img-ellipse1)" /></Svg>
        <Svg data-layer="4e55b565-f2d7-49de-8a01-a5883ae996b6" style={styles.signUpPage_line1} preserveAspectRatio="none" viewBox="0 -0.5 214 1" fill="transparent"><SvgPath d="M 0 0 L 214 0"  /></Svg>
        <Svg data-layer="ffaf96ae-40fb-41a4-81db-c0d452165939" style={styles.signUpPage_line2} preserveAspectRatio="none" viewBox="0 -0.5 214 1" fill="transparent"><SvgPath d="M 0 0 L 214 0"  /></Svg>
        <Svg data-layer="c8ae605e-39a8-473a-bdfd-556b312a6687" style={styles.signUpPage_line3} preserveAspectRatio="none" viewBox="0 -0.5 214 1" fill="transparent"><SvgPath d="M 0 0 L 214 0"  /></Svg>
        <Svg data-layer="b1f362d7-3098-4b8a-aac7-36c7d1309b7d" style={styles.signUpPage_line4} preserveAspectRatio="none" viewBox="0 -0.5 214 1" fill="transparent"><SvgPath d="M 0 0 L 214 0"  /></Svg>
        <Text data-layer="9051747a-801d-46c9-8524-cb9117c0f1ca" style={styles.signUpPage_fullName}>Full name:</Text>
        <Text data-layer="631764f2-90e8-4cb4-93de-0320546562da" style={styles.signUpPage_username}>Username:</Text>
        <Text data-layer="75d588ae-b594-4ba5-90c9-6e88a8d06781" style={styles.signUpPage_emailAddress}>Email address:</Text>
        <Text data-layer="5577b525-464c-42f2-8fee-3c5fc0df1805" style={styles.signUpPage_password}>Password:</Text>
        <Svg data-layer="dcb82d92-bb2b-4b3c-9c35-99b099cd875a" style={styles.signUpPage_iconMaterialPerson} preserveAspectRatio="none" viewBox="6 6 50 50" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 31 31 C 37.90625 31 43.5 25.40625 43.5 18.5 C 43.5 11.59374809265137 37.90625 6 31 6 C 24.09374809265137 6 18.5 11.59374809265137 18.5 18.5 C 18.5 25.40625 24.09374809265137 31 31 31 Z M 31 37.25 C 22.65624809265137 37.25 6 41.4375 6 49.74999618530273 L 6 55.99999618530273 L 55.99999618530273 55.99999618530273 L 55.99999618530273 49.74999618530273 C 55.99999618530273 41.4375 39.34375 37.25 31 37.25 Z"  /></Svg>
        <View data-layer="3d122a5b-b642-4a39-8208-eb0c764dd905" style={styles.signUpPage_rectangle2}></View>
        <Text data-layer="ac2a16aa-5359-462a-95e0-437f09566486" style={styles.signUpPage_signUp}>Sign up</Text>
        <Text data-layer="abb2e318-e1a2-46a6-9675-cb38604b1fba" style={styles.signUpPage_signUpWith}>Sign up with</Text>
        <ReactImage data-layer="5696e5f2-8807-4bbd-acb8-177cb946f606" source={require('./assets/x5847f9cbcef1014c0b5e48c8.png')} style={styles.signUpPage_x5847f9cbcef1014c0b5e48c8} />
        <ReactImage data-layer="e8b343ed-b402-4b38-b5d9-ccee10d11403" source={require('./assets/facebookflogo2021svg.png')} style={styles.signUpPage_facebookflogo2021svg} />
        <View data-layer="295bac71-da0c-4aea-8326-ec4cb691f494" style={styles.signUpPage_rectangle65}></View>
        <View data-layer="8b3a1606-dd02-46b3-9352-edcb980c9627" style={styles.signUpPage_rectangle66}></View>
        <Text data-layer="3c366327-c4d7-491f-b452-66cd039bf204" style={styles.signUpPage_shopsquadSing}>ShopSquad Sing...</Text>
        <Svg data-layer="077c22e7-2036-42f9-86fb-939a329f4efc" style={styles.signUpPage_iconAwesomeLock} preserveAspectRatio="none" viewBox="0 0 17.5 20" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 15.625 8.75 L 14.6875 8.75 L 14.6875 5.9375 C 14.6875 2.6640625 12.0234375 0 8.75 0 C 5.4765625 0 2.8125 2.6640625 2.8125 5.9375 L 2.8125 8.75 L 1.875 8.75 C 0.83984375 8.75 0 9.58984375 0 10.625 L 0 18.125 C 0 19.16015625 0.83984375 20 1.875 20 L 15.625 20 C 16.66015625 20 17.5 19.16015625 17.5 18.125 L 17.5 10.625 C 17.5 9.58984375 16.66015625 8.75 15.625 8.75 Z M 11.5625 8.75 L 5.9375 8.75 L 5.9375 5.9375 C 5.9375 4.38671875 7.199218273162842 3.125 8.75 3.125 C 10.30078125 3.125 11.5625 4.38671875 11.5625 5.9375 L 11.5625 8.75 Z"  /></Svg>
        <Text data-layer="988de7c6-2b24-4887-867f-7f58c083742c" style={styles.signUpPage_shopsquadcomsg}>shopsquad.com.sg</Text>
        <Svg data-layer="64a3098b-d857-4652-9bd4-bdac9a9daad8" style={styles.signUpPage_iconFeatherBookmark} preserveAspectRatio="none" viewBox="6 2.999999523162842 22.125732421875 27.590164184570312" fill="transparent"><SvgPath d="M 26.62568092346191 29.09016418457031 L 17.06284141540527 22.25956153869629 L 7.5 29.09016418457031 L 7.5 7.232240200042725 C 7.5 5.723265647888184 8.723265647888184 4.499999523162842 10.2322416305542 4.5 L 23.89344215393066 4.5 C 25.40241813659668 4.5 26.62568092346191 5.723266124725342 26.62568092346191 7.232240200042725 L 26.62568092346191 29.09016418457031 Z"  /></Svg>
        <View data-layer="84f84033-278d-45b5-ad97-3001a5032418" style={styles.signUpPage_iconFeatherShare2}>
            <Svg data-layer="54e148c0-3cd1-4a8f-bc97-0602d74ff805" style={styles.signUpPage_iconFeatherShare2_path8} preserveAspectRatio="none" viewBox="21 1.5000004768371582 10.3770751953125 10.377052307128906" fill="transparent"><SvgPath d="M 29.87704849243164 6.688524723052979 C 29.87704849243164 8.725641250610352 28.22563934326172 10.37705039978027 26.18852233886719 10.37705039978027 C 24.15140914916992 10.37705039978027 22.5 8.725641250610352 22.5 6.688525199890137 C 22.5 4.651409149169922 24.15140914916992 3.000000953674316 26.18852424621582 3.000000476837158 C 28.22563934326172 3.000000476837158 29.87704849243164 4.651409149169922 29.87704849243164 6.688524723052979 Z"  /></Svg>
            <Svg data-layer="7b709a08-1066-48ca-892b-4fb9ac3a02bd" style={styles.signUpPage_iconFeatherShare2_path9} preserveAspectRatio="none" viewBox="3 12.000000953674316 10.3770751953125 10.377044677734375" fill="transparent"><SvgPath d="M 11.87704944610596 17.18852424621582 C 11.87704944610596 19.22563934326172 10.22564029693604 20.87704849243164 8.18852424621582 20.87704849243164 C 6.151408195495605 20.87704849243164 4.5 19.22563934326172 4.5 17.18852424621582 C 4.5 15.15141010284424 6.151408672332764 13.50000095367432 8.18852424621582 13.50000095367432 C 10.22564029693604 13.50000095367432 11.87704944610596 15.15141010284424 11.87704944610596 17.18852424621582 Z"  /></Svg>
            <Svg data-layer="2fb918ea-fe7c-4661-b216-d598c502a1e7" style={styles.signUpPage_iconFeatherShare2_path10} preserveAspectRatio="none" viewBox="21 22.5 10.3770751953125 10.37704849243164" fill="transparent"><SvgPath d="M 29.87704849243164 27.68852615356445 C 29.87704849243164 29.72563934326172 28.22563934326172 31.37704849243164 26.18852424621582 31.37704849243164 C 24.15140914916992 31.37704849243164 22.5 29.72563934326172 22.5 27.68852615356445 C 22.5 25.65140914916992 24.15140914916992 24 26.18852424621582 24 C 28.22563934326172 24 29.87704849243164 25.65140914916992 29.87704849243164 27.68852615356445 Z"  /></Svg>
            <Svg data-layer="407bdb2b-f47d-4ce0-a512-a379ead957e1" style={styles.signUpPage_iconFeatherShare2_path11} preserveAspectRatio="none" viewBox="11.385000228881836 18.76500129699707 11.39752197265625 7.893444061279297" fill="transparent"><SvgPath d="M 12.88500022888184 20.26500129699707 L 21.28253936767578 25.15844345092773"  /></Svg>
            <Svg data-layer="70ac4b02-ed4c-4fc5-a5ef-880c376c86a2" style={styles.signUpPage_iconFeatherShare2_path12} preserveAspectRatio="none" viewBox="11.385000228881836 8.265000343322754 11.38525390625 7.893440246582031" fill="transparent"><SvgPath d="M 21.27024459838867 9.765000343322754 L 12.88500022888184 14.65844249725342"  /></Svg>
        </View>
        <View data-layer="11089731-8e5f-4261-88f3-1c2e8e15b002" style={styles.signUpPage_iconIonicIosOptions}>
            <Svg data-layer="109ce413-39ce-42f0-8b8b-f68aa74e6b37" style={styles.signUpPage_iconIonicIosOptions_path13} preserveAspectRatio="none" viewBox="3.375 24.75 23.9754638671875 4.61065673828125" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 17.85822105407715 26.1331958770752 C 18.21554756164551 25.32056999206543 19.02817535400391 24.75 19.97336006164551 24.75 C 20.91854476928711 24.75 21.73117256164551 25.32056999206543 22.08849906921387 26.1331958770752 L 26.42827796936035 26.1331958770752 C 26.93545150756836 26.1331958770752 27.35040855407715 26.54815673828125 27.35040855407715 27.05532836914062 L 27.35040855407715 27.05532836914062 C 27.35040855407715 27.5625 26.93545150756836 27.97745895385742 26.42827796936035 27.97745895385742 L 22.08849906921387 27.97745895385742 C 21.73117256164551 28.79008674621582 20.91854476928711 29.36065673828125 19.97336006164551 29.36065673828125 C 19.02817535400391 29.36065673828125 18.21554756164551 28.79008674621582 17.85822105407715 27.97745895385742 L 4.297131061553955 27.97745895385742 C 3.789958953857422 27.97745895385742 3.375 27.5625 3.375 27.05532836914062 L 3.375 27.05532836914062 C 3.375 26.54815673828125 3.789958953857422 26.1331958770752 4.297131061553955 26.1331958770752 L 17.85822105407715 26.1331958770752 Z"  /></Svg>
            <Svg data-layer="f03033e5-da3f-4aef-b140-59dde0cd0871" style={styles.signUpPage_iconIonicIosOptions_path14} preserveAspectRatio="none" viewBox="3.375 15.187500953674316 23.9754638671875 4.61065673828125" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 8.636910438537598 16.5706958770752 C 8.994235992431641 15.75806903839111 9.806863784790039 15.18750095367432 10.75204849243164 15.18750095367432 C 11.69723415374756 15.18750095367432 12.50986099243164 15.75806903839111 12.8671875 16.5706958770752 L 26.42827796936035 16.5706958770752 C 26.93545150756836 16.5706958770752 27.35040855407715 16.98565673828125 27.35040855407715 17.49282836914062 L 27.35040855407715 17.49282836914062 C 27.35040855407715 18 26.93545150756836 18.41495895385742 26.42827796936035 18.41495895385742 L 12.8671875 18.41495895385742 C 12.50986099243164 19.22758674621582 11.69723415374756 19.79815673828125 10.75204849243164 19.79815673828125 C 9.806863784790039 19.79815673828125 8.994235992431641 19.22758674621582 8.636910438537598 18.41495895385742 L 4.297131061553955 18.41495895385742 C 3.789958953857422 18.41495895385742 3.375 18 3.375 17.49282836914062 L 3.375 17.49282836914062 C 3.375 16.98565673828125 3.789958953857422 16.5706958770752 4.297131061553955 16.5706958770752 L 8.636910438537598 16.5706958770752 Z"  /></Svg>
            <Svg data-layer="bb4b16be-71e6-4e06-9afc-2950d7a8015e" style={styles.signUpPage_iconIonicIosOptions_path15} preserveAspectRatio="none" viewBox="3.375 5.625 23.9754638671875 4.61065673828125" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 17.85822105407715 7.008196830749512 C 18.21554756164551 6.195568561553955 19.02817535400391 5.625 19.97336006164551 5.625 C 20.91854476928711 5.625 21.73117256164551 6.195568561553955 22.08849906921387 7.008196830749512 L 26.42827796936035 7.008196830749512 C 26.93545150756836 7.008196830749512 27.35040855407715 7.423155784606934 27.35040855407715 7.930327892303467 L 27.35040855407715 7.930327892303467 C 27.35040855407715 8.4375 26.93545150756836 8.852458953857422 26.42827796936035 8.852458953857422 L 22.08849906921387 8.852458953857422 C 21.73117256164551 9.665087699890137 20.91854476928711 10.23565578460693 19.97336006164551 10.23565578460693 C 19.02817535400391 10.23565578460693 18.21554756164551 9.665087699890137 17.85822105407715 8.852458953857422 L 4.297131061553955 8.852458953857422 C 3.789958953857422 8.852458953857422 3.375 8.4375 3.375 7.930327892303467 L 3.375 7.930327892303467 C 3.375 7.423155784606934 3.789958953857422 7.008196830749512 4.297131061553955 7.008196830749512 L 17.85822105407715 7.008196830749512 Z"  /></Svg>
        </View>
        <Svg data-layer="5e265857-611b-48ba-a748-7d2f90f1682b" style={styles.signUpPage_line22} preserveAspectRatio="none" viewBox="-1 0 2 26.948467254638672" fill="transparent"><SvgPath d="M 2.234192493233422e-07 0 L 0 26.94846725463867"  /></Svg>
        <Svg data-layer="4e6b150c-0552-4510-bdbe-61e456224b41" style={styles.signUpPage_line23} preserveAspectRatio="none" viewBox="-1 0 2 26.948467254638672" fill="transparent"><SvgPath d="M 0 0 L 2.234192493233422e-07 26.94846725463867"  /></Svg>
        <ReactImage data-layer="f46625b6-140c-44ad-968f-7653f39d56d6" source={require('./assets/logodesign2Edited.png')} style={styles.signUpPage_logodesign2Edited} />
    </ScrollView>
    );
  }
}

SignUpPage.propTypes = {

}

SignUpPage.defaultProps = {

}


const styles = StyleSheet.create({
  "signUpPage": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 430,
    "height": 932,
    "left": 0,
    "top": 0
  },
  "signUpPage_ellipse2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 1027,
    "height": 1057,
    "left": -44,
    "top": -168
  },
  "signUpPage_ellipse1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 1027,
    "height": 1057,
    "left": -83,
    "top": -248
  },
  "signUpPage_line1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 214,
    "height": 1,
    "left": 108,
    "top": 315.5
  },
  "signUpPage_line2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 214,
    "height": 1,
    "left": 108,
    "top": 365.5
  },
  "signUpPage_line3": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 214,
    "height": 1,
    "left": 108,
    "top": 415.5
  },
  "signUpPage_line4": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 214,
    "height": 1,
    "left": 108,
    "top": 465.5
  },
  "signUpPage_fullName": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 12,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 55,
    "height": 12,
    "left": 108,
    "top": 298.5
  },
  "signUpPage_username": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 12,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 59,
    "height": 12,
    "left": 108,
    "top": 348.5
  },
  "signUpPage_emailAddress": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 12,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 80,
    "height": 12,
    "left": 108,
    "top": 398.5
  },
  "signUpPage_password": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 12,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 56,
    "height": 12,
    "left": 108,
    "top": 448.5
  },
  "signUpPage_iconMaterialPerson": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 50,
    "height": 50,
    "left": 190,
    "top": 196
  },
  "signUpPage_rectangle2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 50,
    "borderTopRightRadius": 50,
    "borderBottomLeftRadius": 50,
    "borderBottomRightRadius": 50,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 5
    },
    "shadowRadius": 10,
    "width": 250,
    "height": 60,
    "left": 90,
    "top": 541
  },
  "signUpPage_signUp": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(56, 199, 130, 1)",
    "fontSize": 18,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 66,
    "height": 18,
    "left": 183,
    "top": 564
  },
  "signUpPage_signUpWith": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 12,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 66,
    "height": 12,
    "left": 184,
    "top": 635
  },
  "signUpPage_x5847f9cbcef1014c0b5e48c8": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 25,
    "height": 25.6,
    "left": 182.5,
    "top": 662
  },
  "signUpPage_facebookflogo2021svg": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 25,
    "height": 25,
    "left": 223,
    "top": 662
  },
  "signUpPage_rectangle65": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(191, 245, 219, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 430,
    "height": 88,
    "left": 0,
    "top": 0
  },
  "signUpPage_rectangle66": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(217, 246, 232, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": 215,
    "height": 51,
    "left": 59,
    "top": 21
  },
  "signUpPage_shopsquadSing": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(72, 72, 72, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 167,
    "height": 20,
    "left": 98,
    "top": 31
  },
  "signUpPage_iconAwesomeLock": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 17.5,
    "height": 20,
    "left": 71,
    "top": 37
  },
  "signUpPage_shopsquadcomsg": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(72, 72, 72, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 84,
    "height": 10,
    "left": 99,
    "top": 55
  },
  "signUpPage_iconFeatherBookmark": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 23.13,
    "height": 28.59,
    "left": 337,
    "top": 33.41
  },
  "signUpPage_iconFeatherShare2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 22.13,
    "height": 24.59,
    "left": 295.77,
    "top": 34.55
  },
  "signUpPage_iconFeatherShare2_path8": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 11.38,
    "height": 11.38,
    "left": 12.75,
    "top": -2
  },
  "signUpPage_iconFeatherShare2_path9": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 11.38,
    "height": 11.38,
    "left": -2,
    "top": 6.61
  },
  "signUpPage_iconFeatherShare2_path10": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 11.38,
    "height": 11.38,
    "left": 12.75,
    "top": 15.21
  },
  "signUpPage_iconFeatherShare2_path11": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 12.4,
    "height": 8.89,
    "left": 4.87,
    "top": 12.15
  },
  "signUpPage_iconFeatherShare2_path12": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 12.39,
    "height": 8.89,
    "left": 4.87,
    "top": 3.55
  },
  "signUpPage_iconIonicIosOptions": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 23.98,
    "height": 20.29,
    "left": 379.23,
    "top": 36.86
  },
  "signUpPage_iconIonicIosOptions_path13": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 23.98,
    "height": 4.61,
    "left": 0,
    "top": 15.68
  },
  "signUpPage_iconIonicIosOptions_path14": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 23.98,
    "height": 4.61,
    "left": 0,
    "top": 7.84
  },
  "signUpPage_iconIonicIosOptions_path15": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 23.98,
    "height": 4.61,
    "left": 0,
    "top": 0
  },
  "signUpPage_line22": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 2,
    "height": 26.95,
    "left": 27.37,
    "top": 33.37
  },
  "signUpPage_line23": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 2,
    "height": 26.95,
    "left": 27.37,
    "top": 33.05
  },
  "signUpPage_logodesign2Edited": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 142,
    "height": 142,
    "left": 0,
    "top": 790
  }
});