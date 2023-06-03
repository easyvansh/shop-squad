import React, { useState } from 'react';
import { View, ScrollView, Image, StyleSheet, TouchableOpacity,Dimensions } from 'react-native';

const {height , width}  = Dimensions.get('window');

const SlideComponent = () => {
    const slides = [
      { id: 1, image: require('./slide1.png') },
      { id: 2, image: require('./slide2.png') },
      { id: 3, image: require('./slide3.png') },
      { id: 4, image: require('./slide4.png') },
    ];
  
    const [activeSlide, setActiveSlide] = useState(0);
  
    const handleSlidePress = (slide) => {
      console.log('Slide Pressed:', slide);
      // Perform any action or navigation when a slide is pressed
    };
  
    const handleSlideChange = (index) => {
      setActiveSlide(index);
    };
  
    state = {
      active :0,
    }

    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          contentContainerstyle = {styles.slideContainer}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onMomentumScrollEnd={(event) => {
            const { contentOffset } = event.nativeEvent;
            const pageIndex = Math.round(contentOffset.x / window.width);
            handleSlideChange(pageIndex);
          }}
          >
           <View style = {styles.slide}> 
          {/* {slides.map((slide, index) => (
            // <TouchableOpacity
            //   key={slide.id}
            //   style={styles.slide}
            //   onPress={() => handleSlidePress(slide)}
            // >
            />
            // </TouchableOpacity>
          ))} */}

          
          {
          slides.map((slide, index) => (

          <Image source={slide.image} style={styles.slideImage} key={slide.id} onPress={() => handleSlidePress(slide)}  />
          ))}
        <View style={styles.indicatorContainer}>
          {slides.map((slide, index) => (
            <View
              key={slide.id}
              style={[
                styles.indicator,
                index === activeSlide ? styles.activeIndicator : null,
              ]}
            />
             ))} 
         </View> 
          </View>
        </ScrollView>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'absolute',
      height: height*(0.5),
      padding:25,
      alignItems:'center',
      justifyContent:'center',
      borderWidth:5,
      top: Platform.OS === "android" ? 20 : 10,
      paddingTop: Platform.OS === "android" ? 15 : 5, 
      left:0,
      right: 0,
      marginLeft:5,
      marginRight:5,
      paddingHorizontal:15,
    },
    slideContainer:{
      alignItems:'center',
    },
    slide: {
      borderWidth:5,
      width:width*(0.85),
      height: height*(0.25),
      marginTop :70,
      borderRadius: width/32,
      overflow: 'hidden',
    },
    slideImage: {
      width: '100%',
      height: height*(0.2),
      resizeMode: 'cover',
      overflow: 'hidden',
    },
    indicatorContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
    },
    indicator: {
      borderWidth:2,
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: 'grey',
      marginHorizontal: 4,
      opacity: 0.8,
    },
    activeIndicator: {
      backgroundColor: 'blue',
    },
  });
  
  export default SlideComponent;
