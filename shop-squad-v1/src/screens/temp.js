import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class ProductDescription extends Component {

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
    <ScrollView data-layer="0c8d0e39-5968-4597-98d4-3451576e2126" style={styles.productDescription}>
        <View data-layer="750ff44e-be45-4122-ba9f-e1441c9e5158" style={styles.productDescription_rectangle19}></View>
        <Svg data-layer="592247ea-bba4-450d-82d8-7e9c8de8a96e" style={styles.productDescription_iconMetroShop} preserveAspectRatio="none" viewBox="4.113128185272217 4.627279758453369 25.0556640625 22.271835327148438" fill="rgba(69, 203, 139, 1)"><SvgPath d="M 11.24430370330811 11.93522644042969 L 12.34539031982422 4.627281188964844 L 6.618682861328125 4.627281188964844 L 4.225874423980713 10.89123344421387 C 4.152087211608887 11.11395263671875 4.113128185272217 11.34501647949219 4.113128185272217 11.58722972869873 C 4.113128185272217 13.12399196624756 5.713916301727295 14.3712100982666 7.691927433013916 14.3712100982666 C 9.515435218811035 14.3712100982666 11.02297019958496 13.30772304534912 11.24427509307861 11.93522644042969 Z M 16.64103507995605 14.37120819091797 C 18.61766052246094 14.37120819091797 20.21983528137207 13.12399196624756 20.21983528137207 11.58722972869873 C 20.21983528137207 11.5301628112793 20.21564674377441 11.47309684753418 20.21287536621094 11.41880416870117 L 19.50437545776367 4.627279758453369 L 13.77767086029053 4.627279758453369 L 13.06775569915771 11.41323184967041 C 13.06498241424561 11.47029685974121 13.06218242645264 11.52736186981201 13.06218242645264 11.58722972869873 C 13.06218242645264 13.12399196624756 14.66435718536377 14.37120819091797 16.64098167419434 14.37120819091797 Z M 23.60098266601562 15.827223777771 L 23.60098266601562 21.33115768432617 L 9.681087493896484 21.33115768432617 L 9.681087493896484 15.83557033538818 C 9.071384429931641 16.05551528930664 8.400455474853516 16.1807918548584 7.691927433013916 16.1807918548584 C 7.420488834381104 16.1807918548584 7.157423496246338 16.14876747131348 6.897106647491455 16.11258125305176 L 6.897106647491455 24.95033073425293 C 6.897106647491455 26.02216148376465 7.772674083709717 26.89911460876465 8.843118667602539 26.89911460876465 L 24.43617820739746 26.89911460876465 C 25.50800895690918 26.89911460876465 26.38496589660645 26.02077484130859 26.38496589660645 24.95033073425293 L 26.38496589660645 16.11396598815918 C 26.12326049804688 16.14876747131348 25.86160850524902 16.18218040466309 25.59014129638672 16.18218040466309 C 24.88580131530762 16.1807918548584 24.21207237243652 16.0527172088623 23.60098266601562 15.827223777771 Z M 29.05758476257324 10.89123344421387 L 26.6619758605957 4.627279758453369 L 20.93671226501465 4.627279758453369 L 22.0363826751709 11.92408180236816 C 22.25078201293945 13.30215072631836 23.75826072692871 14.37120819091797 25.59014320373535 14.37120819091797 C 27.56676864624023 14.37120819091797 29.1689453125 13.12399196624756 29.1689453125 11.58722972869873 C 29.1689453125 11.34501647949219 29.12995910644531 11.11395263671875 29.05758666992188 10.89123344421387 Z"  /></Svg>
        <ReactImage data-layer="354a4d92-1b79-4da4-b32a-69e21931386e" source={require('./assets/rectangle5.png')} style={styles.productDescription_rectangle5} />
        <View data-layer="dbf1562b-55a8-43d9-b899-8dae75672a3f" style={styles.productDescription_rectangle20}></View>
        <Svg data-layer="34ea6e4a-9a4c-4256-8926-ec2bdc89530f" style={styles.productDescription_ellipse7} preserveAspectRatio="none" viewBox="0 0 50 50" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 25 0 C 38.8071174621582 0 50 11.1928825378418 50 25 C 50 38.8071174621582 38.8071174621582 50 25 50 C 11.1928825378418 50 0 38.8071174621582 0 25 C 0 11.1928825378418 11.1928825378418 0 25 0 Z"  /></Svg>
        <Svg data-layer="0f7dc611-9881-4242-a46c-f43396799566" style={styles.productDescription_iconIonicIosArrowBackcba7ff4d} preserveAspectRatio="none" viewBox="11.250576972961426 6.1936492919921875 13.5029296875 23.618850708007812" fill="rgba(56, 199, 130, 1)"><SvgPath d="M 15.32109355926514 18 L 24.2578125 9.0703125 C 24.91875076293945 8.409375190734863 24.91875076293945 7.340624809265137 24.2578125 6.686718940734863 C 23.59687423706055 6.025781631469727 22.52812576293945 6.032812595367432 21.8671875 6.686718940734863 L 11.7421875 16.8046875 C 11.10234355926514 17.44453048706055 11.08828163146973 18.47109413146973 11.69296836853027 19.13203048706055 L 21.86015701293945 29.3203125 C 22.19062614440918 29.65078163146973 22.62656402587891 29.8125 23.05546951293945 29.8125 C 23.484375 29.8125 23.92031288146973 29.65078163146973 24.25078201293945 29.3203125 C 24.91172027587891 28.65937423706055 24.91172027587891 27.59062576293945 24.25078201293945 26.93671798706055 L 15.32109355926514 18 Z"  /></Svg>
        <View data-layer="6ae561db-cbdd-4395-95f1-1584ae7f04b9" style={styles.productDescription_group2}>
            <Svg data-layer="6fff410a-98e6-4320-9668-1c89b6613552" style={styles.productDescription_group2_iconAwesomeStar919f07e1} preserveAspectRatio="none" viewBox="1.4413726329803467 -0.0008913278579711914 20 19.14251708984375" fill="rgba(255, 196, 0, 1)"><SvgPath d="M 10.36847686767578 0.6650020480155945 L 7.927360534667969 5.614526271820068 L 2.46568775177002 6.410786628723145 C 1.486250281333923 6.552842140197754 1.093727588653564 7.760316848754883 1.804006576538086 8.451904296875 L 5.755401611328125 12.30236434936523 L 4.820824146270752 17.74160766601562 C 4.652599811553955 18.72478294372559 5.688112258911133 19.46122932434082 6.555400371551514 19.00141716003418 L 11.44137287139893 16.43319892883301 L 16.32734680175781 19.00141716003418 C 17.19463539123535 19.45749092102051 18.23014640808105 18.72478103637695 18.06192207336426 17.74160766601562 L 17.12734413146973 12.30236434936523 L 21.07873916625977 8.451903343200684 C 21.78901863098145 7.760316371917725 21.3964958190918 6.552842140197754 20.41705894470215 6.410786151885986 L 14.95538520812988 5.614526271820068 L 12.51426792144775 0.6650020480155945 C 12.07688522338867 -0.2172394245862961 10.80959892272949 -0.2284543961286545 10.3684778213501 0.6650020480155945 Z"  /></Svg>
            <Svg data-layer="69ce9ddd-70a4-4222-b8a7-f0f18581549d" style={styles.productDescription_group2_iconAwesomeStar74e98f2c} preserveAspectRatio="none" viewBox="1.4413726329803467 -0.0008913278579711914 20 19.14251708984375" fill="rgba(255, 196, 0, 1)"><SvgPath d="M 10.36847686767578 0.6650020480155945 L 7.927360534667969 5.614526271820068 L 2.46568775177002 6.410786628723145 C 1.486250281333923 6.552842140197754 1.093727588653564 7.760316848754883 1.804006576538086 8.451904296875 L 5.755401611328125 12.30236434936523 L 4.820824146270752 17.74160766601562 C 4.652599811553955 18.72478294372559 5.688112258911133 19.46122932434082 6.555400371551514 19.00141716003418 L 11.44137287139893 16.43319892883301 L 16.32734680175781 19.00141716003418 C 17.19463539123535 19.45749092102051 18.23014640808105 18.72478103637695 18.06192207336426 17.74160766601562 L 17.12734413146973 12.30236434936523 L 21.07873916625977 8.451903343200684 C 21.78901863098145 7.760316371917725 21.3964958190918 6.552842140197754 20.41705894470215 6.410786151885986 L 14.95538520812988 5.614526271820068 L 12.51426792144775 0.6650020480155945 C 12.07688522338867 -0.2172394245862961 10.80959892272949 -0.2284543961286545 10.3684778213501 0.6650020480155945 Z"  /></Svg>
            <Svg data-layer="7229d70b-1ce1-4b43-8fc6-5d3d76ed78b0" style={styles.productDescription_group2_iconAwesomeStarac3a21f9} preserveAspectRatio="none" viewBox="1.4413726329803467 -0.0008913278579711914 20 19.14251708984375" fill="rgba(255, 196, 0, 1)"><SvgPath d="M 10.36847686767578 0.6650020480155945 L 7.927360534667969 5.614526271820068 L 2.46568775177002 6.410786628723145 C 1.486250281333923 6.552842140197754 1.093727588653564 7.760316848754883 1.804006576538086 8.451904296875 L 5.755401611328125 12.30236434936523 L 4.820824146270752 17.74160766601562 C 4.652599811553955 18.72478294372559 5.688112258911133 19.46122932434082 6.555400371551514 19.00141716003418 L 11.44137287139893 16.43319892883301 L 16.32734680175781 19.00141716003418 C 17.19463539123535 19.45749092102051 18.23014640808105 18.72478103637695 18.06192207336426 17.74160766601562 L 17.12734413146973 12.30236434936523 L 21.07873916625977 8.451903343200684 C 21.78901863098145 7.760316371917725 21.3964958190918 6.552842140197754 20.41705894470215 6.410786151885986 L 14.95538520812988 5.614526271820068 L 12.51426792144775 0.6650020480155945 C 12.07688522338867 -0.2172394245862961 10.80959892272949 -0.2284543961286545 10.3684778213501 0.6650020480155945 Z"  /></Svg>
            <Svg data-layer="509edecc-392c-4452-b20c-2b0cb75e7095" style={styles.productDescription_group2_iconAwesomeStareb5435da} preserveAspectRatio="none" viewBox="1.4413726329803467 -0.0008913278579711914 20 19.14251708984375" fill="rgba(255, 196, 0, 1)"><SvgPath d="M 10.36847686767578 0.6650020480155945 L 7.927360534667969 5.614526271820068 L 2.46568775177002 6.410786628723145 C 1.486250281333923 6.552842140197754 1.093727588653564 7.760316848754883 1.804006576538086 8.451904296875 L 5.755401611328125 12.30236434936523 L 4.820824146270752 17.74160766601562 C 4.652599811553955 18.72478294372559 5.688112258911133 19.46122932434082 6.555400371551514 19.00141716003418 L 11.44137287139893 16.43319892883301 L 16.32734680175781 19.00141716003418 C 17.19463539123535 19.45749092102051 18.23014640808105 18.72478103637695 18.06192207336426 17.74160766601562 L 17.12734413146973 12.30236434936523 L 21.07873916625977 8.451903343200684 C 21.78901863098145 7.760316371917725 21.3964958190918 6.552842140197754 20.41705894470215 6.410786151885986 L 14.95538520812988 5.614526271820068 L 12.51426792144775 0.6650020480155945 C 12.07688522338867 -0.2172394245862961 10.80959892272949 -0.2284543961286545 10.3684778213501 0.6650020480155945 Z"  /></Svg>
            <Svg data-layer="b4f94546-24bb-429f-bd27-dbed2b0c2e16" style={styles.productDescription_group2_iconAwesomeStar} preserveAspectRatio="none" viewBox="1.4413726329803467 -0.0008913278579711914 20 19.14251708984375" fill="rgba(255, 196, 0, 1)"><SvgPath d="M 10.36847686767578 0.6650020480155945 L 7.927360534667969 5.614526271820068 L 2.46568775177002 6.410786628723145 C 1.486250281333923 6.552842140197754 1.093727588653564 7.760316848754883 1.804006576538086 8.451904296875 L 5.755401611328125 12.30236434936523 L 4.820824146270752 17.74160766601562 C 4.652599811553955 18.72478294372559 5.688112258911133 19.46122932434082 6.555400371551514 19.00141716003418 L 11.44137287139893 16.43319892883301 L 16.32734680175781 19.00141716003418 C 17.19463539123535 19.45749092102051 18.23014640808105 18.72478103637695 18.06192207336426 17.74160766601562 L 17.12734413146973 12.30236434936523 L 21.07873916625977 8.451903343200684 C 21.78901863098145 7.760316371917725 21.3964958190918 6.552842140197754 20.41705894470215 6.410786151885986 L 14.95538520812988 5.614526271820068 L 12.51426792144775 0.6650020480155945 C 12.07688522338867 -0.2172394245862961 10.80959892272949 -0.2284543961286545 10.3684778213501 0.6650020480155945 Z"  /></Svg>
        </View>
        <Text data-layer="7d772c2f-806f-462c-bd8b-69332f67a8d4" style={styles.productDescription_whiteLatte}>White Latte</Text>
        <Text data-layer="4fcb65db-18f4-4a41-95fe-62c7efc56b8b" style={styles.productDescription_xf200394a}>$3.50</Text>
        <Text data-layer="e3b07e7f-011c-4fdc-9901-f94e54dfa1a7" style={styles.productDescription_description}>Description</Text>
        <Text data-layer="7fd51a2b-9b9a-44d1-abf6-7d990e635a5b" style={styles.productDescription_coffeeBeansTypeBrazilCarbonasize250mlsweetness50collectionCoffeeConnectsHangout}>Coffee Beans Type: Brazil Carbona
Size: 250ml
Sweetness: 50%
Collection: Coffee Connects Hangout@UOB
Collection Date: Immediate</Text>
        <View data-layer="b8d15bb9-3da9-4c12-a60f-cb2d8d8c6173" style={styles.productDescription_rectangle21}></View>
        <View data-layer="159c49a9-5c2a-445b-8f2b-add02a9387a2" style={styles.productDescription_rectangle22}></View>
        <Text data-layer="9a60d33b-5c62-42d1-9fb6-96c19bf7ae13" style={styles.productDescription_chatNow}>Chat Now</Text>
        <Text data-layer="f29ac8c7-cee6-4827-8d6f-9e1c18297727" style={styles.productDescription_participateNow}>Participate Now</Text>
        <View data-layer="9e0feb18-db90-4991-813e-ab1e2dd7d3a2" style={styles.productDescription_rectangle31}></View>
        <View data-layer="dad9c0b6-cdd8-4862-92af-970a6be80973" style={styles.productDescription_rectangle32}></View>
        <Text data-layer="488b2b10-994b-49c9-bfae-9ed710ffe458" style={styles.productDescription_x6OutOf10Units}>6 out of 10 units</Text>
        <Svg data-layer="56389d75-970f-4112-a981-d9cbd4e36688" style={styles.productDescription_iconIonicIosArrowBack} preserveAspectRatio="none" viewBox="11.250576972961426 6.1936492919921875 13.5029296875 23.618850708007812" fill="rgba(69, 203, 139, 1)"><SvgPath d="M 15.32109355926514 18 L 24.2578125 9.0703125 C 24.91875076293945 8.409375190734863 24.91875076293945 7.340624809265137 24.2578125 6.686718940734863 C 23.59687423706055 6.025781631469727 22.52812576293945 6.032812595367432 21.8671875 6.686718940734863 L 11.7421875 16.8046875 C 11.10234355926514 17.44453048706055 11.08828163146973 18.47109413146973 11.69296836853027 19.13203048706055 L 21.86015701293945 29.3203125 C 22.19062614440918 29.65078163146973 22.62656402587891 29.8125 23.05546951293945 29.8125 C 23.484375 29.8125 23.92031288146973 29.65078163146973 24.25078201293945 29.3203125 C 24.91172027587891 28.65937423706055 24.91172027587891 27.59062576293945 24.25078201293945 26.93671798706055 L 15.32109355926514 18 Z"  /></Svg>
        <View data-layer="6c536c04-df19-4eaa-9b29-bbac3c4d2519" style={styles.productDescription_rectangle260}></View>
        <ReactImage data-layer="059adb7a-50a6-4fdf-bc0b-a0eedaf0c716" source={require('./assets/typewriterLogoWhite.png')} style={styles.productDescription_typewriterLogoWhite} />
        <ReactImage data-layer="607e6e19-0728-436c-aec4-d048237198c5" source={require('./assets/logodesign2Edited532e07b6.png')} style={styles.productDescription_logodesign2Edited532e07b6} />
        <ReactImage data-layer="318d41ff-5307-41b8-9913-69bff55e4716" source={require('./assets/logodesign2Edited.png')} style={styles.productDescription_logodesign2Edited} />
    </ScrollView>
    );
  }
}

