import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Footer = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.txt}>Already have an account? </Text>
      <TouchableOpacity onPress={navigation}>
        <Text style={styles.txt2}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  main: {
    borderTopWidth: 1,
    borderTopColor: '#B5B5B5',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 15,
    marginBottom: 10,
  },
  txt: {
    fontFamily: 'Magenos-Black',
    color: '#000',
  },
  txt2: {
    fontFamily: 'Magenos-Black',
    color: '#A9A0FF',
    textDecorationLine: 'underline',
    textDecorationStyle: 2,
  },
});
