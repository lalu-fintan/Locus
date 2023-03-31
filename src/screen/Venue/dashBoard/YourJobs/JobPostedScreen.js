import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import TopLogo from '../../../../components/Common/TopLogo';
import Profile from '../../../../assets/Images/Jpeg/venue-logo.jpg';
import JobPosted from '../../../../components/Venue/JobPosted';
import Calender from 'react-native-vector-icons/FontAwesome5';
import TimeIcon from 'react-native-vector-icons/Ionicons';
import Location from 'react-native-vector-icons/Ionicons';

const JobPostedScreen = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo
          profile={Profile}
          navigation={() => navigation.goBack()}
          onPress={() => navigation.navigate('Venue_Settings')}
        />
        <JobPosted lable={'Job posted!'} />
        <ImageBackground style={styles.imageContainer}>
          <TouchableOpacity style={styles.editbtn}>
            <Text style={styles.edittxt}>Edit post</Text>
          </TouchableOpacity>
          <Image source={route.params?.profileLogo} style={styles.image} />
        </ImageBackground>
        <View>
          <View style={styles.bodyContainer}>
            <Text style={styles.title}>{route.params?.name}</Text>
            <Text style={styles.posted}>Posted {route.params?.uploadTime}</Text>
            <View style={styles.subContainer}>
              <View style={styles.timeContainer}>
                <View style={styles.date}>
                  <Calender name="calendar-alt" size={18} color={'#8B8A8A'} />
                  <Text style={styles.dateTxt}>{route.params?.exactDate}</Text>
                </View>
                <View style={styles.time}>
                  <TimeIcon name="time" size={18} color={'#8B8A8A'} />
                  <Text style={styles.timeTxt}>{route.params?.time}</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Location
                  name="ios-location-sharp"
                  size={18}
                  color={'#8B8A8A'}
                />
                <Text style={styles.location}>{route.params?.place}</Text>
              </View>
            </View>
            <View style={styles.descContainer}>
              <Text style={styles.description}>Job Description</Text>
              <Text style={styles.descContent}>
                {route.params?.description}
              </Text>
            </View>

            <View style={styles.coinContainer}>
              <Text style={styles.coinTxt}>
                Accepted: {route.params?.accepted}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.CheckBtn}
              onPress={() => navigation.navigate('ConformJob')}>
              <Text style={styles.checkBtnTxt}>View Staff</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.CheckBtn1}
              onPress={() => navigation.navigate('LeaveFeedback')}>
              <TimeIcon name="time" size={18} color={'#fff'} />
              <Text style={styles.checkBtnTxt1}>STAFF CHECK-IN/OUT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default JobPostedScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 181,
    backgroundColor: '#000',
    flexDirection: 'row',
  },
  image: {
    width: 211,
    height: 182,
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: 14,
  },

  editbtn: {
    marginLeft: 27,
    marginTop: 18,
  },
  edittxt: {
    fontFamily: 'Magenos-Bold',
    fontSize: 16,
    color: '#A9A0FF',
    textDecorationLine: 'underline',
  },
  bodyContainer: {
    marginHorizontal: 39,
    marginVertical: 22,
  },
  title: {
    fontSize: 31,
    fontFamily: 'Magenos-Bold',
    color: '#000',
  },
  posted: {
    fontFamily: 'Magenos-Medium',
    fontSize: 8,
    color: '#8B8A8A',
  },
  timeContainer: {
    marginTop: 18,
    flexDirection: 'row',
  },
  subContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingBottom: 24,
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 36,
    marginBottom: 15,
  },
  time: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  dateTxt: {
    paddingLeft: 8,
    fontFamily: 'Magenos-Medium',
    fontSize: 13,
  },
  timeTxt: {
    paddingLeft: 6,
    fontFamily: 'Magenos-Medium',
    fontSize: 13,
    color: '#8B8A8A',
  },
  description: {
    fontFamily: 'Magenos-Bold',
    fontSize: 19,
    color: '#000',
  },
  descContent: {
    fontFamily: 'Magenos-Medium',
    textAlign: 'justify',
    fontSize: 13,
    color: '#8B8A8A',
    paddingTop: 4,
    lineHeight: 17,
  },
  descContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    marginBottom: 24,
    paddingBottom: 38,
    marginTop: 30,
  },
  coin: {
    width: 24,
    height: 30,
    marginRight: 8,
  },
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinTxt: {
    fontFamily: 'Magenos-Medium',
    fontSize: 17,
    color: '#000',
    paddingLeft: 4,
  },
  amount: {
    fontFamily: 'Magenos-Bold',
    fontSize: 29,
    color: '#A9A0FF',
  },
  QuestionMark: {
    alignSelf: 'flex-start',
    marginTop: 2,
    marginLeft: 2,
  },
  CheckBtn: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A9A0FF',
    height: 44,
    borderRadius: 5,
  },

  checkBtnTxt: {
    color: '#fff',
    fontFamily: 'Magenos-Black',
    fontSize: 16,
  },
  CheckBtn1: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    height: 44,
    borderRadius: 5,
    flexDirection: 'row',
  },

  checkBtnTxt1: {
    color: '#fff',
    fontFamily: 'Magenos-Black',
    fontSize: 16,
    marginLeft: 5,
  },
  location: {
    fontFamily: 'Magenos-Medium',
    fontSize: 13,
    color: '#8B8A8A',
    paddingRight: 1,
    paddingLeft: 5,
  },
});
