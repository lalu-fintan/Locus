import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TopBox = ({lable}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{lable}</Text>
    </View>
  );
};

export default TopBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
  },
  txt: {
    fontFamily: 'Magenos-Bold',
    fontSize: 19,
    color: '#fff',
  },
});
