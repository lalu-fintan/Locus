import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ToggleSwitch from 'toggle-switch-react-native';

const ToggleButton = ({lable}) => {
  const [isOn, setIsOn] = useState(false);
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', marginBottom: 30}}>
      <ToggleSwitch
        isOn={isOn}
        onColor="#A9A0FF"
        offColor="#707070"
        size="small"
        onToggle={() => setIsOn(!isOn)}
      />
      <Text style={styles.menu}>{lable}</Text>
    </View>
  );
};

export default ToggleButton;

const styles = StyleSheet.create({
  menu: {
    color: '#707070',
    fontSize: 19,
    fontFamily: 'Magenos-Medium',
    marginLeft: 23,
  },
});
