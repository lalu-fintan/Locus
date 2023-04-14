import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import TopLogo from '../../../components/Common/TopLogo';
import TopBox from '../../../components/Common/TopBox';
import InputField from '../../../components/Common/InputField';
import Button from '../../../components/Common/Button';
import Footer from '../../../components/Common/Footer';

const AddressScreen = ({navigation, route}) => {
  const {callBack} = route.params;

  function nextHandler() {
    let validate = true;
    if (!postCodeValue) {
      setValidPostCode('enter the post code ');
      validate = false;
    }
    if (!addressValue) {
      setValidAddressLine('Enter the Address');
      validate = false;
    }
    if (!addressValue2) {
      setValidAddressLine2('Enter the Address');
      validate = false;
    }
    if (!town) {
      setValidTown('enter the town or city');
      validate = false;
    }
    if (validate) {
      navigation.goBack();
      callBack();
    }
  }

  const [postCodeValue, setPostCodeValue] = useState('');
  const [addressValue, setAddressValue] = useState('');
  const [addressValue2, setAddressValue2] = useState('');
  const [town, setTown] = useState('');
  const [validPostCode, setValidPostCode] = useState('');
  const [validAddressLine, setValidAddressLine] = useState('');
  const [validAddressLine2, setValidAddressLine2] = useState('');
  const [validTown, setValidTown] = useState('');

  const PostCodeValidation = value => {
    if (!value) {
      setValidPostCode('enter the post code ');
    } else if (value.length < 5) {
      setValidPostCode('post code minimum 5 charecters ');
    } else {
      setValidPostCode('');
    }
    setPostCodeValue(value);
  };

  const addressValidation = value => {
    if (!value) {
      setValidAddressLine('Enter the Address');
    } else {
      setValidAddressLine('');
      // return;
    }
    setAddressValue(value);
  };
  const addressValidation2 = value => {
    if (!value) {
      setValidAddressLine2('Enter the Address');
    } else {
      setValidAddressLine2('');
      // return;
    }
    setAddressValue2(value);
  };
  const townValidation = value => {
    if (!value) {
      ('Enter the town or city');
    } else if (value.length < 3) {
      setValidTown('Address length minimum 3 charecters');
    } else {
      setValidTown('');
      // return;
    }
    setTown(value);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo navigation={() => navigation.goBack()} />
        <TopBox lable={'Address'} />
        <View style={styles.inputContainer}>
          <InputField
            lable={'Postcode'}
            placeholder={'Postcode'}
            value={postCodeValue}
            onChangeText={PostCodeValidation}
            error={validPostCode}
            Number
          />
          <InputField
            lable={'Address'}
            placeholder={'Address'}
            value={addressValue}
            onChangeText={addressValidation}
            error={validAddressLine}
          />
          <InputField
            lable={'Address line 2'}
            placeholder={'Address'}
            value={addressValue2}
            onChangeText={addressValidation2}
            error={validAddressLine2}
          />
          <InputField
            lable={'Town or City'}
            placeholder={'Address'}
            value={town}
            onChangeText={townValidation}
            error={validTown}
          />
          <Button lable={'Next'} onPress={nextHandler} />
        </View>
        <Footer navigation={() => navigation.navigate('login')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 55,
    marginHorizontal: 20,
  },
});
