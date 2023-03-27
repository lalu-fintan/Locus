import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import TopLogo from '../../../components/Common/TopLogo';
import TopBox from '../../../components/Common/TopBox';
import Profile from '../../../assets/Images/Jpeg/DefaultProfile.jpeg';
import Filter from 'react-native-vector-icons/Ionicons';

import {EventDataList} from '../../../model/DoorManCollectionData';
import JobList from '../../../components/DoorMan/JobList';

const JobAvaiableScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <TopLogo
        navigation={() => navigation.goBack()}
        profile={Profile}
        onPress={() => navigation.navigate('Settings')}
      />
      <TopBox lable={'Jobs Available'} />
      <ScrollView>
        <View style={styles.bodyContainer}>
          <TouchableOpacity style={styles.filter}>
            <Filter name="filter" size={15} color={'#A9A0FF'} />
            <Text style={styles.filtertxt}>Filter</Text>
          </TouchableOpacity>
          {EventDataList.map(item => (
            <View key={item.id}>
              <JobList
                id={item.id}
                image={item.image}
                uploadTime={item.uploadTime}
                name={item.name}
                location={item.location}
                eventTime={item.eventTime}
                distance={item.distance}
                remainingTime={item.remainingTime}
                Amount={item.Amount}
                onPress={() =>
                  navigation.navigate('Doorman_applyScreen', {
                    id: item.id,
                    image: item.image,
                    title: item.name,
                    uploadTime: item.uploadTime,
                    EventTime: item.eventTime,
                    location: item.location,
                    distance: item.distance,
                    description: item.description,
                    amount: item.Amount,
                  })
                }
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default JobAvaiableScreen;

const styles = StyleSheet.create({
  bodyContainer: {
    marginHorizontal: 20,
    marginVertical: 12,
    marginBottom: 160,
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  filtertxt: {
    fontFamily: 'Magenos-Medium',
    fontSize: 17,
    color: '#A9A0FF',
    marginLeft: 6,
  },
});
