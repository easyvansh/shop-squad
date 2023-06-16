import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React,{useState, useRef} from "react";
import Svg, { Defs, Pattern } from "react-native-svg";
import { Path as SvgPath } from "react-native-svg";
import { Text as SvgText } from "react-native-svg";
import { Image as SvgImage } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");

const renderStars = () => {
  const svgImages = [];
  for (let i = 0; i < 5; i++) {
    svgImages.push(
      <Svg
        style={styles.stars}
        preserveAspectRatio="none"
        viewBox="1.4413726329803467 -0.0008913278579711914 20 19.14251708984375"
        fill="rgba(255, 196, 0, 1)"
      >
        <SvgPath d="M 10.36847686767578 0.6650020480155945 L 7.927360534667969 5.614526271820068 L 2.46568775177002 6.410786628723145 C 1.486250281333923 6.552842140197754 1.093727588653564 7.760316848754883 1.804006576538086 8.451904296875 L 5.755401611328125 12.30236434936523 L 4.820824146270752 17.74160766601562 C 4.652599811553955 18.72478294372559 5.688112258911133 19.46122932434082 6.555400371551514 19.00141716003418 L 11.44137287139893 16.43319892883301 L 16.32734680175781 19.00141716003418 C 17.19463539123535 19.45749092102051 18.23014640808105 18.72478103637695 18.06192207336426 17.74160766601562 L 17.12734413146973 12.30236434936523 L 21.07873916625977 8.451903343200684 C 21.78901863098145 7.760316371917725 21.3964958190918 6.552842140197754 20.41705894470215 6.410786151885986 L 14.95538520812988 5.614526271820068 L 12.51426792144775 0.6650020480155945 C 12.07688522338867 -0.2172394245862961 10.80959892272949 -0.2284543961286545 10.3684778213501 0.6650020480155945 Z" />
      </Svg>
    );
  }
  return svgImages;
};

const fillValue = 6;




const CustomButton = ({title,style,backgroundColor,onPress}) =>{
  return(
    <TouchableOpacity style={[styles.button,{backgroundColor}]} onPress={onPress}>
    {/* <View style={[styles.button,{backgroundColor}]}> */}
    <Text style ={style}>{title}</Text>
    {/* </View> */}

    </TouchableOpacity>
  )
}

