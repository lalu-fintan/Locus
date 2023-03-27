import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

const radioButtons = ({lable, required}) => {
  const [radioButtons, setRadioButtons] = useState([
    {
      id: '1',
      label: 'Yes',
      value: 'Yes',
    },
    {
      id: '2',
      label: 'No',
      value: 'No',
    },
  ]);
  return (
    <View style={{marginTop: 20, marginBottom: 20}}>
      <View style={styles.lableContainer}>
        <Text style={styles.lable}>{lable}</Text>
      </View>
      <RadioGroup radioButtons={radioButtons} layout={'row'} />
    </View>
  );
};

export default radioButtons;

const styles = StyleSheet.create({
  lable: {
    fontFamily: 'Magenos-Medium',
    fontSize: 17,
    color: '#000',
    marginBottom: 14,
  },

  lableContainer: {
    flexDirection: 'row',
  },

  btn: {},
});
