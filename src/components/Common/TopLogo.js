import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Logo from '../../assets/Images/Svg/PurpleLogo.svg';

const TopLogo = ({content, navigation, profile, onPress}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.svgLogo}>
        <TouchableOpacity style={styles.arrow} onPress={navigation}>
          <AntDesign name="left" size={22} color="#707070" />
        </TouchableOpacity>
        <Logo width={166.7} height={58.51} />
        <TouchableOpacity onPress={onPress}>
          <Image source={profile} style={styles.img} />
        </TouchableOpacity>
      </View>
      {content && (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.content}>
            <Text style={styles.contentTxt}>
              Reliable security teams for events & venues worldwide
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default TopLogo;

const styles = StyleSheet.create({
  mainContainer: {
    // marginVertical: 10,
    justifyContent: 'center',
  },
  // arrow: {
  //   position: 'absolute',
  //   left: 5,
  // },

  svgLogo: {
    alignItems: 'center',
    // position: 'relative',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  topLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  content: {
    width: 280,
  },
  contentTxt: {
    fontFamily: 'Magenos-Bold',
    fontSize: 19,
    color: '#000',
    textAlign: 'center',
  },
  img: {
    width: 44,
    height: 44,
    borderRadius: 40,
  },
});
