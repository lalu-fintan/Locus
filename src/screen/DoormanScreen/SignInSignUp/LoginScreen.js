import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import TopLogo from '../../../components/Common/TopLogo';
import TopBox from '../../../components/Common/TopBox';
import Button from '../../../components/Common/Button';
import InputField from '../../../components/Common/InputField';
import {AuthContext} from '../../../context/AuthContext';

const LoginScreen = ({navigation, route}) => {
  const val = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [passwords, setPassword] = useState('');
  const [validEmail, setValidEmail] = useState('');
  const [validPassword, setValidPassword] = useState('');
  const [passwordVisible, setPassWordVisible] = useState(true);

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

  const loginValidation = () => {
    let validate = true;

    if (!email) {
      setValidEmail('enter the email');
      validate = false;
    }
    if (!passwords) {
      setValidPassword('enter the password');
      validate = false;
    }
    if (validate) {
      navigation.navigate('steps');
      setEmail('');
      setPassword('');
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo />
        <TopBox lable={'Login'} />
        <View style={styles.mainContainer}>
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

          <Button onPress={loginValidation} lable={'Login'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
});
