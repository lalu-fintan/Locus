import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
const InputField = ({
  lable,
  placeholder,
  error,
  index,
  type,
  password,
  onChangeText,
  value,
  Number,
  onFoucus,
  required,
  icon,
  lockIconName,
  shownPassword,
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
          keyboardType={Number && 'number-pad'}
          placeholder={placeholder}
          placeholderTextColor={'#CCCCCC'}
          style={styles.input}
          value={value}
          onChangeText={text => onChangeText(text, index, type)}
          onFoucus={() => {
            setInFoucs(true);
          }}
        />
        {lockIconName && (
          <TouchableOpacity onPress={shownPassword}>
            <Icons name={lockIconName} size={20} color={'#A9A0FF'} />
          </TouchableOpacity>
        )}
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
    width: '90%',
  },
  error: {
    color: 'red',
    fontFamily: 'Magenos-Medium',
    marginTop: 5,
    fontSize: 16,
  },
});
