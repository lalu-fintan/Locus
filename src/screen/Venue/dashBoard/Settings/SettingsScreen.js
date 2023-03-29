import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import TopLogo from '../../../../components/Common/TopLogo';
import TopBox from '../../../../components/Common/TopBox';
import Location from 'react-native-vector-icons/Ionicons';
import LogOut from 'react-native-vector-icons/MaterialCommunityIcons';
import ToggleButton from '../../../../components/Common/ToggleButton';
import Profile from '../../../../assets/Images/Jpeg/venue-logo.jpg';

const SettingsScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo />
        <TopBox lable={'Settings'} />
        <View style={styles.settingsContainer}>
          <View style={styles.ProfileTop}>
            <Image source={Profile} style={styles.profile} />
            <View>
              <Text style={styles.title}>The Venue</Text>
              <View style={styles.location}>
                <Location
                  name="ios-location-sharp"
                  size={16}
                  color={'#8B8A8A'}
                />
                <Text style={styles.locationTxt}>
                  The Venue, Manchester M1 3AY
                </Text>
              </View>
              <TouchableOpacity style={styles.edit}>
                <Text style={styles.editTxt}>Edit profile</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.descContainer}>
            <Text style={styles.descTitle}>About</Text>

            <Text style={styles.descContent}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod. Lorem ipsum dolor sit amet, consetetur. Lorem ipsum
              dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod. Lorem ipsum dolor sit amet.{' '}
              <TouchableOpacity style={styles.edit}>
                <Text style={[styles.editTxt]}>Edit</Text>
              </TouchableOpacity>
            </Text>
          </View>
          <View style={styles.notificationContainer}>
            <Text
              style={[
                styles.avilabilityTitle,
                {marginTop: 28, marginBottom: 20},
              ]}>
              Notifications
            </Text>
            <ToggleButton lable={'Notify me about new jobs'} />
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <LogOut name="logout" size={26} color={'#A9A0FF'} />
              <Text style={styles.logout}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  settingsContainer: {
    marginVertical: 28,
    marginHorizontal: 33,
  },
  profile: {
    width: 115,
    height: 115,
    borderRadius: 60,
  },
  ProfileTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginTop: 5,
  },
  title: {
    fontFamily: 'Magenos-Bold',
    fontSize: 31,
    color: '#000',
    marginTop: 10,
    marginBottom: 4,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationTxt: {
    fontFamily: 'Magenos-Medium',
    fontSize: 13,
    color: '#8B8A8A',
    marginLeft: 4,
  },
  edit: {
    marginTop: 8,
    marginLeft: 5,
  },
  editTxt: {
    color: '#A9A0FF',
    fontFamily: 'Magenos-Medium',

    fontSize: 14,
    textDecorationLine: 'underline',
  },

  descContainer: {
    marginTop: 20,
  },
  descTitle: {
    fontFamily: 'Magenos-Bold',
    fontSize: 19,
    color: '#000',
    marginBottom: 8,
  },
  descContent: {
    fontFamily: 'Magenos-Medium',
    fontSize: 14,
    color: '#000',
    textAlign: 'justify',
    // lineHeight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingBottom: 20,
  },
  avilabilityTitle: {
    fontFamily: 'Magenos-Bold',
    fontSize: 19,
    color: '#000',
    marginBottom: 17,
  },
  logout: {
    fontFamily: 'Magenos-Medium',
    fontSize: 19,
    color: '#707070',
    marginLeft: 15,
  },
});
