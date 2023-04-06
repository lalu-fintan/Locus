import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TopLogo from '../../../components/Common/TopLogo';
import TopBox from '../../../components/Common/TopBox';
import StepsBox from '../../../components/Common/StepsBox';
import Footer from '../../../components/Common/Footer';
const disableHandler = value => {
  if (value.status && value.completed) {
    return true;
  } else if (value.status && !value.completed) {
    return false;
  } else if (!value.status && !value.completed) {
    return true;
  }
};

const Venue_StepsScreen = ({navigation}) => {
  const [venueStepList, setVenueStepList] = useState({
    step1: {
      status: true,
      completed: false,
    },
    step2: {
      status: false,
      completed: false,
    },
    step3: {
      status: false,
      completed: false,
    },
  });
  const venueOnClickhandler1 = () => {
    navigation.navigate('TheVenue', {
      callBack: step1CompleteHandler,
    });
  };
  const venueOnClickhandler2 = () => {
    navigation.navigate('Address', {
      callBack: step2CompleteHandler,
    });
  };
  const venueOnClickhandler3 = () => {
    navigation.navigate('Brand', {
      callBack: step3CompleteHandler,
    });
  };

  const step1CompleteHandler = async () => {
    let venueValue = {...venueStepList};
    venueValue = {
      ...venueValue,
      step1: {
        status: true,
        completed: true,
      },
      step2: {
        status: true,
        completed: false,
      },
    };
    setVenueStepList(venueValue);
  };

  const step2CompleteHandler = async () => {
    let venueValue = {...venueStepList};
    venueValue = {
      ...venueValue,
      step2: {
        status: true,
        completed: true,
      },
      step3: {
        status: true,
        completed: false,
      },
    };
    setVenueStepList(venueValue);
  };

  const step3CompleteHandler = () => {};
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo navigation={() => navigation.goBack()} />
        <TopBox lable={'Create an Account'} />
        <View style={styles.boxContainer}>
          <StepsBox
            Steps="Step1"
            title="The Venue"
            disable={disableHandler(venueStepList.step1)}
            completed={venueStepList.step1.completed}
            callBack={venueOnClickhandler1}
          />
          <StepsBox
            Steps="Step2"
            title="Address"
            disable={disableHandler(venueStepList.step2)}
            completed={venueStepList.step2.completed}
            callBack={venueOnClickhandler2}
          />
          <StepsBox
            Steps="Step3"
            title="Brand"
            disable={disableHandler(venueStepList.step3)}
            completed={venueStepList.step3.completed}
            callBack={venueOnClickhandler3}
          />
        </View>
        <Footer navigation={() => navigation.navigate('login')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Venue_StepsScreen;

const styles = StyleSheet.create({
  boxContainer: {
    marginVertical: 70,
  },
});
