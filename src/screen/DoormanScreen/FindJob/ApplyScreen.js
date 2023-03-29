import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import TopLogo from '../../../components/Common/TopLogo';
import Profile from '../../../assets/Images/Jpeg/DefaultProfile.jpeg';
import CalenderIcon from 'react-native-vector-icons/FontAwesome5';
import TimeIcon from 'react-native-vector-icons/Ionicons';
import Image1 from '../../../assets/Images/pubImages/03.jpeg';
import PoundIcon from 'react-native-vector-icons/FontAwesome5';
import Coin from '../../../assets/Images/Png/coin.png';
import Location from 'react-native-vector-icons/Ionicons';
import QuestionMark from '../../../assets/Images/Svg/QuestionMark.svg';

const ApplyScreen = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo
          profile={Profile}
          navigation={() => navigation.goBack()}
          onPress={() => navigation.navigate('Settings')}
        />
        <ImageBackground style={styles.imageContainer}>
          <Image source={route.params?.image} style={styles.image} />
        </ImageBackground>

        <View>
          <View style={styles.bodyContainer}>
            <Text style={styles.title}>{route.params?.title}</Text>
            <Text style={styles.posted}>{route.params?.uploadTime}</Text>
            <View style={styles.subContainer}>
              <View style={styles.timeContainer}>
                <View style={styles.date}>
                  <CalenderIcon
                    name="calendar-alt"
                    size={16}
                    color={'#8B8A8A'}
                  />
                  <Text style={styles.dateTxt}>{route.params?.EventTime}</Text>
                </View>
                <View style={styles.time}>
                  <TimeIcon name="time" size={16} color={'#8B8A8A'} />
                  <Text style={styles.timeTxt}>
                    From {route.params?.timeTo}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Location
                  name="ios-location-sharp"
                  size={16}
                  color={'#8B8A8A'}
                />
                <Text style={styles.location}>{route.params?.location}</Text>
                <Text style={styles.farKM}> ({route.params?.distance})</Text>
              </View>
            </View>
            <View style={styles.descContainer}>
              <Text style={styles.description}>Job Description</Text>
              <Text style={styles.descContent}>
                {route.params?.description}
              </Text>
            </View>

            <View style={styles.coinContainer}>
              <Image source={Coin} style={styles.coin} />
              <Text style={styles.coinTxt}>
                Pay: {''}
                {/* <PoundIcon name="pound-sign" size={20} color={'#A9A0FF'} />{' '} */}
              </Text>
              <Text style={styles.amount}>{route.params?.amount}</Text>
              <TouchableOpacity style={styles.QuestionMark}>
                <QuestionMark width={10} height={10} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.CheckBtn}
              onPress={() => navigation.navigate('yourjobs')}>
              <Text style={styles.checkBtnTxt}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApplyScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 181,
    backgroundColor: '#000',
  },
  image: {
    width: 211,
    height: 182,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  bodyContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
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
    fontFamily: 'Magenos-Bold',
    fontSize: 17,
    color: '#A9A0FF',
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
  location: {
    fontFamily: 'Magenos-Medium',
    fontSize: 13,
    color: '#8B8A8A',
    paddingRight: 1,
    paddingLeft: 5,
  },

  farKM: {
    fontFamily: 'Magenos-Medium',
    fontSize: 13,
    color: '#A9A0FF',
  },
});
