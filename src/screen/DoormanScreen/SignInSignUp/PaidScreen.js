import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopLogo from '../../../components/Common/TopLogo';
import TopBox from '../../../components/Common/TopBox';
import Footer from '../../../components/Common/Footer';
import FieldLabel from '../../../components/Common/FieldLabel';
import DropDown from '../../../components/Common/DropDown';
import {maritalStatus, gender, employeeType} from '../../../model/Data';
import Button from '../../../components/Common/Button';
import InputField from '../../../components/Common/InputField';
import AccountInput from '../../../components/Common/AccountInput';

const PaidScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo navigation={() => navigation.goBack()} />
        <TopBox lable={'Get paid'} />
        <View style={styles.paidContainer}>
          {/* <FieldLabel /> */}
          <DropDown lable={'Marital status'} data={maritalStatus} />
          <DropDown lable={'Gender'} data={gender} />
          <InputField lable="National Insurance Number" placeholder="NIN" />
          <InputField lable="Next of Kin Name" placeholder="Name" />
          <InputField lable="Next of Kin Phone Number" placeholder="Phone" />
          <View>
            <FieldLabel help lable={'Employment type '} />
            <DropDown data={employeeType} />
          </View>
          <View>
            <FieldLabel lable={'Bank Details'} />
            <View style={styles.bank}>
              <InputField lable="Name of Bank" placeholder="Bank" />
              <InputField lable="Account Name" placeholder="Name" />
              <AccountInput
                lable={'Account Number'}
                placeholder={'Account number'}
              />
              <AccountInput lable={'Sort Code'} placeholder={'Sort code'} />
            </View>
            <Button lable="Next" onPress={() => navigation.navigate('steps')} />
          </View>
        </View>
        <Footer navigation={() => navigation.navigate('login')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaidScreen;

const styles = StyleSheet.create({
  paidContainer: {
    marginVertical: 20,
    marginHorizontal: 30,
  },
  bank: {
    marginTop: 20,
    marginBottom: 20,
  },
});
