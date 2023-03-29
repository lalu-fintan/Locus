import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import TopLogo from '../../../components/Common/TopLogo';
import Profile from '../../../assets/Images/Jpeg/DefaultProfile.jpeg';
import TopBox from '../../../components/Common/TopBox';
import BankLogo from '../../../assets/Images/Png/netwest.png';
import PoundIcon from 'react-native-vector-icons/FontAwesome5';
import PaymetHistoryFiled from '../../../components/DoorMan/PaymetHistoryFiled';
import Button from '../../../components/Common/Button';

const PaymentsScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo
          profile={Profile}
          onPress={() => navigation.navigate('Settings')}
        />
        <TopBox lable={'Your Wallet'} />
        <View style={styles.body}>
          <View style={styles.topContainer}>
            <Text style={styles.topTxt}>
              Your money will be paid into your account weekly on every Monday,
              2 weeks after working for LOCUS.
            </Text>
            <TouchableOpacity style={styles.topLink}>
              <Text style={styles.TopLinktxt}>Payments terms & conditions</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.bankDetails}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={BankLogo}
                  style={{width: 60, height: 64, marginLeft: 14}}
                />
              </View>
              <View>
                <Text style={styles.bankDetailsTxt}>Bank Details</Text>
                <View style={styles.detailsContainer}>
                  <Text style={styles.details}>John Doe</Text>
                  <Text style={styles.details}>11-22-33</Text>
                  <Text style={styles.details}>123456709</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.editBankLink}>
              <Text style={styles.editBankLinkTxt}>Edit bank details</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceTxt}>Balance</Text>
            <View>
              <PoundIcon size={10} color={'#4FC762'} />
              <Text style={styles.balanceAmount}>£760.00</Text>
            </View>
          </View>
          <View style={styles.history}>
            <Text style={styles.paymetTitle}>Payment History</Text>
            <View style={{marginTop: 15}}>
              <PaymetHistoryFiled
                date={'Mon 02 Aug - Sun 09 Aug'}
                amount={'£200.00'}
                color={'#4FC762'}
                require
              />
              <PaymetHistoryFiled
                date={'Withdrawal'}
                amount={'- £150.00'}
                color={'#FB1200'}
                require
              />
              <PaymetHistoryFiled
                date={'Mon 02 Aug - Sun 09 Aug'}
                amount={'£280.00'}
                color={'#4FC762'}
                require
              />
              <PaymetHistoryFiled
                date={'Mon 20 July - Sun 27 July'}
                amount={'£150.00'}
                color={'#4FC762'}
                require
              />
              <PaymetHistoryFiled
                date={'Tue 12 July - Sun 17 July'}
                amount={'£280.00'}
                color={'#4FC762'}
              />
            </View>
          </View>
          <Button lable={'WITHDRAW'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentsScreen;

const styles = StyleSheet.create({
  body: {
    marginHorizontal: 20,
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  topTxt: {
    fontFamily: 'Magenos-Medium',
    fontSize: 14,
    color: '#000',
  },
  TopLinktxt: {
    color: '#A9A0FF',
    fontFamily: 'Magenos-Medium',
    fontSize: 17,
    textDecorationLine: 'underline',
  },
  topLink: {
    marginTop: 10,
  },
  bankDetails: {
    borderWidth: 1,
    borderColor: '#C9C9C9',
    borderRadius: 5,
    height: 72,
    marginTop: 30,

    flexDirection: 'row',
  },
  bankDetailsTxt: {
    fontFamily: 'Magenos-Bold',
    fontSize: 19,
    marginLeft: 20,
    marginTop: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
  },
  details: {
    fontFamily: 'Magenos-Medium',
    fontSize: 13,
    color: '#8B8A8A',
    paddingHorizontal: 20,
    marginTop: 6,
  },
  editBankLink: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  editBankLinkTxt: {
    textDecorationLine: 'underline',
    color: '#A9A0FF',
    fontFamily: 'Magenos-Medium',
    fontSize: 17,
  },
  balanceContainer: {
    marginTop: 13,
  },
  balanceTxt: {
    color: '#000',
    fontFamily: 'Magenos-Bold',
    fontSize: 19,
  },
  balanceAmount: {
    color: '#4FC762',
    fontFamily: 'Magenos-Bold',
    fontSize: 42,
  },
  history: {
    marginTop: 30,
  },
  paymetTitle: {
    fontFamily: 'Magenos-Bold',
    color: '#000',
    fontSize: 19,
  },
});
