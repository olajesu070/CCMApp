//import liraries
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, SIZES} from '../constant/global';

// create a component
const TopBar = ({
  title,
  back,
  navigation,
  filter,
  onCancel = null,
  stepText = null,
}) => {
  return (
    <View style={styles.topHeader}>
      {back ? (
        <TouchableOpacity
          delayPressIn={0}
          onPress={() => navigation.goBack()}
          style={styles.topBar}>
          <Image source={require('../asset/backarrow.png')} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      ) : null}
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {title && <Text style={styles.headerText}>{title}</Text>}
        </View>
      </View>

      {filter ? (
        <TouchableOpacity delayPressIn={0} style={styles.topBar}>
          <Image
            style={styles.filterIcon}
            source={require('../asset/backarrow.png')}
          />
        </TouchableOpacity>
      ) : (
        <Text style={styles.stepText}>{}</Text>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    // marginBottom: RFValue(13),
    alignItems: 'center',
  },
  backText: {
    fontSize: RFValue(14),
    marginLeft: RFValue(16),
    color: '#fff',
  },
  headerText: {
    fontSize: SIZES.pageText,
    lineHeight: RFValue(30),
    color: COLORS.white, //COLORS.black,
    // marginBottom: RFValue(7),
  },
  topHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'purple',
    padding: RFValue(10),
    gap: RFValue(60),
  },
  subText: {
    fontSize: RFValue(10),
    lineHeight: RFValue(14),
    color: COLORS.gray,
    marginBottom: RFValue(10),
  },
  stepText: {
    color: COLORS.lightGray,
    fontSize: RFValue(9),
  },
  filterIcon: {
    width: RFValue(38),
    height: RFValue(38),
  },
});

//make this component available to the app
export default TopBar;
