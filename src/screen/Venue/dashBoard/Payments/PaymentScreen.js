import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import TopLogo from '../../../../components/Common/TopLogo';
import TopBox from '../../../../components/Common/TopBox';
import Profile from '../../../../assets/Images/Jpeg/venue-logo.jpg';
import PaymetHistoryFiled from '../../../../components/DoorMan/PaymetHistoryFiled';
import TimeIcon from 'react-native-vector-icons/Ionicons';
import PaymentDetails from '../../../../components/Venue/PaymentDetails';
const PaymentScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo profile={Profile} />
        <TopBox lable={'Payments'} />
        <View style={styles.paymentContainer}>
          <Text style={styles.title}>Invoices</Text>
          <View style={styles.InvoiceBox}>
            <Text style={styles.time}>12/08/22</Text>
            <View style={{marginHorizontal: 27}}>
              <Text style={styles.name}>Comedy Night</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  // justifyContent: 'space-between',
                  marginBottom: 5,
                }}>
                <Text style={styles.timeContent}>The Venue, Manchester</Text>
                <Text style={styles.timeContent}>Sat 15th Aug at 8pm</Text>
              </View>
            </View>
            <View style={styles.bottom}>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 27,
                  alignItems: 'center',
                }}>
                <TimeIcon name="time" size={16} />
                <Text style={styles.timeTxt}>2 hr</Text>
              </View>
              <TouchableOpacity
                style={styles.ViewBtn}
                onPress={() => navigation.navigate('Invoice')}>
                <Text style={styles.ViewTxt}>View</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* second */}
          <View style={styles.InvoiceBox}>
            <Text style={styles.time}>12/08/22</Text>
            <View style={{marginHorizontal: 27}}>
              <Text style={styles.name}>Comedy Night</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  // justifyContent: 'space-between',
                  marginBottom: 5,
                }}>
                <Text style={styles.timeContent}>The Venue, Manchester</Text>
                <Text style={styles.timeContent}>Sat 15th Aug at 8pm</Text>
              </View>
            </View>
            <View style={styles.bottom}>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 27,
                  alignItems: 'center',
                }}>
                <TimeIcon name="time" size={16} />
                <Text style={styles.timeTxt}>2 hr</Text>
              </View>
              <TouchableOpacity
                style={styles.ViewBtn}
                onPress={() => navigation.navigate('Invoice')}>
                <Text style={styles.ViewTxt}>View</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* payment History */}

          <View style={{marginTop: 62}}>
            <Text style={styles.paymentTitle}>Payment History</Text>
            <View style={{marginTop: 5}}>
              <PaymetHistoryFiled
                date={'Mon 02 Aug'}
                amount={'-£200.00'}
                color={'#A9A0FF'}
                require
              />
              <PaymetHistoryFiled
                date={'Mon 04 Aug'}
                amount={'-£150.00'}
                color={'#A9A0FF'}
                require
              />
              <PaymetHistoryFiled
                date={'Mon 12 July'}
                amount={'£200.00'}
                color={'#A9A0FF'}
                require
              />
              <PaymetHistoryFiled
                date={'Mon 20 July'}
                amount={'-£150.00'}
                color={'#A9A0FF'}
                require
              />
              <PaymetHistoryFiled
                date={'Mon 12 July'}
                amount={'-£150.00'}
                color={'#A9A0FF'}
                require
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  paymentContainer: {
    marginVertical: 31,
    marginHorizontal: 22,
  },
  title: {
    fontFamily: 'Magenos-Medium',
    fontSize: 19,
    color: '#000',
  },
  InvoiceBox: {
    height: 95,
    borderWidth: 1,
    borderColor: '#C9C9C9',
    borderRadius: 5,
    marginTop: 13,
  },
  time: {
    fontFamily: 'Magenos-Medium',
    fontSize: 8,
    color: '#8B8A8A',
    alignSelf: 'flex-end',
    marginTop: 3,
    marginRight: 9,
  },
  name: {
    fontFamily: 'Magenos-Bold',
    fontSize: 19,
    color: '#000',
  },
  timeContent: {
    fontFamily: 'Magenos-Medium',
    fontSize: 13,
    color: '#8B8A8A',
    marginTop: 5,
    marginRight: 15,
  },
  bottom: {
    borderTopWidth: 0.5,
    borderTopColor: '#C9C9C9',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
  },
  timeTxt: {
    marginLeft: 3,
    fontFamily: 'Magenos-Medium',
    fontSize: 17,
    color: '#8B8A8A',
  },
  ViewBtn: {
    backgroundColor: '#A9A0FF',
    width: 105,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 5,
  },
  ViewTxt: {
    fontFamily: 'Magenos-Bold',
    fontSize: 13,
    color: '#fff',
    textAlign: 'center',
  },
  paymentTitle: {
    fontFamily: 'Magenos-Medium',
    fontSize: 19,
    color: '#000',
    marginBottom: 15,
  },
});
