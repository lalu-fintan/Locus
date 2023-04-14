import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';

const DropDown = ({lable, data, setSelected, value, error}) => {
  // const [isFocus, setInFoucs] = useState(false);
  return (
    <View>
      <Text style={styles.DropDownLable}>{lable}</Text>
      <SelectList
        boxStyles={{
          borderRadius: 5,
          borderColor: '#C9C9C9',
          height: 44,
          marginBottom: 15,
          marginTop: 5,
        }}
        placeholder={'Select'}
        data={data}
        setSelected={setSelected}
        search={false}
        value={value}
        fontFamily={'Magenos-Medium'}
        // onSelect={value => {
        //   validCheck(value);
        // }}
        dropdownStyles={{
          borderRadius: 5,
          marginBottom: 10,
          marginTop: -10,
          borderColor: '#C9C9C9',
        }}
        dropdownTextStyles={{
          fontFamily: 'Magenos-Medium',
          fontSize: 14,
          color: '#000',
        }}
        inputStyles={{
          fontSize: 14,
          fontFamily: 'Magenos-Medium',
          color: '#000',
        }}
      />
      {error && (
        <Text
          style={{
            color: 'red',
            fontFamily: 'Magenos-Medium',

            fontSize: 16,
            marginBottom: 10,
          }}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  DropDownLable: {
    fontFamily: 'Magenos-Medium',
    fontSize: 17,
    color: '#000',
    marginBottom: 8,
  },
});
