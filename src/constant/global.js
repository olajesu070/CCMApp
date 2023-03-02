import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const COLORS = {
  // base colors
  primary: '#37517E',
  secondary: '#F8F8F8',

  // colors
  primaryLight: '#7BA9DA',
  white: '#FFFFFF',
  lightGray: '#5F5F5F',
  lineColor: 'rgba(0, 0, 0, 0.06)',
  tabIconIactive: 'rgba(0, 0, 0, 0.3)',
  gray: 'rgba(0,0,0,0.45)',
  black: '#000000',
  alert: '#FF784B',
  yellow: '#FFAA00',
  lightYellow: 'rgba(255, 170, 0, 0.17)',
  placeholderColor: 'rgba(53, 61, 74, 0.6)',
  transparent: 'rgba(255, 0, 255,0)',
};

export const SIZES = {
  // global sizes
  font: RFValue(14),
  radius: 10,
  tabIconSize: RFValue(18),

  // font sizes
  h1: RFValue(16),
  h2: RFValue(14),
  h3: RFValue(12),
  pageText: RFValue(17),
  buttonText: RFValue(11),
  // app dimensions
  width,
  height,
};

export const FONTS = {
  // largeTitle: { fontFamily: "Poppins-Regular", fontSize: SIZES.largeTitle, lineHeight: 55 },
  boldText: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.h1,
    lineHeight: 36,
  },

  mediumText: {
    fontFamily: 'Poppins-Medium',
    fontSize: SIZES.h2,
    lineHeight: 30,
  },

  regularText: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.h3,
    lineHeight: 22,
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
