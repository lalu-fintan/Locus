import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import TopLogo from '../../../components/Common/TopLogo';
import TopBox from '../../../components/Common/TopBox';
import InputField from '../../../components/Common/InputField';
import Button from '../../../components/Common/Button';
import Footer from '../../../components/Common/Footer';

const TheVenue = ({navigation, route}) => {
  const {callBack} = route.params;
  const [venueName, setVenueName] = useState('');
  const [registerNumber, setRegisterNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [validName, setValidName] = useState('');
  const [validRegisterNumber, setValidRegisterNumber] = useState('');
  const [validEmail, setValidEmail] = useState('');
  const [validPhoneNumber, setValidPhoneNumber] = useState('');

  const nameValidation = value => {
    if (!value) {
      setValidName('Enter the name');
    } else if (value.length < 5) {
      setValidName('minimum 5 letters');
    } else {
      setValidName('');
    }
    setVenueName(value);
  };

  const registerNumberValidation = value => {
    if (!value) {
      setValidRegisterNumber('enter the register number');
    } else if (value.length <= 11) {
      setValidRegisterNumber('enter the valid register Number');
    } else {
      setValidRegisterNumber('');
      return;
    }
    setRegisterNumber(value);
  };

  const PhonenumberValidation = value => {
    // const phoneNumberRegex = '/^+?[1-9][0-9]{7,14}$/;';
    if (!value) {
      setValidPhoneNumber('enter the Phone number');
    } else if (value.length <= 11) {
      setValidPhoneNumber('enter the valid Phone Number');
    } else {
      setValidPhoneNumber('');
      return;
    }
    setPhoneNumber(value);
  };
  const emailValidation = value => {
    if (!value) {
      setValidEmail('Enter the Email');
    } else if (!value.match(/\S+@\S+\.\S+/)) {
      setValidEmail('Enter the valid Email');
    } else {
      setValidEmail('');
    }
    setEmail(value);
  };
  console.log(callBack);
  function nextHandler() {
    let validate = true;
    if (!venueName) {
      setValidName('Enter the name');
      validate = false;
    }
    if (!registerNumber) {
      setValidRegisterNumber('Enter the register number');
      validate = false;
    }
    if (!phoneNumber) {
      setValidPhoneNumber('Enter the phone number');
      validate = false;
    }
    if (!email) {
      setValidEmail('Enter the email');
      validate = false;
    }
    if (validate) {
      navigation.goBack();
      callBack();
    }
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo navigation={() => navigation.goBack()} />
        <TopBox lable={'The Venue'} />
        <View style={styles.inputContainer}>
          <InputField
            lable={'Venue Name'}
            placeholder={'Name'}
            value={venueName}
            onChangeText={nameValidation}
            error={validName}
          />
          <InputField
            lable={'Registration Number'}
            placeholder={'Number'}
            value={registerNumber}
            onChangeText={registerNumberValidation}
            error={validRegisterNumber}
          />
          <InputField
            lable={'Email'}
            placeholder={'Email'}
            value={email}
            onChangeText={emailValidation}
            error={validEmail}
          />
          <InputField
            lable={'Phone Number'}
            placeholder={'+44'}
            value={phoneNumber}
            onChangeText={PhonenumberValidation}
            error={validPhoneNumber}
            Number
          />
          <Button lable={'Next'} onPress={nextHandler} />
        </View>
        <Footer navigation={() => navigation.navigate('login')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TheVenue;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 55,
    marginHorizontal: 20,
  },
});
