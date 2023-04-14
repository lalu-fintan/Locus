import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import TopLogo from '../../../components/Common/TopLogo';
import TopBox from '../../../components/Common/TopBox';
import Button from '../../../components/Common/Button';
import Footer from '../../../components/Common/Footer';
import VenueSvg from '../../../assets/Images/Svg/VenuePic.svg';
import {launchImageLibrary} from 'react-native-image-picker';
const BrandScreen = ({navigation, route}) => {
  const {callBack} = route.params;
  const [brandLogo, setBrandLogo] = useState(null);
  const [logoShown, setLogoShown] = useState(false);
  console.log(brandLogo);

  function nextHandler() {
    navigation.navigate('VenueBottom');
    callBack();
    setLogoShown(false);
  }

  let options = {
    maxWidth: 200,
    maxHeight: 300,
    storageOption: {
      saveToPhotos: true,
      mediaType: 'photo',
      path: 'images',
    },
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    console.log(result, 'result');
    if (result.didCancel) {
      console.log('User cancelled image picker');
    } else if (result.errorMessage) {
      console.log('error', result.errorMessage);
    } else {
      setBrandLogo(result.assets[0].uri);
      setLogoShown(true);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo navigation={() => navigation.goBack()} />
        <TopBox lable={'Brand'} />
        <View style={styles.brandContainer}>
          <TouchableOpacity
            style={styles.uploadTack}
            activeOpacity={0.6}
            onPress={openGallery}>
            {logoShown ? (
              <Image
                source={{uri: brandLogo}}
                style={{width: 280, height: 350}}
              />
            ) : (
              <View>
                <VenueSvg style={styles.venueSvg} />
                <Text style={styles.uploadTxt}>
                  Upload a logo or Venue photo
                </Text>
              </View>
            )}
          </TouchableOpacity>
          <Button lable={'Finish'} onPress={nextHandler} />
        </View>
        <Footer navigation={() => navigation.navigate('login')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BrandScreen;

const styles = StyleSheet.create({
  brandContainer: {
    marginVertical: 45,
    marginHorizontal: 30,
  },
  uploadTack: {
    height: 423,
    borderWidth: 2,
    borderColor: '#A9A0FF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  venueSvg: {
    width: 158,
    height: 158,
    marginBottom: 15,
    alignSelf: 'center',
  },
  uploadTxt: {
    fontFamily: 'Magenos-Bold',
    fontSize: 31,
    color: '#A9A0FF',
    textAlign: 'center',
    width: 271,
  },
});
