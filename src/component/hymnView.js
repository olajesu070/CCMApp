//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, SIZES} from '../constant/global';
import TopBar from './topHeader';

// create a component
const HymnView = ({navigation, route}) => {
  const {bibleRef, item, id} = route.params;

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} back title={`Hymn ${id}`} />

      <ScrollView>
        <View style={styles.hymnView}>
          <View style={styles.bibleRefView}>
            <Text style={styles.bibleRef}>CCZM C.M.</Text>
            <Text style={styles.bibleRef}>{bibleRef}</Text>
          </View>

          <View>
            {item.map((verse, i) => (
              <View style={styles.verseView} key={i}>
                <Text style={[styles.verse, {marginRight: RFValue(6)}]}>
                  {verse.id}
                </Text>
                <Text style={styles.verse}>{verse.song}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
  hymnView: {
    padding: RFValue(15),
    paddingHorizontal: RFValue(20),
    marginBottom: RFValue(40),
  },
  verseView: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: RFValue(40),
    marginBottom: RFValue(20),
  },
  verse: {
    color: COLORS.black,
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
    textAlign: 'justify',
  },
  bibleRef: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    color: COLORS.black,
  },
  bibleRefView: {
    marginBottom: RFValue(20),
  },
});

//make this component available to the app
export default HymnView;
