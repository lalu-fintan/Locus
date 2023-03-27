import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopLogo from '../../../components/Common/TopLogo';
import TopBox from '../../../components/Common/TopBox';
import Button from '../../../components/Common/Button';
import InputField from '../../../components/Common/InputField';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo />
        <TopBox lable={'Login'} />
        <View style={styles.mainContainer}>
          <InputField lable="Email" placeholder="Email" />
          <InputField lable="password" placeholder="Password" />
          <Button
            onPress={() => navigation.navigate('intro')}
            lable={'Login'}
          />
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
