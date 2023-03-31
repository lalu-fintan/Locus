import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import TopLogo from '../../../../components/Common/TopLogo';
import Profile from '../../../../assets/Images/Jpeg/venue-logo.jpg';
import TopBox from '../../../../components/Common/TopBox';
import ProfileImg from '../../../../assets/Images/Jpeg/DefaultProfile.jpeg';
import PaymentDetails from '../../../../components/Venue/PaymentDetails';
import {Rating, AirbnbRating} from 'react-native-ratings';
import Button from '../../../../components/Common/Button';

const LeaveFeedbackScreen = ({navigation}) => {
  const [onRating, setOnRating] = useState(0);

  const ratingValue = value => {
    setOnRating(value);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo
          profile={Profile}
          navigation={() => navigation.goBack()}
          onPress={() => navigation.navigate('Venue_Settings')}
        />
        <TopBox lable={'LEAVE A FEEDBACK'} />
        <View style={styles.container}>
          <View style={styles.profileTop}>
            <Image source={ProfileImg} style={styles.ProfileImg} />
            <View style={{marginLeft: 31}}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.status}>Completed the job!</Text>
            </View>
          </View>
          <View>
            <PaymentDetails
              title={'Job Duration:'}
              value={'2 hr'}
              color={'#000'}
              require
            />
            <PaymentDetails
              title={'Checked in: 17:54'}
              value={'Checked out: 19:02'}
              fontSize={16}
              color={'#8B8A8A'}
            />
          </View>
          <View style={styles.ratingTitle}>
            <Text
              style={{
                fontFamily: 'Magenos-Bold',
                fontSize: 19,
                color: '#AA9DFF',
              }}>
              Rate John Doe
            </Text>
            <Text
              style={{
                fontFamily: 'Magenos-Bold',
                fontSize: 17,
                color: '#000',
              }}>
              {onRating}/5
            </Text>
          </View>
          <View style={{marginBottom: 50}}>
            <AirbnbRating
              count={5}
              showRating={false}
              defaultRating={0}
              size={40}
              onFinishRating={ratingValue}
              starContainerStyle={{
                width: '100%',
                justifyContent: 'space-between',
              }}
            />
          </View>
          <Button
            lable={'Finish'}
            onPress={() => {
              navigation.navigate('venue_post');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LeaveFeedbackScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginHorizontal: 39,
  },
  ProfileImg: {
    width: 77,
    height: 77,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#C3C3C3',
  },
  profileTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 54,
  },
  name: {
    fontFamily: 'Magenos-Bold',
    fontSize: 19,
    color: '#000',
  },
  status: {
    fontFamily: 'Magenos-Bold',
    fontSize: 19,
    color: '#AA9DFF',
  },
  ratingTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 72,
    marginBottom: 15,
  },
});
