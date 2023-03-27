import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const AddButton = ({width, lable}) => {
  return (
    <TouchableOpacity style={[styles.btnContainer, {width: width}]}>
      <Entypo name="plus" size={16} color={'#A9A0FF'} />
      <Text style={styles.content}>{lable}</Text>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  btnContainer: {
    borderWidth: 2,
    borderRadius: 5,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderStyle: 'dotted',
    borderColor: '#A9A0FF',
    marginVertical: 20,
  },

  content: {
    color: '#A9A0FF',
    fontFamily: 'Magenos-Medium',
    fontSize: 17,
    paddingLeft: 2,
  },
});
