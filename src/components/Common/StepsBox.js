import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import QuestionMark from '../../assets/Images/Svg/QuestionMark.svg';

const StepsBox = ({Steps, title, navigation, current, help}) => {
  return (
    <TouchableOpacity
      style={[styles.boxContainer, !current && {opacity: 0.5}]}
      activeOpacity={0.5}
      onPress={navigation}>
      <View>
        <Text style={styles.topTxt}>{Steps}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      {help && <QuestionMark width={50} height={25} style={styles.icon} />}
    </TouchableOpacity>
  );
};

export default StepsBox;

const styles = StyleSheet.create({
  boxContainer: {
    borderWidth: 1,
    height: 118,
    marginVertical: 20,
    marginHorizontal: 30,
    borderRadius: 5,
    paddingVertical: 30,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topTxt: {
    fontFamily: 'Magenos-Medium',
    fontSize: 17,
    color: '#000',
  },
  title: {
    color: '#000',
    fontSize: 26,
    fontFamily: 'Magenos-Bold',
  },
  icon: {
    alignSelf: 'center',
  },
});
