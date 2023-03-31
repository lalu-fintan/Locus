import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import {QRCodeScanner} from 'react-native-qrcode-scanner';
// import {RNCamera} from 'react-native-camera';
import Profile from '../../../../assets/Images/Jpeg/venue-logo.jpg';
import TopLogo from '../../../../components/Common/TopLogo';
import TopBox from '../../../../components/Common/TopBox';

const CheckIn_CheckOutScreen = ({navigation}) => {
  const scanBorder = () => {
    return (
      <View style={{height: '70%', width: '70%'}}>
        <View styles={styles.bordertopleft}></View>
        <View styles={[styles.bordertopright, {right: 0}]}></View>
        <View styles={[styles.borderbottomleft, {bottom: 0, left: 0}]}></View>
        <View styles={[styles.borderbottomright, {bottom: 0, right: 0}]}></View>
      </View>
    );
  };

  const onSuccess = () => {
    // navigation.navigate('YourJobsList');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <TopLogo
        profile={Profile}
        navigation={() => navigation.goBack()}
        onPress={() => navigation.navigate('Venue_Settings')}
      />
      <TopBox lable={'CHECK-IN/OUT'} />
      {/* <QRCodeScanner
        onRead={onSuccess}
        reacitve={true}
        flashMode={RNCamera.Constants.FlashMode.torch}
        customMarker={scanBorder}
        showMarker={true}
      /> */}
    </SafeAreaView>
  );
};

export default CheckIn_CheckOutScreen;

const styles = StyleSheet.create({
  bordertopleft: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderTopWidth: 10,
    borderLeftWidth: 10,
    borderColor: '#fff',
  },
  bordertopright: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderTopWidth: 10,
    borderRightWidth: 10,
    borderColor: '#fff',
  },
  borderbottomleft: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderBottomWidth: 10,
    borderLeftWidth: 10,
    borderColor: '#fff',
  },
  borderbottomright: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderBottomWidth: 10,
    borderRightWidth: 10,
    borderColor: '#fff',
  },
});
