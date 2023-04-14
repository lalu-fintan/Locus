import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import QuestionMark from '../../assets/Images/Svg/QuestionMark.svg';

const FieldLabel = ({help, lable}) => {
  return (
    <View style={styles.lableContainer}>
      <Text style={styles.lableTxt}>{lable}</Text>
      {help && (
        <TouchableOpacity>
          <QuestionMark width={9.66} height={9.66} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FieldLabel;

const styles = StyleSheet.create({
  lableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingBottom: 2,
    marginTop: 31,
    marginBottom: 10,
  },
  lableTxt: {
    color: '#A9A0FF',
    fontFamily: 'Magenos-Medium',
    fontSize: 16,
  },
  icon: {
    marginTop: 2,
    marginLeft: 4,
  },
});
