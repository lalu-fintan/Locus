import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Profile from '../../assets/Images/Jpeg/DefaultProfile.jpeg';
import Location from 'react-native-vector-icons/Ionicons';

const ConfromjobBox = ({profileImg, name, distance, latitude}) => {
  return (
    <View style={styles.boxContainer}>
      <Image source={profileImg} style={styles.img} />
      <View>
        <Text style={styles.userName}>{name}</Text>
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'space-between',
            marginTop: 6,
          }}>
          <Text style={styles.direction}>{latitude}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Location name="ios-location-sharp" size={16} color={'#A9A0FF'} />
            <Text style={styles.distances}>{distance}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.viewbtn} activeOpacity={0.8}>
        <Text style={styles.viewtxt}>View</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfromjobBox;

const styles = StyleSheet.create({
  boxContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#C9C9C9',
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 14,
    paddingRight: 10,
    flexDirection: 'row',
  },
  img: {
    width: 77,
    height: 77,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#C9C9C9',
  },
  viewbtn: {
    width: 90,
    height: 36,
    backgroundColor: '#A9A0FF',
    borderRadius: 5,
    justifyContent: 'center',
  },
  viewtxt: {
    fontFamily: 'Magenos-Black',
    fontSize: 16,
    color: '#FFF',
    alignSelf: 'center',
  },
  userName: {
    fontFamily: 'Magenos-Bold',
    fontSize: 19,
    color: '#000',
  },
  direction: {
    fontFamily: 'Magenos-Medium',
    fontSize: 13,
    color: '#8B8A8A',
    marginRight: 16,
  },
  distances: {
    fontFamily: 'Magenos-Medium',
    fontSize: 13,
    color: '#A9A0FF',
    marginLeft: 4,
  },
});
