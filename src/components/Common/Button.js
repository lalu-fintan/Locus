import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Button = ({onPress, lable, icon}) => {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      activeOpacity={0.8}
      onPress={onPress}>
      {icon && <AntDesign name={icon} size={24} color="#fff" />}
      <Text style={[styles.btnTxt, {width: 260}]} numberOfLines={1}>
        {lable}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    backgroundColor: '#A9A0FF',
    height: 44,
    borderRadius: 5,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },

  btnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Magenos-Black',
    fontSize: 16,
    paddingHorizontal: 8,
  },
});
