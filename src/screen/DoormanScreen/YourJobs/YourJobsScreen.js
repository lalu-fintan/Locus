import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Profile from '../../../assets/Images/Jpeg/DefaultProfile.jpeg';
import TopLogo from '../../../components/Common/TopLogo';
import Button from '../../../components/Common/Button';
import SVGLogo from '../../../assets/Images/Svg/Clapping.svg';

const YourJobsScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo
          profile={Profile}
          onPress={() => navigation.navigate('Settings')}
        />
        <View
          style={{
            marginTop: 80,
          }}>
          <View style={styles.Body}>
            <SVGLogo
              width={144.47}
              height={160.45}
              style={{alignSelf: 'center', marginBottom: 15}}
            />
            <Text style={styles.mainTitle}>You’ve applied for this job</Text>
            <Text style={styles.subTitle}>
              Now leave it with us, we’ll send you an email once it’s {''} {''}
              confirmed
            </Text>
          </View>
          <View style={{marginHorizontal: 30}}>
            <Button
              lable={'Apply for more jobs'}
              onPress={() => navigation.navigate('jobList')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default YourJobsScreen;

const styles = StyleSheet.create({
  Body: {
    marginHorizontal: 30,
  },
  mainTitle: {
    color: '#A9A0FF',
    fontFamily: 'Magenos-Bold',
    fontSize: 29,
    marginTop: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  subTitle: {
    color: '#000',
    fontFamily: 'Magenos-Bold',
    fontSize: 24,
    marginTop: 14,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
});
