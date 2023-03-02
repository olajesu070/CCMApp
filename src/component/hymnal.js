//import liraries
import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {SIZES} from '../constant/global';
import {English} from './english';
import SongIndex from './song';
const {width, height} = Dimensions.get('window');

// create a component
const Hymnal = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerImg}>
        <Image
          source={require('../asset/keyboard.jpg')}
          style={styles.imgHd}
          blurRadius={15}
        />
        <Text style={styles.headerText}>ENGLISH</Text>
      </View>
      <View style={styles.songContainer}>
        <FlatList
          data={English}
          keyExtractor={item => item?.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <SongIndex item={item} navigation={navigation} />
          )}
          contentContainerStyle={
            {
              // paddingBottom: height / 5,
            }
          }
          //   ListFooterComponent={
          //     <View>
          //       <Text
          //         style={{
          //           color: 'black',
          //           marginLeft: RFValue(20),
          //           marginTop: RFValue(20),
          //         }}>
          //         Amin
          //       </Text>
          //     </View>
          //   }
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // paddingTop: RFValue(20),
  },
  songContainer: {
    marginTop: RFValue(20),
    height: SIZES.height / 1.4,
  },
  headerImg: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: RFValue(40),
    fontWeight: '900',
    color: 'purple',
    position: 'absolute',
    // left: 60,
  },
  imgHd: {
    // width: RFValue(50),
    height: RFValue(182),
    // height: SIZES.height,
    width: SIZES.width,
    resizeMode: 'stretch',
    borderBottomRightRadius: RFValue(70),
  },
});

//make this component available to the app
export default Hymnal;
