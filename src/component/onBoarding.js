//import liraries
import React, {useState, createRef} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Text,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, SIZES} from '../constant/global';
import {slides} from './onBoardingData';

const {width, height} = Dimensions.get('window');
let CurrentSlide = 0;
let maxSlide = 3;
let IntervalTime = 3000;
let _timerId = null;

const Slide = ({item}) => {
  return (
    <View style={{backgroundColor: item.BackgroundColor, width: SIZES.width}}>
      <Text
        style={{
          color: item.fontColor,
          fontSize: RFValue(35),
          lineHeight: RFValue(37),
          marginTop: RFValue(20),
          textAlign: 'left',
          fontWeight: '700',
          fontStyle: 'italic',
          paddingTop: RFValue(52),
          paddingLeft: RFValue(29),
          maxWidth: '80%',
        }}>
        {item.title}
      </Text>
      <Text
        style={{
          color: item.subFontColor,
          fontSize: RFValue(11),
          marginTop: RFValue(10),
          textAlign: 'left',
          maxWidth: '100%',
          lineHeight: RFValue(15),
          paddingTop: RFValue(4),
          paddingLeft: RFValue(31),
        }}>
        {item.subtitle}
      </Text>
      <Image source={item.Image} style={item.imgStyle} blurRadius={2} />
    </View>
  );
};

// create a component
const Onboard = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const flatList = createRef();

  // TODO goToNextPage()
  function goToNextPage() {
    if (CurrentSlide >= maxSlide) CurrentSlide = 0;

    if (flatList.current) {
      flatList.current.scrollToIndex({
        index: CurrentSlide++,
        animated: true,
      });
    }
  }

  function stopAutoPlay() {
    if (_timerId) {
      clearInterval(_timerId);
      _timerId = null;
    }
  }

  function startAutoPlay() {
    stopAutoPlay();
    _timerId = setInterval(goToNextPage, IntervalTime);
  }

  // Start autoscroll
  function ResetAutoplay() {
    stopAutoPlay();
    startAutoPlay();
  }

  // Get the current slide index
  const updateCurrentSlideIndex = e => {
    setCurrentSlideIndex(CurrentSlide - 1);
  };

  // Navigating indicators..
  const IndicatorBtnContainer = () => {
    return (
      <View style={{position: 'absolute'}}>
        {/* INDICATOR CONTAINER */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: RFValue(20),
            width,
          }}>
          {/* RENDER INDICATOR */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                  opacity: 1,
                  width: width / 3.5,
                },
              ]}
            />
          ))}
        </View>
        <View style={{marginBottom: RFValue(20)}}>
          <View
            style={{
              flexDirection: 'row',
              padding: RFValue(23),
              top: height * 0.8,
            }}>
            <View style={{width: RFValue(15)}} />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Home')}
              style={[styles.btnLogin, styles.btn]}>
              <Text
                style={{
                  fontSize: RFValue(18),
                  fontWeight: '700',
                  color: 'purple',
                }}>
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        initialScrollIndex={0}
        onScroll={updateCurrentSlideIndex}
        style={{flex: 1}}
        pagingEnabled
        data={slides}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Slide item={item} />}
        //flatListRef={createRef()}
        ref={flatList}
      />
      <ResetAutoplay />
      <IndicatorBtnContainer />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  indicator: {
    height: RFValue(3),
    width: width / 3,
    backgroundColor: 'black',
    opacity: 0.06,
    marginHorizontal: RFValue(1),
    borderRadius: RFValue(1),
    paddingEnd: RFValue(10),
    top: RFValue(20),
  },
  btn: {
    flex: 1,
    height: RFValue(50),
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: RFValue(158),
  },
  btnLogin: {
    backgroundColor: 'white',
  },
  btnGetStarted: {
    backgroundColor: COLORS.white,
  },
});

//make this component available to the app
export default Onboard;
