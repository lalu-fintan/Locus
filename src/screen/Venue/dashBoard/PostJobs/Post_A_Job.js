import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import TopLogo from '../../../../components/Common/TopLogo';
import Profile from '../../../../assets/Images/Jpeg/venue-logo.jpg';
import TopBox from '../../../../components/Common/TopBox';
import InputField from '../../../../components/Common/InputField';
import TimeIcon from 'react-native-vector-icons/Ionicons';
import Button from '../../../../components/Common/Button';

const Post_A_Job = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo
          profile={Profile}
          navigation={() => navigation.goBack()}
          onPress={() => navigation.navigate('Venue_Settings')}
        />
        <TopBox lable={'Post a job'} />
        <View style={styles.mainContainer}>
          <InputField lable={'Event Name'} placeholder={'Event Name'} />
          <InputField
            lable={'Event Date'}
            placeholder={'Select Date'}
            icon={'calendar-alt'}
          />
          <View style={styles.staffNeed}>
            <Text
              style={{
                fontFamily: 'Magenos-Medium',
                fontSize: 17,
                color: '#000',
              }}>
              Staff Needed:
            </Text>
            <View style={styles.staff}>
              <TextInput
                placeholder="1"
                maxLength={1}
                keyboardType={'number-pad'}
              />
            </View>
          </View>
          <View style={{marginBottom: 40}}>
            <Text
              style={{
                fontFamily: 'Magenos-Medium',
                fontSize: 17,
                color: '#000',
                marginBottom: 8,
              }}>
              Time
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.time}>
                <TimeIcon name="time" size={18} color={'#CCCCCC'} />
                <TextInput
                  placeholder="From :"
                  style={{fontFamily: 'Magenos-Medium', paddingTop: 14}}
                />
              </View>
              <View style={styles.time}>
                <TimeIcon name="time" size={18} color={'#CCCCCC'} />
                <TextInput
                  placeholder="To :"
                  style={{fontFamily: 'Magenos-Medium', paddingTop: 14}}
                />
              </View>
            </View>
          </View>
          <InputField
            lable={'Job Description'}
            placeholder={'Job Description'}
          />
          <View style={{marginTop: 35}}>
            <Button lable={'Next'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Post_A_Job;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 42,
    marginHorizontal: 42,
  },
  staffNeed: {
    marginTop: 38,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  staff: {
    borderWidth: 1,
    height: 44,
    width: 164,
    borderColor: '#C9C9C9',
    borderRadius: 5,
    alignItems: 'center',
  },
  time: {
    borderWidth: 1,
    height: 44,
    width: 140,
    borderColor: '#C9C9C9',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 18,
  },
});
