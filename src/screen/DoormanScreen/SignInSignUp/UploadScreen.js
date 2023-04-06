import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopLogo from '../../../components/Common/TopLogo';
import TopBox from '../../../components/Common/TopBox';
import Footer from '../../../components/Common/Footer';
import Upload from '../../../assets/Images/Svg/Upload.svg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Button from '../../../components/Common/Button';
import InputField from '../../../components/Common/InputField';

const UploadScreen = ({navigation, route}) => {
  const {callBack} = route.params;
  console.log(callBack);
  function nextHandler() {
    navigation.goBack();
    callBack();
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo navigation={() => navigation.goBack()} />
        <TopBox lable="Right to Work" />
        <View style={styles.uploadContainer}>
          <Upload width={158} height={158} style={styles.uploadLogo} />
          <Text style={styles.topTitle}>
            Upload your right to work document
          </Text>
          <View style={styles.bottomContent}>
            <Text style={styles.toptxt}>Accepted documents:</Text>
            <View style={styles.points}>
              <FontAwesome name="circle" size={10} color="#A9A0FF" />
              <Text style={styles.pointTxt}>UK Passport</Text>
            </View>
            <View style={styles.points}>
              <FontAwesome name="circle" size={10} color="#A9A0FF" />
              <Text style={styles.pointTxt}>
                UK Birth Certificate & National Insurance Number
              </Text>
            </View>
            <View style={styles.points}>
              <FontAwesome name="circle" size={10} color="#A9A0FF" />
              <Text style={styles.pointTxt}>Right to work share code</Text>
            </View>
          </View>

          <View style={styles.DocumentContainer}>
            <View style={styles.txtContainer}>
              <Text style={styles.txt1}>
                We can no longer accept {''}
                <Text style={styles.txt2}>biometric residence cards</Text>
                {''} or {''}
                <Text style={styles.txt2}>biometric residence permits</Text>
              </Text>
            </View>
          </View>
          <Button lable="Upload a Valid document" icon="upload" />
          <InputField
            lable="SIA Badge Number"
            placeholder="SIA Number"
            required
          />
          <Button lable="Next" onPress={nextHandler} />
        </View>

        <Footer navigation={() => navigation.navigate('login')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  uploadContainer: {
    marginVertical: 20,
    paddingHorizontal: 30,
  },
  uploadLogo: {
    alignSelf: 'center',
  },

  topTitle: {
    fontFamily: 'Magenos-Bold',
    fontSize: 26,
    color: '#000',
    marginTop: 20,
    width: 250,
  },
  bottomContent: {
    marginVertical: 10,
  },
  toptxt: {
    color: '#000',
    fontFamily: 'Magenos-Medium',
    fontSize: 17,
  },
  points: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointTxt: {
    paddingLeft: 8,
    color: '#8B8A8A',
    fontFamily: 'Magenos-Medium',
    fontSize: 14,
  },
  DocumentContainer: {
    borderWidth: 1,
    borderColor: '#C9C9C9',
    marginVertical: 15,
    height: 100,
    borderRadius: 5,
    flexDirection: 'row',
  },
  txtContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 20,
    paddingHorizontal: 50,
  },
  txt1: {
    textAlign: 'center',
    fontFamily: 'Magenos-Medium',
    marginLeft: 5,
  },
  txt2: {
    textAlign: 'center',
    fontFamily: 'Magenos-Medium',
    color: '#A9A0FF',
  },
});
