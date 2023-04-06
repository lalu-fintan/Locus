import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import TopLogo from '../../../components/Common/TopLogo';
import TopBox from '../../../components/Common/TopBox';
import Footer from '../../../components/Common/Footer';
import StepsBox from '../../../components/Common/StepsBox';

const disableHandler = value => {
  if (value.status && value.completed) {
    return true;
  } else if (value.status && !value.completed) {
    return false;
  } else if (!value.status && !value.completed) {
    return true;
  }
};
const StepsScreen = ({navigation}) => {
  const [stepList, setStepList] = useState({
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
  console.log(stepList);
  const onClickhandler1 = () => {
    navigation.navigate('upload', {
      callBack: step1CompleteHandler,
    });
  };
  const onClickhandler2 = () => {
    navigation.navigate('paid', {
      callBack: step2CompleteHandler,
    });
  };
  const onClickhandler3 = () => {
    navigation.navigate('background', {
      callBack: step3CompleteHandler,
    });
  };

  const step1CompleteHandler = async () => {
    let doormanVlaue = {...stepList};

    doormanVlaue = {
      ...doormanVlaue,
      step1: {
        status: true,
        completed: true,
      },
      step2: {
        status: true,
        completed: false,
      },
    };
    setStepList(doormanVlaue);
  };

  const step2CompleteHandler = async () => {
    let doormanVlaue = {...stepList};
    doormanVlaue = {
      ...doormanVlaue,
      step2: {
        status: true,
        completed: true,
      },
      step3: {
        status: true,
        completed: false,
      },
    };
    setStepList(doormanVlaue);
  };

  const step3CompleteHandler = () => {};
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo navigation={() => navigation.goBack()} />
        <TopBox lable="Create an Account" />
        <View style={styles.boxContainer}>
          <StepsBox
            Steps="Step1"
            title="Right to work"
            help
            disable={disableHandler(stepList.step1)}
            completed={stepList.step1.completed}
            callBack={onClickhandler1}
          />
          <StepsBox
            Steps="Step2"
            title="Get paid"
            help
            disable={disableHandler(stepList.step2)}
            completed={stepList.step2.completed}
            callBack={onClickhandler2}
          />
          <StepsBox
            Steps="Step3"
            title="Background checks"
            help
            disable={disableHandler(stepList.step3)}
            completed={stepList.step3.completed}
            callBack={onClickhandler3}
          />
        </View>
        <Footer navigation={() => navigation.navigate('login')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default StepsScreen;

const styles = StyleSheet.create({
  boxContainer: {
    marginVertical: 70,
  },
});
