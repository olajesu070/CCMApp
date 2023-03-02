//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {SIZES} from '../constant/global';

// create a component
const SongIndex = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('HymnView', {
          item: item.verse,
          bibleRef: item.bibleRef,
          id: item.id,
        })
      }>
      <View style={styles.container}>
        <Text style={styles.hymnText}>Hymn {item.id}</Text>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: SIZES.width,
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(20),
    borderBottomWidth: RFValue(1),
    borderBottomEndRadius: RFValue(20),
    borderBottomLeftRadius: RFValue(20),
    borderBottomColor: '#ccc',
    // backgroundColor: 'red',
  },
  hymnText: {
    fontSize: RFValue(20),
    fontWeight: '700',
    color: 'purple',
  },
});

//make this component available to the app
export default SongIndex;
