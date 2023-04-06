import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopLogo from '../../../components/Common/TopLogo';
import TopBox from '../../../components/Common/TopBox';
import InputField from '../../../components/Common/InputField';
import Button from '../../../components/Common/Button';
import Footer from '../../../components/Common/Footer';

const TheVenue = ({navigation, route}) => {
  const {callBack} = route.params;
  console.log(callBack);
  function nextHandler() {
    navigation.goBack();
    callBack();
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo navigation={() => navigation.goBack()} />
        <TopBox lable={'The Venue'} />
        <View style={styles.inputContainer}>
          <InputField lable={'Venue Name'} placeholder={'Name'} />
          <InputField lable={'Registration Number'} placeholder={'Number'} />
          <InputField lable={'Email'} placeholder={'Email'} />
          <InputField lable={'Phone Number'} placeholder={'+44'} />
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
