import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import QuestionMark from '../../assets/Images/Svg/QuestionMark.svg';

const StepsBox = ({Steps, title, callBack, disable, completed, help}) => {
  return (
    <TouchableOpacity
      disabled={disable}
      style={[
        styles.boxContainer,
        disable && styles.disableContainer,
        completed && styles.completedContainer,
      ]}
      activeOpacity={0.5}
      onPress={callBack}>
      <View>
        <Text style={[styles.topTxt, {color: completed && '#BEB7FF'}]}>
          {Steps}
        </Text>
        <Text style={[styles.title, {color: completed && '#A9A0FF'}]}>
          {title}
        </Text>
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
  disableContainer: {
    backgroundColor: '##F4F4F4',
    opacity: 0.5,
  },
  completedContainer: {
    backgroundColor: '#EAE8FF',
    opacity: 0.8,
    borderWidth: 0.5,
  },
});
