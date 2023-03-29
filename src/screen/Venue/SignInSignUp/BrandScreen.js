import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import TopLogo from '../../../components/Common/TopLogo';
import TopBox from '../../../components/Common/TopBox';
import Button from '../../../components/Common/Button';
import Footer from '../../../components/Common/Footer';
import VenueSvg from '../../../assets/Images/Svg/VenuePic.svg';

const BrandScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo navigation={() => navigation.goBack()} />
        <TopBox lable={'Brand'} />
        <View style={styles.brandContainer}>
          <TouchableOpacity style={styles.uploadTack} activeOpacity={0.6}>
            <VenueSvg style={styles.venueSvg} />
            <Text style={styles.uploadTxt}>Upload a logo or Venue photo</Text>
          </TouchableOpacity>
          <Button
            lable={'Finish'}
            onPress={() => navigation.navigate('VenueBottom')}
          />
        </View>
        <Footer navigation={() => navigation.navigate('login')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BrandScreen;

const styles = StyleSheet.create({
  brandContainer: {
    marginVertical: 50,
    marginHorizontal: 30,
  },
  uploadTack: {
    height: 423,
    borderWidth: 2,
    borderColor: '#A9A0FF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  venueSvg: {
    width: 158,
    height: 158,
    marginBottom: 15,
  },
  uploadTxt: {
    fontFamily: 'Magenos-Bold',
    fontSize: 31,
    color: '#A9A0FF',
    textAlign: 'center',
    width: 271,
  },
});
