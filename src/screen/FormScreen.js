import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopLogo from '../components/TopLogo';
import TopBox from '../components/TopBox';
import Footer from '../components/Footer';
import InputField from '../components/InputField';
import Button from '../components/Button';

const FormScreen = () => {
  // const[]
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo />
        <TopBox lable="Create an Account" />
        <View style={styles.InputGroup}>
          <InputField />
          <InputField />
          <InputField />
          <InputField />
          <Button />
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  InputGroup: {
    marginVertical: 20,
  },
});
