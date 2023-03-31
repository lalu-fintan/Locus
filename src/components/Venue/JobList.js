import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import TimeIcon from 'react-native-vector-icons/Ionicons';
import Profile from '../../assets/Images/Jpeg/venue-logo.jpg';

const JobList = ({
  profileLogo,
  name,
  uploadTime,
  place,
  date,
  accepted,
  status,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.InvoiceBox}
      activeOpacity={0.7}
      onPress={onPress}>
      <Image source={profileLogo} style={styles.Img} />
      <View>
        <Text style={styles.time}>{uploadTime}</Text>
        <View style={{marginHorizontal: 15}}>
          <Text style={styles.name}>{name}</Text>
          <View>
            <Text style={styles.timeContent}>{place}</Text>
            <Text style={styles.timeContent}>{date}</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.timeTxt}>Accepted: {accepted}</Text>
          </View>
          <View style={styles.ViewBtn}>
            <Text
              style={[
                styles.ViewTxt,
                {color: status == 'All set!' ? '#4FC762' : '#A9A0FF'},
              ]}>
              {status}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default JobList;

const styles = StyleSheet.create({
  InvoiceBox: {
    height: 108,

    borderWidth: 1,
    borderColor: '#C9C9C9',
    borderRadius: 5,
    marginTop: 13,
    flexDirection: 'row',
  },
  time: {
    fontFamily: 'Magenos-Medium',
    fontSize: 8,
    color: '#8B8A8A',
    alignSelf: 'flex-end',
    marginTop: 1,
    marginRight: 7,
  },
  name: {
    fontFamily: 'Magenos-Bold',
    fontSize: 19,
    color: '#000',
    marginBottom: 2,
  },
  timeContent: {
    fontFamily: 'Magenos-Medium',
    fontSize: 13,
    color: '#8B8A8A',
    marginBottom: 2,
  },
  bottom: {
    borderTopWidth: 0.5,
    borderTopColor: '#C9C9C9',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },
  timeTxt: {
    marginLeft: 3,
    fontFamily: 'Magenos-Medium',
    fontSize: 13,
    color: '#8B8A8A',
    marginLeft: 14,
  },
  ViewBtn: {
    backgroundColor: '#C5C5C5',
    width: 102,
    height: 31.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 5,
    marginLeft: 29,
  },
  ViewTxt: {
    fontFamily: 'Magenos-Bold',
    fontSize: 13,
    textAlign: 'center',
  },
  Img: {
    width: 120,
    height: 106,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
});
