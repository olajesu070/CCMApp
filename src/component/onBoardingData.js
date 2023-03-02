import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {SIZES} from '../constant/global';
// get the phone max height and width
const {width, height} = Dimensions.get('window');

export const slides = [
  {
    id: '1',
    Image: require('../asset/onboard1.jpeg'),
    title: 'Let Rejoice',
    subtitle: '',
    BackgroundColor: '#37517E',
    fontColor: 'white',
    subFontColor: 'white',
    fontType: 'Poppins-Bold',
    imgStyle: {
      height: SIZES.height,
      width: SIZES.width,
      position: 'absolute',
      zIndex: -1,
      // left: RFValue(-126),
      // bottom: 0,
      // top: 0,
    },
    // imgStyle: {
    //   position: 'absolute',
    //   height: height / 2,
    //   width: width,
    //   resizeMode: 'contain',
    //   //   bottom: RFValue(159),
    // },
  },
  {
    id: '2',
    Image: require('../asset/onboard2.jpeg'),
    title: 'Sing onto thy Lord',
    subtitle: '',
    BackgroundColor: '#DEDEDE',
    fontColor: 'white',
    subFontColor: '#424242',
    fontType: 'Poppins-Bold',
    imgStyle: {
      height: SIZES.height,
      width: SIZES.width,
      position: 'absolute',

      zIndex: -1,
      // left: RFValue(-126),
      // bottom: 0,
      // top: 0,
    },
    // imgStyle: {
    //   position: 'absolute',
    //   bottom: RFValue(0),
    //   width: width,
    //   resizeMode: 'contain',
    //   height: height,
    // },
  },
  {
    id: '3',
    Image: require('../asset/onboard3.jpeg'),
    title: 'For his Love is Great',
    subtitle: '',
    BackgroundColor: '#37517E',
    fontColor: 'white',
    subFontColor: 'white',
    fontType: 'Poppins-Bold',
    imgStyle: {
      height: SIZES.height,
      width: SIZES.width,
      position: 'absolute',
      zIndex: -1,
      // left: RFValue(-126),
      // bottom: 0,
      // top: 0,
    },
    // imgStyle: {
    //   position: 'absolute',
    //   bottom: 0,
    //   width: width,
    //   height: RFValue(450),
    //   resizeMode: 'contain',
    // },
  },
];
