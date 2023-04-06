import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import TopLogo from '../../../components/Common/TopLogo';
import TopBox from '../../../components/Common/TopBox';
import Footer from '../../../components/Common/Footer';
import Button from '../../../components/Common/Button';
import InputField from '../../../components/Common/InputField';
import AddButton from '../../../components/Common/AddButton';
import FieldLabel from '../../../components/Common/FieldLabel';
import AccountInput from '../../../components/Common/AccountInput';
import TimeInput from '../../../components/Common/TimeInput';
import RadioButtons from '../../../components/Common/RadioButton';

const BackgroundCheckScreen = ({navigation, route}) => {
  const {callBack} = route.params;
  console.log(callBack);
  function nextHandler() {
    navigation.navigate('FinalScreen');
    callBack();
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo navigation={() => navigation.goBack()} />
        <TopBox lable={'Background Checks'} />
        <View style={styles.mainContainer}>
          <View>
            <InputField lable={'Previous SIA Number'} placeholder={'Number'} />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <AddButton lable={'Add another'} width={163} />
            </View>
            <InputField
              lable={'Were you known by any other name?'}
              placeholder={'Name'}
            />
          </View>
          <View>
            <FieldLabel
              lable={'Address history (before your current address)'}
            />
            <View style={styles.address}>
              <InputField
                lable={'Postcode'}
                placeholder={'Postcode '}
                required
              />
              <InputField lable={'Address'} placeholder={'Address'} required />
              <InputField
                lable={'How long have you lived there?'}
                placeholder={'Period'}
                required
              />
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <AddButton lable={'Add another address'} width={212} />
              </View>
            </View>
            <View>
              <FieldLabel lable={'Employment history'} />
              <View style={styles.subContainer}>
                <InputField
                  lable={'Company name'}
                  placeholder={'Company name'}
                />
                <InputField lable={'Role'} placeholder={'Postcode'} />
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <TimeInput lable={'From'} placeholder={'Mm/yy'} />
                  <View style={{marginLeft: 17}}>
                    <TimeInput lable={'To'} placeholder={'Mm/yy'} />
                  </View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <AddButton lable={'Add another experience'} width={241} />
                </View>
              </View>
            </View>

            <View>
              <FieldLabel lable={'Criminal & bankruptcy'} />
              <View>
                <RadioButtons
                  color={'red'}
                  lable={
                    'Are you currently under any charges of any violation of law? *'
                  }
                  required
                />
                <AccountInput
                  lable={'If yes, date of occurrence'}
                  placeholder={'Date'}
                />
                <AccountInput
                  lable={'Place of occurrence'}
                  placeholder={'City'}
                />
              </View>
            </View>

            <View style={styles.CommentContainer}>
              <Text style={styles.CommentLable}>Explanation</Text>
              <View style={styles.CommentBox}>
                <TextInput
                  placeholder={'Description'}
                  style={styles.inputField}
                />
              </View>
            </View>
          </View>
          <RadioButtons lable={'Have you ever declared bankruptcy?'} />

          <Button lable={'Next'} onPress={nextHandler} />
        </View>
        <Footer navigation={() => navigation.navigate('login')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BackgroundCheckScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 20,
    marginHorizontal: 30,
  },
  address: {
    marginTop: 20,
  },
  subContainer: {
    marginTop: 20,
  },

  CommentContainer: {
    marginTop: 19,
    marginBottom: 10,
  },
  CommentLable: {
    fontFamily: 'Magenos-Medium',
    fontSize: 17,
    color: '#000',
  },

  CommentBox: {
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 8,
    borderColor: '#C9C9C9',
    height: 122,
  },
  inputField: {
    fontFamily: 'Magenos-Medium',
    color: '#000',
    fontSize: 16,
    textAlign: 'justify',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
});
