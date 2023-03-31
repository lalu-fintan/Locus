import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopLogo from '../../../../components/Common/TopLogo';
import Profile from '../../../../assets/Images/Jpeg/venue-logo.jpg';
import TopBox from '../../../../components/Common/TopBox';
import ConfromjobBox from '../../../../components/Venue/ConfromjobBox';
import ConformJobListData from '../../../../model/Venue/ConformJobListData';

const ConfirmJobsScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo
          profile={Profile}
          navigation={() => navigation.goBack()}
          onPress={() => navigation.navigate('Venue_Settings')}
        />
        <TopBox lable={'Confirmed for this job'} />
        <View style={{marginTop: 30}}>
          {ConformJobListData.map(item => {
            return (
              <View style={styles.jobContainer} key={item.id}>
                <ConfromjobBox
                  profileImg={item.image}
                  name={item.name}
                  distance={item.distance}
                  latitude={item.latitude}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConfirmJobsScreen;

const styles = StyleSheet.create({
  jobContainer: {
    marginHorizontal: 19,
    marginTop: 13,
  },
});
