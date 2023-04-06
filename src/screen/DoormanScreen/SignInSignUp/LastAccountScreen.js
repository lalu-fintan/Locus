import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopLogo from '../../../components/Common/TopLogo';
import TopBox from '../../../components/Common/TopBox';
import SVGLogo from '../../../assets/Images/Svg/Clapping.svg';
import Button from '../../../components/Common/Button';

const LastAccountScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('dashboard');
  }, 1000);
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo navigation={() => navigation.goBack()} />
        <TopBox lable={'Create an Account'} />
        <View style={styles.Body}>
          <SVGLogo width={144.47} height={160.45} />
          <Text style={styles.mainTitle}>Thank you!</Text>
          <Text style={styles.subTitle}>
            We’ll give you a quick call to check your documents
          </Text>
          <Text style={styles.Description}>
            We’ll organize a 15 min video call with you {''} to make sure you
            are who you say you are!
          </Text>
          {/* <Button lable={''}/> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LastAccountScreen;

const styles = StyleSheet.create({
  Body: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 50,
  },
  mainTitle: {
    color: '#A9A0FF',
    fontFamily: 'Magenos-Bold',
    fontSize: 31,
    marginTop: 32,
  },
  subTitle: {
    color: '#000',
    fontFamily: 'Magenos-Bold',
    fontSize: 25,
    marginTop: 14,
    textAlign: 'center',
  },
  Description: {
    fontSize: 16,
    fontFamily: 'Magenos-Medium',
    color: '#8B8A8A',
    textAlign: 'center',
    marginTop: 31,
  },
});
