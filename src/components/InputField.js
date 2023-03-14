import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const InputField = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.lable}>Full Name</Text>
      <View style={styles.FiledContainer}>
        <TextInput
          placeholder="fullname"
          placeholderTextColor="#808080"
          style={styles.input}
        />
      </View>
      <Text style={styles.error}>error</Text>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  main: {
    marginHorizontal: 30,
    marginVertical: 5,
  },
  lable: {
    color: '#000',
    fontFamily: 'Magenos-Medium',
    fontSize: 17,
  },
  FiledContainer: {
    borderWidth: 1,
    borderColor: '#C9C9C9',
    borderRadius: 5,
    paddingLeft: 15,
    marginTop: 10,
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
