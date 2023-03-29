import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PaymentDetails = ({title, value, fontSize, color, require}) => {
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
      <Text style={styles.date}>{title}</Text>
      <Text
        style={{
          alignSelf: 'flex-end',
          color: color,
          fontFamily: 'Magenos-Bold',
          fontSize: fontSize,
        }}>
        {value}
      </Text>
    </View>
  );
};

export default PaymentDetails;

const styles = StyleSheet.create({
  date: {
    color: '#8B8A8A',
    fontFamily: 'Magenos-Medium',
    fontSize: 17,
    fontWeight: '600',
  },
});
