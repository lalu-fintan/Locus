import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import TopLogo from '../../../components/Common/TopLogo';
import TopBox from '../../../components/Common/TopBox';
import Footer from '../../../components/Common/Footer';
import StepsBox from '../../../components/Common/StepsBox';

const StepsScreen = ({navigation}) => {
  const [current, setCurrent] = useState(false);
  const [finish, setFinish] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo navigation={() => navigation.goBack()} />
        <TopBox lable="Create an Account" />
        <View style={styles.boxContainer}>
          <StepsBox
            Steps="Step1"
            title="Right to work"
            navigation={() => {
              navigation.navigate('upload');
              setCurrent(true);
            }}
          />
          <StepsBox
            Steps="Step2"
            title="Get paid"
            navigation={() => {
              navigation.navigate('paid');
              setCurrent(true);
            }}
          />
          <StepsBox
            Steps="Step3"
            title="Background checks"
            navigation={() => {
              navigation.navigate('background');
              setCurrent(true);
            }}
          />
        </View>
        <Footer navigation={() => navigation.navigate('login')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default StepsScreen;

const styles = StyleSheet.create({
  boxContainer: {
    marginVertical: 50,
  },
});