ProductDescription.propTypes = {

}

ProductDescription.defaultProps = {

}


const styles = StyleSheet.create({
  "productDescription": {
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
  "productDescription_rectangle19": {
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
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 430,
    "height": 64,
    "left": 0,
    "top": 36
  },
  "productDescription_iconMetroShop": {
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
    "width": 25.06,
    "height": 22.27,
    "left": 382.46,
    "top": 58.73
  },
  "productDescription_rectangle5": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 25,
    "borderTopRightRadius": 25,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 430,
    "height": 430,
    "left": 0,
    "top": 100
  },
  "productDescription_rectangle20": {
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
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 430,
    "height": 402,
    "left": 0,
    "top": 530
  },
  "productDescription_ellipse7": {
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
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 6
    },
    "shadowRadius": 10,
    "width": 50,
    "height": 50,
    "left": 350,
    "top": 315
  },
  "productDescription_iconIonicIosArrowBackcba7ff4d": {
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
    "width": 13.5,
    "height": 23.62,
    "left": 370.15,
    "top": 328.19
  },
  "productDescription_group2": {
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
    "width": 120,
    "height": 19.14,
    "left": 280,
    "top": 560
  },
  "productDescription_group2_iconAwesomeStar919f07e1": {
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
    "width": 20,
    "height": 19.14,
    "left": 0,
    "top": 0
  },
  "productDescription_group2_iconAwesomeStar74e98f2c": {
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
    "width": 20,
    "height": 19.14,
    "left": 100,
    "top": 0
  },
  "productDescription_group2_iconAwesomeStarac3a21f9": {
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
    "width": 20,
    "height": 19.14,
    "left": 75,
    "top": 0
  },
  "productDescription_group2_iconAwesomeStareb5435da": {
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
    "width": 20,
    "height": 19.14,
    "left": 50,
    "top": 0
  },
  "productDescription_group2_iconAwesomeStar": {
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
    "width": 20,
    "height": 19.14,
    "left": 25,
    "top": 0
  },
  "productDescription_whiteLatte": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(72, 72, 72, 1)",
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
    "width": 98,
    "height": 24,
    "left": 31,
    "top": 557
  },
  "productDescription_xf200394a": {
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
    "width": 46,
    "height": 24,
    "left": 33,
    "top": 586
  },
  "productDescription_description": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(72, 72, 72, 1)",
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
    "width": 97,
    "height": 24,
    "left": 31,
    "top": 641
  },
  "productDescription_coffeeBeansTypeBrazilCarbonasize250mlsweetness50collectionCoffeeConnectsHangout": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(72, 72, 72, 1)",
    "fontSize": 12,
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
    "width": 367,
    "height": 80,
    "left": 31,
    "top": 671
  },
  "productDescription_rectangle21": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(159, 242, 202, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 20,
    "borderTopRightRadius": 20,
    "borderBottomLeftRadius": 20,
    "borderBottomRightRadius": 20,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 160,
    "height": 45,
    "left": 31,
    "top": 854
  },
  "productDescription_rectangle22": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(61, 201, 134, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 20,
    "borderTopRightRadius": 20,
    "borderBottomLeftRadius": 20,
    "borderBottomRightRadius": 20,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 160,
    "height": 45,
    "left": 240,
    "top": 854
  },
  "productDescription_chatNow": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(72, 72, 72, 1)",
    "fontSize": 14,
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
    "width": 65,
    "height": 19,
    "left": 78,
    "top": 867
  },
  "productDescription_participateNow": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 14,
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
    "width": 106,
    "height": 19,
    "left": 267,
    "top": 867
  },
  "productDescription_rectangle31": {
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
    "borderTopLeftRadius": 20,
    "borderTopRightRadius": 20,
    "borderBottomLeftRadius": 20,
    "borderBottomRightRadius": 20,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 370,
    "height": 29,
    "left": 30,
    "top": 794
  },
  "productDescription_rectangle32": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(126, 223, 176, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 20,
    "borderTopRightRadius": 20,
    "borderBottomLeftRadius": 20,
    "borderBottomRightRadius": 20,
    "width": 280,
    "height": 29,
    "left": 30,
    "top": 794
  },
  "productDescription_x6OutOf10Units": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 14,
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
    "width": 108,
    "height": 19,
    "left": 161,
    "top": 799
  },
  "productDescription_iconIonicIosArrowBack": {
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
    "width": 13.5,
    "height": 23.62,
    "left": 22.49,
    "top": 57
  },
  "productDescription_rectangle260": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(69, 203, 139, 1)",
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
    "height": 36,
    "left": 0,
    "top": 0
  },
  "productDescription_typewriterLogoWhite": {
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
    "width": 154,
    "height": 71,
    "left": 138,
    "top": -14
  },
  "productDescription_logodesign2Edited532e07b6": {
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
    "width": 36,
    "height": 36,
    "left": 3,
    "top": 0
  },
  "productDescription_logodesign2Edited": {
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
    "width": 36,
    "height": 36,
    "left": 391,
    "top": 0
  }
});