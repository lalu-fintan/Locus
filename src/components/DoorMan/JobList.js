import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Location from 'react-native-vector-icons/Ionicons';
import TimeIcon from 'react-native-vector-icons/Ionicons';
import Coin from '../../assets/Images/Png/coin.png';
import Coins from 'react-native-vector-icons/FontAwesome5';
import Cancle from 'react-native-vector-icons/AntDesign';
import Tick from 'react-native-vector-icons/Feather';

const JobList = ({
  image,
  uploadTime,
  name,
  location,
  eventTime,
  distance,
  remainingTime,
  Amount,
  onPress,
  status,
  Compeleted,
}) => {
  return (
    <View style={styles.boxGroup}>
      <TouchableOpacity
        style={styles.contentBox}
        activeOpacity={0.6}
        onPress={onPress}>
        <View style={styles.boximg}>
          <Image source={image} style={styles.img} />
        </View>

        <View style={{width: '65%'}}>
          <Text style={styles.uploadTime}>{uploadTime}</Text>
          <View style={styles.mainContent}>
            <Text style={styles.mainTxt}>{name}</Text>
            <Text style={styles.location}>{location}</Text>
            <Text style={styles.time}>{eventTime}</Text>
          </View>
          <View style={styles.mainBottom}>
            <View style={styles.bottomcontent}>
              <Location name="ios-location-sharp" size={16} />
              <Text style={styles.insideContent}>{distance}</Text>
            </View>
            <View style={styles.bottomcontent}>
              <TimeIcon name="time" size={16} />
              <Text style={styles.insideContent}>{remainingTime}</Text>
            </View>
            <View
              style={[
                styles.bottomcontentLast,
                {
                  backgroundColor:
                    status == 'In 2 days'
                      ? '#4FC762'
                      : status == 'Paid'
                      ? '#4FC762'
                      : '#C5C5C5',
                },
              ]}>
              {Compeleted && (
                <Coins
                  name="coins"
                  size={12}
                  color={status == 'Paid' ? '#fff' : '#4FC762'}
                />
              )}

              {status == 'Position filled' ? (
                <Cancle
                  name="close"
                  size={12}
                  color="red"
                  style={{marginLeft: 3}}
                />
              ) : (
                status == 'In 2 days' && (
                  <Tick name="check" size={12} color={'#fff'} />
                )
              )}
              {Amount ? (
                <Text style={styles.insideContentLast}>{Amount}</Text>
              ) : (
                <Text
                  style={[
                    styles.insideContentLastStatus,
                    {
                      color:
                        status == 'Position filled'
                          ? 'red'
                          : status == 'Pending'
                          ? '#707070'
                          : '#FFF',
                      // ? Compeleted && status =="Pending"?'#fff':'#707070'
                    },
                  ]}>
                  {status}
                </Text>
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default JobList;

const styles = StyleSheet.create({
  boxGroup: {},
  contentBox: {
    borderWidth: 1,
    borderColor: '#C9C9C9',
    borderRadius: 5,
    height: 115,
    marginBottom: 15,
    flexDirection: 'row',
  },
  boximg: {
    backgroundColor: '#C5C5C5',
    height: '100%',
    width: '35%',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  img: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  uploadTime: {
    fontFamily: 'Magenos-Medium',
    fontSize: 8,
    alignSelf: 'flex-end',
    marginTop: 4,
    marginRight: 4,
    opacity: 0.8,
    color: '#8B8A8A',
  },

  mainContent: {
    marginVertical: 3,
    marginHorizontal: 10,
  },
  mainTxt: {
    fontFamily: 'Magenos-Medium',
    color: '#000',
    fontSize: 20,
  },
  location: {
    marginTop: 4,
    fontFamily: 'Magenos-Medium',
    fontSize: 13,
    color: '#8B8A8A',
  },
  time: {
    fontFamily: 'Magenos-Medium',
    fontSize: 13,
    color: '#8B8A8A',
    marginTop: 2,
  },
  mainBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
    borderTopWidth: 0.5,
    borderTopColor: '#C9C9C9',
  },

  bottomcontent: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  insideContent: {
    marginLeft: 2,
    fontFamily: 'Magenos-Medium',
    fontSize: 17,
    color: '#8B8A8A',
  },
  coin: {
    width: 10,
    height: 10,
    marginRight: 1,
  },
  bottomcontentLast: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 5,
    width: 88,
    height: 27.5,
    borderBottomEndRadius: 5,
  },

  insideContentLast: {
    marginLeft: 2,
    fontFamily: 'Magenos-Medium',
    fontSize: 17,
    color: '#A9A0FF',
    fontFamily: 'Magenos-Bold',
  },
  insideContentLastStatus: {
    marginLeft: 2,
    fontSize: 12,
    // color: '#A9A0FF',
    fontFamily: 'Magenos-Bold',
  },
});
