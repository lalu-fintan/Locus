import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Profile from '../../../../assets/Images/Jpeg/venue-logo.jpg';
import TopLogo from '../../../../components/Common/TopLogo';
import Svg from '../../../../assets/Images/Svg/Search_Sign.svg';
import Button from '../../../../components/Common/Button';

const All_SetScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo
          profile={Profile}
          navigation={() => navigation.goBack()}
          onPress={() => navigation.navigate('Venue_Settings')}
        />
        <View style={styles.mainContainer}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Svg style={styles.svglogo} />
            <Text style={styles.maintxt}>All set!</Text>
            <Text style={styles.subtxt}>
              Let’s find a door supervisor, post a job now
            </Text>
          </View>
          <Button
            lable={'Post a job'}
            onPress={() => navigation.navigate('venuePostjobs')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default All_SetScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 43,
    justifyContent: 'center',
    marginTop: 130,
  },
  svglogo: {
    width: 158,
    height: 158,
  },
  maintxt: {
    fontFamily: 'Magenos-Bold',
    fontSize: 31,
    color: '#A9A0FF',
    marginTop: 30,
  },
  subtxt: {
    fontFamily: 'Magenos-Bold',
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 80,
  },
});
