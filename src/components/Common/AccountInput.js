import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const AccountInput = ({
  lable,
  placeholder,
  error,
  password,
  onChangeText,
  value,
  PhoneNumber,
  onFoucus,
  required,
}) => {
  return (
    <View style={styles.main}>
      <View style={styles.lableContainer}>
        <Text style={styles.lable}>{lable}</Text>
        {required && (
          <Text
            style={{color: '#000', fontFamily: 'Magenos-Medium', fontSize: 18}}>
            *
          </Text>
        )}
      </View>
      <View style={styles.FiledContainer}>
        <TextInput
          keyboardType={PhoneNumber && 'number-pad'}
          placeholder={placeholder}
          placeholderTextColor="#808080"
          style={styles.input}
          value={value}
          onChangeText={text => onChangeText(text)}
          onFoucus={() => {
            setInFoucs(true);
          }}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default AccountInput;

const styles = StyleSheet.create({
  main: {
    marginVertical: 8,
  },
  lable: {
    color: '#000',
    fontFamily: 'Magenos-Medium',
    fontSize: 17,
    marginRight: 5,
  },
  FiledContainer: {
    borderWidth: 1,
    borderColor: '#C9C9C9',
    borderRadius: 5,
    paddingLeft: 15,
    marginTop: 10,
    width: 203,
  },
  lableContainer: {
    flexDirection: 'row',
  },
  input: {
    fontFamily: 'Magenos-Medium',
    color: '#000',
    fontSize: 16,
  },
  error: {
    color: 'red',
    fontFamily: 'Magenos-Medium',
    marginTop: 5,
    fontSize: 16,
  },
});
