import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const InputField = ({
  lable,
  placeholder,
  error,
  password,
  onChangeText,
  value,
  PhoneNumber,
  onFoucus,
  required,
  icon,
}) => {
  const [isFocus, setInFoucs] = useState(false);
  return (
    <View style={styles.main}>
      <View style={styles.lableContainer}>
        <Text style={styles.lable}>{lable}</Text>
        {required && (
          <Text
            style={{
              color: '#000',
              fontFamily: 'Magenos-Medium',
              fontSize: 18,
            }}>
            *
          </Text>
        )}
      </View>
      <View style={styles.FiledContainer}>
        {icon && <Icon name={icon} size={16} color={'#CCCCCC'} />}
        <TextInput
          secureTextEntry={password}
          keyboardType={PhoneNumber && 'number-pad'}
          placeholder={placeholder}
          placeholderTextColor={'#CCCCCC'}
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

export default InputField;

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
    flexDirection: 'row',
    alignItems: 'center',
  },
  lableContainer: {
    flexDirection: 'row',
  },
  input: {
    fontFamily: 'Magenos-Medium',
    color: '#000',
    fontSize: 16,
    marginTop: 4,

    width: '100%',
  },
  error: {
    color: 'red',
    fontFamily: 'Magenos-Medium',
    marginTop: 5,
    fontSize: 16,
  },
});
