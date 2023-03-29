import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopLogo from '../../../components/Common/TopLogo';
import TopBox from '../../../components/Common/TopBox';
import InputField from '../../../components/Common/InputField';
import Button from '../../../components/Common/Button';
import Footer from '../../../components/Common/Footer';

const AddressScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo navigation={() => navigation.goBack()} />
        <TopBox lable={'Address'} />
        <View style={styles.inputContainer}>
          <InputField lable={'Postcode'} placeholder={'Postcode'} />
          <InputField lable={'Address'} placeholder={'Address'} />
          <InputField lable={'Address line 2'} placeholder={'Address'} />
          <InputField lable={'Town or City'} placeholder={'Address'} />
          <Button
            lable={'Next'}
            onPress={() => navigation.navigate('CreateAccount')}
          />
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
