import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopLogo from '../../../../components/Common/TopLogo';
import TopBox from '../../../../components/Common/TopBox';
import Profile from '../../../../assets/Images/Jpeg/venue-logo.jpg';
import PaymetHistoryFiled from '../../../../components/DoorMan/PaymetHistoryFiled';
import PaymentDetails from '../../../../components/Venue/PaymentDetails';

const InvoiceScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo profile={Profile} navigation={() => navigation.goBack()} />
        <TopBox lable={'Payments'} />
        <View style={styles.PaymentContainer}>
          <Text style={styles.title}>Invoice Details</Text>
          <View style={styles.topContent}>
            <PaymentDetails
              title={'Event Name:'}
              value={'Comedy Night'}
              color={'#000'}
              fontSize={17}
              require
            />
            <PaymentDetails
              title={'Date:'}
              value={'15/08/2022'}
              color={'#000'}
              fontSize={17}
              require
            />
            <PaymentDetails
              title={'Job Duration:'}
              value={'2 hr'}
              color={'#000'}
              fontSize={17}
              require
            />
            <PaymentDetails
              title={'Staff Supplied:'}
              value={'2'}
              color={'#000'}
              fontSize={17}
              require
            />
          </View>
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.txt}>John Doe</Text>
              <Text style={styles.txt}>Checked in: 17:54</Text>
              <Text style={styles.txt}>Checked out: 19:02</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 7,
              }}>
              <Text style={styles.txt}>Michael </Text>
              <Text style={styles.txt}>Checked in: 17:57</Text>
              <Text style={styles.txt}>Checked out: 19:10</Text>
            </View>
          </View>
          <View style={{marginTop: 33}}>
            <PaymentDetails
              title={'Total (ex VAT) :'}
              value={'£150'}
              color={'#000'}
              fontSize={17}
              require
            />
            <PaymentDetails
              title={'VAT :'}
              value={'£15'}
              color={'#000'}
              fontSize={17}
              require
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderBottomColor: '#C9C9C9',
                paddingBottom: 8,
                marginBottom: 28,
                marginTop: 30,
              }}>
              <Text style={styles.txt1}>Total:</Text>
              <Text style={styles.txt2}>£165</Text>
            </View>
          </View>
          <View style={styles.noteBox}>
            <Text style={styles.noteTitle}>How to pay:</Text>
            <Text style={styles.noteContent}>
              Loremipsum dolorsit amet,consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InvoiceScreen;

const styles = StyleSheet.create({
  PaymentContainer: {
    marginVertical: 45,
    marginHorizontal: 35,
  },
  topContent: {
    marginTop: 15,
  },
  title: {
    fontFamily: 'Magenos-Medium',
    fontSize: 19,
    color: '#000',
    marginBottom: 15,
  },
  txt: {
    fontFamily: 'Magenos-Medium',
    fontSize: 12,
    color: '#8B8A8A',
  },
  txt1: {
    fontFamily: 'Magenos-Medium',
    fontSize: 17,
    color: '#A9A0FF',
  },
  txt2: {
    fontFamily: 'Magenos-Bold',
    fontSize: 15,
    color: '#A9A0FF',
  },
  noteBox: {
    height: 95,
    borderWidth: 1,
    borderColor: '#C9C9C9',
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 10,
    paddingTop: 17,
  },
  noteTitle: {
    fontFamily: 'Magenos-Bold',
    fontSize: 17,
    color: '#000',
    marginBottom: 5,
  },
  noteContent: {
    fontFamily: 'Magenos-Medium',
    fontSize: 14,
    color: '#000',
    textAlign: 'justify',
  },
});
