import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import TopLogo from '../../../components/Common/TopLogo';
import TopBox from '../../../components/Common/TopBox';
import Footer from '../../../components/Common/Footer';
import Button from '../../../components/Common/Button';
import InputField from '../../../components/Common/InputField';
import {AuthContext} from '../../../context/AuthContext';

const FormScreen = ({navigation, route}) => {
  const val = useContext(AuthContext);
  const [name, setName] = useState('');
  const [postCode, setPostCode] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [passwords, setPassword] = useState('');
  const [validName, setValidName] = useState('');
  const [validCode, setValidCode] = useState('');
  const [validAddress, setValidAddress] = useState('');
  const [validEmail, setValidEmail] = useState('');
  const [validPhone, setValidPhone] = useState('');
  const [validPassword, setValidPassword] = useState('');

  const [passwordVisible, setPassWordVisible] = useState(true);

  // const {Main} = route.params;

  // console.log('fdfdf', Main);
  const nameRegex =
    "^([a-zA-Z]{2,}s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}s?([a-zA-Z]{1,})?)";
  const specialcharcter = '[^<>] (or ^.*[^<>].*$)';

  const nameValue = value => {
    if (!value) {
      setValidName('Enter the name');
    } else if (value.length < 5) {
      setValidName('minimum 5 letters');
    } else if (!value.match(nameRegex)) {
      setValidName('the name should be capital,small and number');
    } else {
      setValidName('');
    }
    setName(value);
  };

  const postValue = value => {
    if (!value) {
      setValidCode('Enter the Post Code');
    } else if (value.length <= 6) {
      setValidCode('post code length 6');
    } else {
      setValidCode('');
      return;
    }
    setPostCode(value);
  };
  const addressValue = value => {
    if (!value) {
      setValidAddress('Enter the Address');
    } else if (value.length <= 20) {
      setValidAddress('Address length 20');
    } else {
      setValidAddress('');
      return;
    }
    setAddress(value);
  };

  const emialValue = value => {
    if (!value) {
      setValidEmail('Enter the Email');
    } else if (!value.match(/\S+@\S+\.\S+/)) {
      setValidEmail('Enter the valid Email');
    } else {
      setValidEmail('');
    }
    setEmail(value);
  };
  const numberValue = value => {
    if (!value) {
      setValidPhone('enter the Phone number');
    } else if (value.length <= 11) {
      setValidPhone('enter the valid Phone Number');
    } else {
      setValidPhone('');
      return;
    }
    setPhoneNumber(value);
  };
  const passwordValue = value => {
    if (!value) {
      setValidPassword('Paasword is required');
    } else if (value.length < 5) {
      setValidPassword('minimum 5 charecters');
    } else if (value.length > 16) {
      setValidPassword('maximum 16 charecters');
      return;
    } else {
      setValidPassword('');
    }
    setPassword(value);
  };

  const Validation = () => {
    let validate = true;
    if (!name) {
      setValidName('Enter the name');
      validate = false;
    }
    if (!postCode) {
      setValidCode('Enter the Post Code');
      validate = false;
    }
    if (!address) {
      setValidAddress('Enter the Address');
      validate = false;
    }
    if (!email) {
      setValidEmail('Enter the Email');
      validate = false;
    }
    if (!phoneNumber) {
      setValidPhone('Enter the Phone Number');
      validate = false;
    }
    if (!passwords) {
      setValidPassword('password is required');
      validate = false;
    }
    if (validate) {
      // if (Main === 'doorman') {
      //   navigation.navigate('steps');
      // }
      // if (Main == 'venue') {
      //   navigation.navigate('venue');
      // }
      navigation.navigate('steps');
      setName('');
      setPostCode('');
      setAddress('');
      setEmail('');
      setPhoneNumber('');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo navigation={() => navigation.goBack()} />
        <TopBox lable="Create an Account" />
        <View style={styles.InputGroup}>
          <InputField
            lable="Name"
            placeholder="Name"
            value={name}
            onChangeText={nameValue}
            error={validName}
          />
          <InputField
            lable="Postcode"
            placeholder="Postcode"
            Number
            value={postCode}
            onChangeText={postValue}
            error={validCode}
          />
          <InputField
            lable="Address"
            placeholder="Postcode"
            value={address}
            onChangeText={addressValue}
            error={validAddress}
          />
          <InputField
            lable="Email"
            placeholder="Email"
            value={email}
            onChangeText={emialValue}
            error={validEmail}
          />

          <InputField
            lable="Password"
            placeholder="Password"
            value={passwords}
            onChangeText={passwordValue}
            error={validPassword}
            password={passwordVisible}
            lockIconName={passwordVisible ? 'eye' : 'eye-off'}
            shownPassword={() => setPassWordVisible(!passwordVisible)}
          />
          <InputField
            lable="Phone Number"
            placeholder="+44"
            value={phoneNumber}
            Number
            onChangeText={numberValue}
            error={validPhone}
          />

          <Button onPress={Validation} lable="Next" />
        </View>
        <Footer navigation={() => navigation.navigate('login')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  InputGroup: {
    marginVertical: 20,
    marginHorizontal: 30,
  },
});
