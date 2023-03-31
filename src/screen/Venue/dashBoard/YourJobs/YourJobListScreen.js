import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TopLogo from '../../../../components/Common/TopLogo';
import Profile from '../../../../assets/Images/Jpeg/venue-logo.jpg';
import TopBox from '../../../../components/Common/TopBox';
import JobList from '../../../../components/Venue/JobList';
import FilterButton from '../../../../components/Common/FilterButton';
import YourJobsLIstData from '../../../../model/Venue/YourJobsLIstData';

const YourJobListScreen = ({navigation}) => {
  const [venueFilter, setVenueFilter] = useState(1);

  const VenueOnSelect = value => {
    setVenueFilter(value);
  };
  return (
    <SafeAreaView>
      <TopLogo
        profile={Profile}
        navigation={() => navigation.goBack()}
        onPress={() => navigation.navigate('Venue_Settings')}
      />
      <TopBox lable={'Your Jobs'} />
      <ScrollView>
        <View style={styles.jobContainer}>
          <FilterButton
            Option1={'Active'}
            Option2={'Completed'}
            selectionMode={1}
            onSelcectSwitch={VenueOnSelect}
          />
        </View>
        <View style={{marginBottom: 150}}>
          {YourJobsLIstData.map(item => {
            return (
              <View style={styles.listContainer} key={item.id}>
                <JobList
                  profileLogo={item.profileLogo}
                  name={item.pubName}
                  uploadTime={item.uploadTime}
                  place={item.place}
                  date={item.date}
                  accepted={item.accepted}
                  status={item.status}
                  onPress={() =>
                    navigation.navigate('jobPosted', {
                      id: item.id,
                      profileLogo: item.profileLogo,
                      name: item.pubName,
                      uploadTime: item.uploadTime,
                      place: item.place,
                      exactDate: item.exactDate,
                      time: item.time,
                      accepted: item.accepted,
                      description: item.description,
                    })
                  }
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default YourJobListScreen;

const styles = StyleSheet.create({
  listContainer: {
    marginHorizontal: 23,
  },
  jobContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 19,
    marginBottom: 27,
  },
});
