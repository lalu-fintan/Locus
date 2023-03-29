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
import Profile from '../../../assets/Images/Jpeg/DefaultProfile.jpeg';
import Location from 'react-native-vector-icons/Ionicons';
import LogOut from 'react-native-vector-icons/MaterialCommunityIcons';
import Star from 'react-native-vector-icons/Ionicons';
import TopLogo from '../../../components/Common/TopLogo';
import TopBox from '../../../components/Common/TopBox';
import ToggleButton from '../../../components/Common/ToggleButton';

const SettingsScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo />
        <TopBox lable={'Settings'} />
        <View style={styles.settingsContainer}>
          <View style={styles.profileTop}>
            <Image source={Profile} style={styles.profile} />
            <View style={{justifyContent: 'center', marginLeft: 30}}>
              <TouchableOpacity style={styles.editbtn}>
                <Text style={styles.editbtnTxt}>Edit profile</Text>
              </TouchableOpacity>
              <Text style={styles.profileName}>John Doe</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.topIcon}>
                  <Star name="md-star" size={14} color={'#A9A0FF'} />
                  <Text
                    style={[styles.iconTxt, {color: '#A9A0FF', marginTop: 3}]}>
                    {' '}
                    4.9/5
                  </Text>
                </View>
                <View style={[styles.topIcon, {marginLeft: 10, marginTop: 3}]}>
                  <Location
                    name="ios-location-sharp"
                    size={14}
                    color={'#8B8A8A'}
                  />
                  <Text style={styles.iconTxt}> M25 3AY</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.Description}>
            <Text style={styles.descTitle}>About</Text>
            <View style={styles.descContentContainer}>
              <Text style={styles.descContent}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod. Lorem ipsum dolor sit amet.
                <TouchableOpacity style={[styles.editbtn, {paddingTop: 1}]}>
                  <Text style={[styles.editbtnTxt, {paddingLeft: 5}]}>
                    Edit
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
          <View style={styles.avilabilityContent}>
            <Text style={styles.avilabilityTitle}>Availability</Text>
            <ToggleButton lable={'Available for new jobs'} />
          </View>

          <View style={styles.notificationContainer}>
            <Text style={[styles.avilabilityTitle, {marginTop: 20}]}>
              Notifications
            </Text>
            <View>
              <ToggleButton lable={'Notify me about new jobs'} />
              <ToggleButton lable={'Notify me about confirmed jobs'} />
            </View>
          </View>

          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <LogOut name="logout" size={26} color={'#A9A0FF'} />
            <Text style={styles.logout}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  settingsContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  profile: {
    width: 115,
    height: 115,
    borderRadius: 60,
  },
  profileTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editbtnTxt: {
    textDecorationLine: 'underline',
    fontFamily: 'Magenos-Medium',
    fontSize: 14,
    color: '#A9A0FF',
  },
  profileName: {
    fontFamily: 'Magenos-Bold',
    fontSize: 31,
    color: '#000',
    marginTop: 5,
  },
  topIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTxt: {
    fontFamily: 'Magenos-Medium',
    fontSize: 13,
  },
  Description: {
    marginTop: 28,
  },
  descContentContainer: {
    flexDirection: 'row',

    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingBottom: 20,
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
  },
  avilabilityContent: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingBottom: 5,
  },
  avilabilityTitle: {
    fontFamily: 'Magenos-Bold',
    fontSize: 19,
    color: '#000',
    marginBottom: 17,
  },
  notificationContainer: {
    marginTop: 0,
  },
  logout: {
    fontFamily: 'Magenos-Medium',
    fontSize: 19,
    color: '#707070',
    marginLeft: 15,
  },
});
