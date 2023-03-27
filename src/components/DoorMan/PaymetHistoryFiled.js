import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PaymetHistoryFiled = ({color, date, amount, require}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: require && 1,
        borderBottomColor: '#C9C9C9',
        paddingBottom: 8,
        marginBottom: 20,
      }}>
      <Text style={styles.date}>{date}</Text>
      <Text
        style={{
          alignSelf: 'flex-end',
          color: color,
          fontFamily: 'Magenos-Medium',
          fontSize: 13,
        }}>
        {amount}
      </Text>
    </View>
  );
};

export default PaymetHistoryFiled;

const styles = StyleSheet.create({
  date: {
    color: '#8B8A8A',
    fontFamily: 'Magenos-Medium',
    fontSize: 13,
  },
});
