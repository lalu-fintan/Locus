import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const DurationTime = ({Label, date, onPress, error}) => {
  return (
    <View style={{marginTop: 10}}>
      <Text style={styles.lable}>{Label}</Text>
      <TouchableOpacity
        style={styles.FiledContainer}
        onPress={onPress}
        activeOpacity={0.7}>
        <Text style={styles.date}>{date}</Text>
      </TouchableOpacity>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default DurationTime;

const styles = StyleSheet.create({
  FiledContainer: {
    borderWidth: 1,
    borderColor: '#C9C9C9',
    borderRadius: 5,
    paddingLeft: 15,
    marginTop: 10,
    width: 200,
    height: 50,
    justifyContent: 'center',
  },
  lable: {
    color: '#000',
    fontFamily: 'Magenos-Medium',
    fontSize: 17,
    marginRight: 5,
  },
  date: {
    color: '#000',
    fontFamily: 'Magenos-Medium',
    fontSize: 16,
    // paddingLeft: 5,
    // alignSelf: 'center',
  },
  error: {
    color: 'red',
    fontFamily: 'Magenos-Medium',
    marginTop: 5,
    fontSize: 16,
  },
});
