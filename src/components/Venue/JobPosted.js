import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Celebration from '../../assets/Images/Svg/Celebration.svg';

const JobPosted = ({lable}) => {
  return (
    <View style={styles.container}>
      <Celebration color={'#fff'} style={{width: 26, height: 25}} />
      <Text style={styles.txt}>{lable}</Text>
    </View>
  );
};

export default JobPosted;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A9A0FF',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: 4,
    flexDirection: 'row',
  },
  txt: {
    fontFamily: 'Magenos-Bold',
    fontSize: 19,
    color: '#fff',
    marginLeft: 5,
  },
});
