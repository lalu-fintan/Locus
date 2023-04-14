import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
// import RadioGroup from 'react-native-radio-buttons-group';

const radioButtons = ({lable, count, onPress1, onPress2, error}) => {
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
      {/* <RadioGroup radioButtons={radioButtons} layout={'row'} value={value} /> */}
      <View style={{marginTop: 15, flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.row1}>
          <TouchableOpacity style={styles.border} onPress={onPress1}>
            <View
              style={{
                height: 10,
                width: 10,
                borderRadius: 100,
                backgroundColor: count == 1 ? '#A9A0FF' : null,
              }}></View>
          </TouchableOpacity>
          <Text style={styles.texts}>Yes</Text>
        </View>
        <View style={styles.row2}>
          <TouchableOpacity style={styles.border} onPress={onPress2}>
            <View
              style={{
                height: 10,
                width: 10,
                borderRadius: 100,
                backgroundColor: count == 2 ? '#A9A0FF' : null,
              }}></View>
          </TouchableOpacity>
          <Text style={styles.texts}>No</Text>
        </View>
      </View>
      {error && <Text style={{color: 'red', marginTop: 5}}>{error}</Text>}
    </View>
    // </View>
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

  border: {
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 100,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  texts: {
    fontSize: 14,
    paddingLeft: 10,
    fontFamily: 'Magenos-Medium',
    color: 'black',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 29,
  },
});
