import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const FilterButton = ({Option1, Option2, selectionMode, onSelcectSwitch}) => {
  // const [onSelect1, setOnSelect1] = useState(0);
  // const [onSelect2, setOnSelect2] = useState(1);
  // console.log(onSelect1);
  // console.log(onSelect2);
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = value => {
    setSelectionMode(value);
    onSelcectSwitch(value);
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        style={[
          styles.filterbtn,

          {
            backgroundColor: getSelectionMode == 1 ? '#A9A0FF' : null,
            borderWidth: getSelectionMode == 1 ? null : 1,
          },
        ]}
        onPress={() => {
          updateSwitchData(1);
        }}>
        <Text
          style={[
            styles.filtertxt,
            getSelectionMode == 1 ? {color: '#fff'} : {color: '#8B8A8A'},
          ]}>
          {Option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.filterbtn,
          {
            backgroundColor: getSelectionMode == 2 ? '#A9A0FF' : null,
            borderWidth: getSelectionMode == 2 ? null : 1,
          },
        ]}
        onPress={() => {
          updateSwitchData(2);
        }}>
        <Text
          style={[
            styles.filtertxt,
            getSelectionMode == 2 ? {color: '#fff'} : {color: '#8B8A8A'},
          ]}>
          {Option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  filterbtn: {
    width: 106,
    height: 34,
    // backgroundColor: '#A9A0FF',
    borderWidth: 0.5,
    borderColor: '#8B8A8A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 10,
  },
  Option1: {
    // backgroundColor: '#A9A0FF',
  },
  Option2: {
    borderWidth: 1,
  },
  filtertxt: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Magenos-Black',
    fontSize: 16,
  },
});
