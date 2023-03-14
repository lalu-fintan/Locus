import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = () => {
  return (
    <TouchableOpacity style={styles.btnContainer} activeOpacity={0.8}>
      <Text style={styles.btnTxt}>Next</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#A9A0FF',
    marginHorizontal: 30,
    height: 44,
    borderRadius: 5,
    justifyContent: 'center',
    marginVertical: 50,
  },

  btnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Magenos-Regular',
    fontSize: 16,
  },
});
