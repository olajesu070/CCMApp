//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {SIZES} from '../constant/global';

// create a component
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../asset/ccm_logo.jpg')} style={styles.img} />
      <Image source={require('../asset/bgimg.jpg')} style={styles.bgimg} />
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('Hymnal')}>
          <View style={styles.btnEnglish}>
            <Text style={styles.english}>English</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.btnYoruba}>
            <Text style={styles.yoruba}>Yoruba</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.accountDetails}>
            <Text style={styles.account}>PAY OFFERING</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.desc}>SELECT YOUR PREFERRED LANGUAGE</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: RFValue(50),
  },
  bgimg: {
    height: SIZES.height,
    // width: SIZES.width,
    position: 'absolute',
    zIndex: -1,
    // left: RFValue(-126),
    // bottom: 0,
    // top: 0,
  },
  img: {
    width: RFValue(50),
    height: RFValue(50),
    borderRadius: RFValue(50),
    // marginBottom: RFValue(20),
  },
  english: {
    color: 'white',
    fontSize: RFValue(50),
  },
  yoruba: {
    color: 'purple',
    fontSize: RFValue(50),
  },
  account: {
    color: 'red',
    fontSize: RFValue(20),
  },
  btnEnglish: {
    backgroundColor: 'purple',
    paddingHorizontal: RFValue(60),
    paddingVertical: RFValue(5),
    borderRadius: RFValue(10),
  },
  btnYoruba: {
    backgroundColor: 'white',
    paddingHorizontal: RFValue(60),
    paddingVertical: RFValue(5),
    borderRadius: RFValue(10),
  },
  accountDetails: {
    backgroundColor: 'white',
    paddingHorizontal: RFValue(60),
    paddingVertical: RFValue(5),
    borderRadius: RFValue(10),
  },
  button: {
    display: 'flex',
    gap: RFValue(30),
  },
  desc: {
    fontSize: RFValue(18),
    fontWeight: '700',
    color: 'white',
  },
});

//make this component available to the app
export default Home;