const ProductDescription = () => {
  
  const productImages = [
    { id: 1, image: require("./components/productDescription/productImage1.png") },
    { id: 2, image: require("./components/productDescription/productImage2.png") },
    { id: 3, image: require("./components/productDescription/productImage3.png") },
  ];
  
  const renderProductImage = ({item}) =>{
    return(
      <Image
                  source={item.image}
                  style={styles.productImage}
                />
    )
  }
  const navigation = useNavigation();
  const handleBack= () =>{
    navigation.navigate('HomePage'); 
  }
  const handleSquad= () =>{
    navigation.navigate('MySquad'); 
  }
  const handleChat = () =>{
    navigation.navigate('HomePage'); 
  }
  const handleParticipate = () =>{
    navigation.navigate('HomePage'); 
  }
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleNextButtonPress = () => {
    const nextIndex = currentIndex === productImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    carouselRef.current.scrollToIndex({ index: nextIndex });
  };

  const handleBackButtonPress = () => {
    const backIndex = currentIndex === 0 ? productImages.length - 1 : currentIndex - 1;
    setCurrentIndex(backIndex);
    carouselRef.current.scrollToIndex({ index: backIndex });
  };

  // Calculate the width of the filled portion based on the fill value
  const filledWidth = (fillValue / 10) * width;

  return (
    <View style={styles.productDescription}>
        <View style={styles.container}>
          <View style={styles.topBar}>
            <TouchableOpacity  style={styles.backButtonContainer} onPress={handleBack}>

              <Svg
                style={styles.iconIonicIosArrowBack}
                preserveAspectRatio="none"
                viewBox="11.250576972961426 6.1936492919921875 13.5029296875 23.618850708007812"
                fill="rgba(56, 199, 130, 1)"
              >
                <SvgPath d="M 15.32109355926514 18 L 24.2578125 9.0703125 C 24.91875076293945 8.409375190734863 24.91875076293945 7.340624809265137 24.2578125 6.686718940734863 C 23.59687423706055 6.025781631469727 22.52812576293945 6.032812595367432 21.8671875 6.686718940734863 L 11.7421875 16.8046875 C 11.10234355926514 17.44453048706055 11.08828163146973 18.47109413146973 11.69296836853027 19.13203048706055 L 21.86015701293945 29.3203125 C 22.19062614440918 29.65078163146973 22.62656402587891 29.8125 23.05546951293945 29.8125 C 23.484375 29.8125 23.92031288146973 29.65078163146973 24.25078201293945 29.3203125 C 24.91172027587891 28.65937423706055 24.91172027587891 27.59062576293945 24.25078201293945 26.93671798706055 L 15.32109355926514 18 Z" />
              </Svg>
            </TouchableOpacity>

            <TouchableOpacity style={styles.squadButtonContainer} onPress={handleSquad}>
              <Svg
                style={styles.iconMetroShop}
                preserveAspectRatio="none"
                viewBox="4.113128185272217 4.627279758453369 25.0556640625 22.271835327148438"
                fill="rgba(56, 199, 130, 1)"
              >
                <SvgPath d="M 11.24430370330811 11.93522644042969 L 12.34539031982422 4.627281188964844 L 6.618682861328125 4.627281188964844 L 4.225874423980713 10.89123344421387 C 4.152087211608887 11.11395263671875 4.113128185272217 11.34501647949219 4.113128185272217 11.58722972869873 C 4.113128185272217 13.12399196624756 5.713916301727295 14.3712100982666 7.691927433013916 14.3712100982666 C 9.515435218811035 14.3712100982666 11.02297019958496 13.30772304534912 11.24427509307861 11.93522644042969 Z M 16.64103507995605 14.37120819091797 C 18.61766052246094 14.37120819091797 20.21983528137207 13.12399196624756 20.21983528137207 11.58722972869873 C 20.21983528137207 11.5301628112793 20.21564674377441 11.47309684753418 20.21287536621094 11.41880416870117 L 19.50437545776367 4.627279758453369 L 13.77767086029053 4.627279758453369 L 13.06775569915771 11.41323184967041 C 13.06498241424561 11.47029685974121 13.06218242645264 11.52736186981201 13.06218242645264 11.58722972869873 C 13.06218242645264 13.12399196624756 14.66435718536377 14.37120819091797 16.64098167419434 14.37120819091797 Z M 23.60098266601562 15.827223777771 L 23.60098266601562 21.33115768432617 L 9.681087493896484 21.33115768432617 L 9.681087493896484 15.83557033538818 C 9.071384429931641 16.05551528930664 8.400455474853516 16.1807918548584 7.691927433013916 16.1807918548584 C 7.420488834381104 16.1807918548584 7.157423496246338 16.14876747131348 6.897106647491455 16.11258125305176 L 6.897106647491455 24.95033073425293 C 6.897106647491455 26.02216148376465 7.772674083709717 26.89911460876465 8.843118667602539 26.89911460876465 L 24.43617820739746 26.89911460876465 C 25.50800895690918 26.89911460876465 26.38496589660645 26.02077484130859 26.38496589660645 24.95033073425293 L 26.38496589660645 16.11396598815918 C 26.12326049804688 16.14876747131348 25.86160850524902 16.18218040466309 25.59014129638672 16.18218040466309 C 24.88580131530762 16.1807918548584 24.21207237243652 16.0527172088623 23.60098266601562 15.827223777771 Z M 29.05758476257324 10.89123344421387 L 26.6619758605957 4.627279758453369 L 20.93671226501465 4.627279758453369 L 22.0363826751709 11.92408180236816 C 22.25078201293945 13.30215072631836 23.75826072692871 14.37120819091797 25.59014320373535 14.37120819091797 C 27.56676864624023 14.37120819091797 29.1689453125 13.12399196624756 29.1689453125 11.58722972869873 C 29.1689453125 11.34501647949219 29.12995910644531 11.11395263671875 29.05758666992188 10.89123344421387 Z" />
              </Svg>
            </TouchableOpacity>
          </View>
            <View style={styles.productInfo}>
              <View style={styles.productImageContainer}>
            <FlatList
        data={productImages}
        horizontal
        ref ={carouselRef}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderProductImage}
        initialScrollIndex={currentIndex}
        getItemLayout={(productImage, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      /> 
      <View style={[styles.nextbackContainer,{ position: 'absolute', top: '49%', left: 16 }]}>

      <TouchableOpacity
        style={{ position: 'absolute', left: 12 }}
        onPress={handleBackButtonPress}
      >
        <Text style={{ fontSize: 40, color: 'rgba(56, 199, 130, 1)' }}>{'<'}</Text>
      </TouchableOpacity>
      </View>
      <View style={[styles.nextbackContainer,{ position: 'absolute', top: '49%', right: 16 }]}>

      <TouchableOpacity
        style={{ position: 'absolute', right: 12 }}
        onPress={handleNextButtonPress}
      >
        <Text style={{ fontSize:40, color: 'rgba(56, 199, 130, 1)' }}>{'>'}</Text>
      </TouchableOpacity>
      </View>
              </View>
              <View style={styles.productNameContainer}>
                <Text style={styles.productName}>White Latte</Text>
                <Text style={styles.price}>$ 3.50</Text>
                <View style={styles.starContainer}>{renderStars()}</View>
              </View>
              <View style={styles.productDescriptionContainer}>
                <Text style={styles.productDescriptionHeading}>
                  {" "}
                  Description
                </Text>
                <Text style={styles.productDescriptionText}>
                  Coffee Beans Type: Brazil Carbona
                </Text>
                <Text style={styles.productDescriptionText}>
                  Size: 250ml Sweetness: 50%
                </Text>
                <Text style={styles.productDescriptionText}>
                  Collection: Coffee Connects Hangout@UOB
                </Text>
                <Text style={styles.productDescriptionText}>
                  Collection Date: Immediate
                </Text>
              </View>
              <View style={styles.unitsContainer}>
              <View style={[styles.unitsFill,]} />
                <Text style={styles.units}>{`${fillValue} Out of 10 Units`}</Text>
              </View>
          <View style={styles.buttonContainer}>
           <CustomButton title = "Chat Now" style = {styles.chatNow} backgroundColor={"rgba(56, 199, 130, 0.3)"} onPress ={handleChat}/>
           <CustomButton title = "Participate Now" style = {styles.participateNow} backgroundColor={"rgba(56, 199, 130, 0.8)"} onPress ={handleParticipate}/>
          </View>
            </View>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productDescription: {
    flex: 1,
  },
  container: {
    height: height * 1.05,
    marginTop: height * 0.03,
    flex: 1,
    alignItems: "center",
    flexDirection:'column'
  },
  topBar: {
    position: "absolute",
    justifyContent: "center",
    height: height * 0.08,
    width: width,
    borderBottomLeftRadius: width / 16,
    borderBottomRightRadius: width / 16,
  },
  backButtonContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    height: width * 0.18,
    width: width * 0.18,
    position: "absolute",
    left: 15,
  },
  iconIonicIosArrowBack: {
    opacity: 1,
    position: "absolute",
    width: 15,
    height: 25,
  },
  squadButtonContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    height: width * 0.18,
    width: width * 0.18,
    position: "absolute",
    right: 15,
  },
  iconMetroShop: {
    opacity: 1,
    position: "absolute",
    width: 25,
    height: 25,
  },
  productInfo: {
    flex:0,
    top: height * 0.08,
    width: width,
    position: "absolute",
    left:0,
    marginLeft:0,
  },
  productImageContainer: {
    height: height * 0.5,
    width: width,
    overflow: "hidden",
    borderTopLeftRadius: width / 12,
    borderTopRightRadius: width / 12,
    
  },
  productImage: {
    height: height * 0.5,
    width: width*0.99,
    alignSelf: "center",
    resizeMode: "cover",
  },
  productNameContainer: {
    position: "relative",
    height: height * 0.1,
  },
  productName: {
    position: "absolute",
    left: 18,
    top: 15,
    height: 30,
    width: 100,
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(72, 72, 72, 1)",
    fontSize: 20,
    fontWeight: "700",
    fontStyle: "normal",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
  },
  price: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(56, 199, 130, 1)",
    fontSize: 20,
    fontWeight: "700",
    fontStyle: "normal",
    textAlign: "left",
    marginTop: 0,
    top: 40,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 20,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 100,
    height: 30,
  },
  productDescriptionContainer: {
    position: "relative",
    height: height * 0.15,
  },
  productDescriptionHeading: {
    position: "absolute",
    left: 15,
    top: 0,
    height: 30,
    width: 100,
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(72, 72, 72, 1)",
    fontSize: 20,
    fontWeight: "700",
    fontStyle: "normal",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
  },
  productDescriptionText: {
    position: "relative",
    left: 20,
    top: 30,
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(72, 72, 72, 0.8)",
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
  },
  starContainer: {
    position: "absolute",
    right: 25,
    top: 25,
    height: 30,
    width: 120,
    flexDirection: "row",
  },
  stars: {
    width: 18,
    height: 18,
    resizeMode: "contain",
    marginHorizontal: 1,
  },
  unitsContainer:{
    marginTop:0,
    position:'relative',
    height:40,
    alignSelf:'center',
    alignItems:'center',
    justifyContent: 'center',
    width:width*0.88,
    borderBottomRightRadius:width/8,
    borderTopRightRadius:width/8,
    borderBottomLeftRadius:width/8,
    borderTopLeftRadius:width/8,
    backgroundColor:"rgba(56, 199, 130, 0.15)",
  },
  unitsFill:{
    marginTop:0,
    position:'absolute',
    height:36,
    left:0,
    borderBottomRightRadius:width/8,
    borderTopRightRadius:width/8,
    borderBottomLeftRadius:width/8,
    borderTopLeftRadius:width/8,
    backgroundColor:"rgba(56, 199, 130, 0.7)",
    width:(fillValue/10)*width
  },
  units:{
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "700",
    fontStyle: "normal",
  },
  buttonContainer:{
    flex:0,
    height:80,
    position: "relative",
    width:width,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    marginHorizontal:15,
    paddingVertical:5,
    height:50,
    width:160,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:60,
    
    
  },
  chatNow:{
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "700",
    fontStyle: "normal",
  },
  participateNow:{
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "700",
    fontStyle: "normal",
  },
  nextbackContainer: {
    flex: 0,
    height: 40,
    width:40,
    position: "absolute",
    borderRadius:60,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:'rgba(255,255,255,0.8)',
  },
});

export default ProductDescription;
