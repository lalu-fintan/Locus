import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import TopLogo from '../components/TopLogo';
import TopBox from '../components/TopBox';
import Doorman from '../assets/Images/Svg/Doorman.svg';
import Venue from '../assets/Images/Svg/Venue.svg';
import Footer from '../components/Footer';

const IntroScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo content />
        <TopBox lable={'Create an Account'} />
        <View style={styles.content}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btnContent}
            onPress={() => navigation.navigate('form')}>
            <Doorman width={158} height={158} />
            <Text style={styles.txt}>Door Supervisor</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btnContent}
            onPress={() => navigation.navigate('form')}>
            <Venue width={158} height={158} />
            <Text style={styles.txt}>Venue</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  btnContent: {
    alignItems: 'center',
    marginBottom: 40,
  },
  txt: {
    fontFamily: 'Magenos-Bold',
    fontSize: 31,
    color: '#000',
    textAlign: 'center',
    paddingTop: 10,
  },
});
