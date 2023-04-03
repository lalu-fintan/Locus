import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopLogo from '../../../components/Common/TopLogo';
import TopBox from '../../../components/Common/TopBox';
import StepsBox from '../../../components/Common/StepsBox';
import Footer from '../../../components/Common/Footer';

const Venue_StepsScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo navigation={() => navigation.goBack()} />
        <TopBox lable={'Create an Account'} />
        <View style={styles.boxContainer}>
          <StepsBox
            Steps="Step1"
            title="The Venue"
            navigation={() => {
              navigation.navigate('TheVenue');
            }}
          />
          <StepsBox
            Steps="Step2"
            title="Address"
            navigation={() => {
              navigation.navigate('Address');
            }}
          />
          <StepsBox
            Steps="Step3"
            title="Brand"
            navigation={() => {
              navigation.navigate('Brand');
            }}
          />
        </View>
        <Footer navigation={() => navigation.navigate('login')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Venue_StepsScreen;

const styles = StyleSheet.create({
  boxContainer: {
    marginVertical: 70,
  },
});
