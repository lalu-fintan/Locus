import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Profile from '../../../assets/Images/Jpeg/DefaultProfile.jpeg';
import TopLogo from '../../../components/Common/TopLogo';
import TopBox from '../../../components/Common/TopBox';
import QRCode from 'react-native-qrcode-svg';
import TimeIcon from 'react-native-vector-icons/Ionicons';

const CheckIn_OutScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo
          profile={Profile}
          navigation={() => navigation.goBack()}
          onPress={() => navigation.navigate('Settings')}
        />
        <TopBox lable={'CHECK-IN/OUT'} />
        <View style={styles.qrContainer}>
          <Text style={styles.DescTitle}>
            You’ll need to check in and out at the venue using this code.
          </Text>
          <QRCode
            value="Just some string value"
            getRef={c => (this.svg = c)}
            size={250}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.timeContainer}>
            <TimeIcon name="time" size={14} color={'#000'} />
            <Text style={styles.timeTxt}> Job time: 19:00 to 21:00</Text>
          </View>
          <View style={styles.Inout}>
            <View style={styles.InTxt}>
              <Text style={styles.head}>In: </Text>
              <Text
                style={{
                  fontFamily: 'Magenos-Bold',
                  fontSize: 19,
                  color: '#4FC762',
                }}>
                19:01
              </Text>
            </View>
            <View style={styles.OutTxt}>
              <Text style={styles.head}>Out: </Text>
              <Text
                style={{
                  fontFamily: 'Magenos-Bold',
                  fontSize: 19,
                  color: '#A2A2A2',
                }}>
                Pending
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckIn_OutScreen;

const styles = StyleSheet.create({
  qrContainer: {
    marginHorizontal: 30,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  DescTitle: {
    fontFamily: 'Magenos-Bold',
    fontSize: 19,
    color: '#000',
    textAlign: 'center',
    marginBottom: 65,
  },
  bottomContainer: {
    backgroundColor: '#C9C9C9',
    height: 100,
    justifyContent: 'center',
    paddingHorizontal: 80,
    marginTop: 50,
  },
  timeTxt: {
    fontFamily: 'Magenos-Bold',
    fontSize: 14,
    color: '#000',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Inout: {
    flexDirection: 'row',
    marginTop: 8,
  },
  InTxt: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  OutTxt: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 45,
  },

  head: {
    fontFamily: 'Magenos-Bold',
    fontSize: 19,
    color: '#000',
  },
});
