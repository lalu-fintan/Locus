import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Logo from '../assets/Images/Svg/Logo.svg';

const TopLogo = ({content}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.svgLogo}>
        <TouchableOpacity style={styles.arrow}>
          <AntDesign name="left" size={22} color="#707070" />
        </TouchableOpacity>
        <Logo width={166.7} height={58.51} />
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
    marginVertical: 10,
    justifyContent: 'center',
  },
  arrow: {
    position: 'absolute',
    left: 5,
  },

  svgLogo: {
    alignItems: 'center',
    position: 'relative',
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'center',
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
});
