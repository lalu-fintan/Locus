import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TopBox from '../../../components/Common/TopBox';
import Profile from '../../../assets/Images/Jpeg/DefaultProfile.jpeg';
import TopLogo from '../../../components/Common/TopLogo';
import FilterButton from '../../../components/Common/FilterButton';
import {
  ActiveList,
  CompletedList,
} from '../../../model/YourJobsDescriptionData';
import JobList from '../../../components/DoorMan/JobList';

const YourJobScreen = ({navigation}) => {
  const [filterTab, setFilterTab] = useState(1);
  console.log(filterTab);

  const onSelcectSwitch = value => {
    setFilterTab(value);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo
          profile={Profile}
          navigation={() => navigation.goBack()}
          onPress={() => navigation.navigate('Settings')}
        />
        <TopBox lable={'Your Jobs'} />
        <View style={styles.filter}>
          <FilterButton
            Option1={'Active'}
            Option2={'Completed'}
            selectionMode={1}
            onSelcectSwitch={onSelcectSwitch}
          />
          <View style={styles.dataContainer}>
            {filterTab == 1 &&
              ActiveList.map(item => (
                <View key={item.id}>
                  <JobList
                    image={item.image}
                    uploadTime={item.uploadTime}
                    name={item.name}
                    location={item.location}
                    eventTime={item.eventTime}
                    distance={item.distance}
                    remainingTime={item.remainingTime}
                    status={item.status}
                    onPress={() =>
                      navigation.navigate('jobdescription', {
                        name: item.name,
                        id: item.id,
                        image: item.image,
                        uploadTime: item.uploadTime,
                        eventDate: item.eventDate,
                        Timing: item.timing,
                        description: item.description,
                        amount: item.Amount,
                      })
                    }
                  />
                </View>
              ))}
            {filterTab == 2 &&
              CompletedList.map(item => (
                <View key={item.id}>
                  <JobList
                    image={item.image}
                    uploadTime={item.uploadTime}
                    name={item.name}
                    location={item.location}
                    eventTime={item.eventTime}
                    distance={item.distance}
                    remainingTime={item.remainingTime}
                    status={item.status}
                    Compeleted
                    onPress={() =>
                      navigation.navigate('jobdescription', {
                        name: item.name,
                        id: item.id,
                        image: item.image,
                        uploadTime: item.uploadTime,
                        eventDate: item.eventDate,
                        Timing: item.timing,
                        description: item.description,
                        amount: item.Amount,
                      })
                    }
                  />
                </View>
              ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default YourJobScreen;

const styles = StyleSheet.create({
  filter: {
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
    marginTop: 26,
    marginHorizontal: 20,
  },

  dataContainer: {
    marginTop: 35,
  },
});
