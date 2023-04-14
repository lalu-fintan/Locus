import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TopLogo from '../../../components/Common/TopLogo';
import TopBox from '../../../components/Common/TopBox';
import Footer from '../../../components/Common/Footer';
import FieldLabel from '../../../components/Common/FieldLabel';
// import DropDown from '../../../components/Common/DropDown';
import {SelectList} from 'react-native-dropdown-select-list';
import {
  maritalStatusList,
  genderList,
  employeeTypeList,
} from '../../../model/Data';
import Button from '../../../components/Common/Button';
import InputField from '../../../components/Common/InputField';
import AccountInput from '../../../components/Common/AccountInput';

const PaidScreen = ({navigation, route}) => {
  const {callBack} = route.params;
  const [meritalStatus, setMaritalStatus] = useState('');
  const [gender, setGender] = useState('');
  const [insuranceNumber, setINsuranceNumber] = useState('');
  const [kinName, setKinName] = useState('');
  const [kinPhoneNumber, setKinPhoneNumber] = useState('');
  const [employeeType, setEmployeeType] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [sortcode, setSortCode] = useState('');
  // console.log(insuranceNumber);
  console.log(meritalStatus);

  const [validStatus, setValidStatus] = useState('');
  const [validGender, setValidGender] = useState('');
  const [validInsuranceNumber, setValidInsuranceNumber] = useState('');
  const [validKinName, setValidKinName] = useState('');
  const [validKinNumber, setValidKinNumber] = useState('');
  const [validtype, setValidType] = useState('');
  const [validBankName, setValidBankName] = useState('');
  const [validAccountName, setValidAccountName] = useState('');
  const [validAccountNumber, setValidAccountNumber] = useState('');
  const [validSortCode, setValidSortCode] = useState('');

  console.log(validStatus);
  const insuranceValidation = value => {
    if (!value) {
      setValidInsuranceNumber('Insurance number is required');
    } else if (value.length < 3) {
      setValidInsuranceNumber('minimum 3 charecters');
    } else {
      setValidInsuranceNumber('');
    }
    setINsuranceNumber(value);
  };
  const kinanameValidation = value => {
    if (!value) {
      setValidKinName(' kin name  is required');
    } else if (value.length < 3) {
      setValidKinName('minimum 3 charecters');
    } else {
      setValidKinName('');
    }
    setKinName(value);
  };
  const kinNumberValidation = value => {
    if (!value) {
      setValidKinNumber(' kin number is required');
    } else if (value.length <= 11) {
      setValidKinNumber('minimum 11 charecters');
    } else {
      setValidKinNumber('');
      return;
    }
    setKinPhoneNumber(value);
  };
  const bankNameValidation = value => {
    if (!value) {
      setValidBankName(' bank name is required');
    } else if (value.length < 3) {
      setValidBankName('minimum 3 charecters');
    } else {
      setValidBankName('');
    }
    setBankName(value);
  };
  const accountNameValidation = value => {
    if (!value) {
      setValidAccountName(' account name is required');
    } else if (value.length < 3) {
      setValidAccountName('minimum 3 charecters');
    } else {
      setValidAccountName('');
    }
    setAccountName(value);
  };
  const accountNumberValidation = value => {
    if (!value) {
      setValidAccountNumber(' account number is required');
    } else if (value.length < 3) {
      setValidAccountNumber('minimum 3 charecters');
    } else {
      setValidAccountNumber('');
    }
    setAccountNumber(value);
  };
  const sortCodeValidation = value => {
    if (!value) {
      setValidSortCode('sortcode is required');
    } else if (value.length < 3) {
      setValidSortCode('minimum 3 charecters');
    } else {
      setValidSortCode('');
    }
    setSortCode(value);
  };
  const statusValidation = value => {
    if (!value) {
      setValidStatus('marital status is required');
    }
    setMaritalStatus(value);
  };

  function nextHandler() {
    let validation = true;
    if (!insuranceNumber) {
      setValidInsuranceNumber('Insurance number is required');
      validation = false;
    }
    if (!kinName) {
      setValidKinName(' kin name is required');
      validation = false;
    }
    if (!kinPhoneNumber) {
      setValidKinNumber('kin number is required');
      validation = false;
    }
    if (!bankName) {
      setValidBankName(' bank name is required');
      validation = false;
    }
    if (!accountName) {
      setValidAccountName(' accountName is required');
      validation = false;
    }
    if (!accountNumber) {
      setValidAccountNumber('account number is required');
      validation = false;
    }
    if (!sortcode) {
      setValidSortCode('Insurance number is required');
      validation = false;
    }
    if (!meritalStatus) {
      setValidStatus('marital status is required');
      validation = false;
    }
    if (meritalStatus == maritalStatusList.value) {
      setValidStatus('');
    }

    if (!gender) {
      setValidGender('gender is Required');
      validation = false;
    }
    if (!employeeType) {
      setValidType('employee type is required');
      validation = false;
    }

    if (validation) {
      navigation.goBack();
      callBack();
    }
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo navigation={() => navigation.goBack()} />
        <TopBox lable={'Get paid'} />
        <View style={styles.paidContainer}>
          {/* <FieldLabel /> */}
          <View>
            <Text style={styles.DropDownLable}>marital Status</Text>
            <SelectList
              boxStyles={styles.boxStyles}
              placeholder={'Select'}
              data={maritalStatusList}
              setSelected={value => setMaritalStatus(value)}
              search={false}
              value={meritalStatus}
              fontFamily={'Magenos-Medium'}
              dropdownStyles={styles.dropdownStyles}
              dropdownTextStyles={styles.dropdownTextStyles}
              inputStyles={styles.inputStyles}
            />
            {!meritalStatus && <Text style={styles.error}>{validStatus}</Text>}
          </View>

          {/* gender */}
          <View>
            <Text style={styles.DropDownLable}>Gender</Text>
            <SelectList
              boxStyles={styles.boxStyles}
              placeholder={'Select'}
              data={genderList}
              setSelected={value => setGender(value)}
              search={false}
              value={gender}
              fontFamily={'Magenos-Medium'}
              dropdownStyles={styles.dropdownStyles}
              dropdownTextStyles={styles.dropdownTextStyles}
              inputStyles={styles.inputStyles}
            />
            {!gender && <Text style={styles.error}>{validGender}</Text>}
          </View>

          <InputField
            lable="National Insurance Number"
            placeholder="NIN"
            value={insuranceNumber}
            error={validInsuranceNumber}
            onChangeText={insuranceValidation}
          />
          <InputField
            lable="Next of Kin Name"
            placeholder="Name"
            value={kinName}
            error={validKinName}
            onChangeText={kinanameValidation}
          />
          <InputField
            lable="Next of Kin Phone Number"
            placeholder="Phone"
            value={kinPhoneNumber}
            error={validKinNumber}
            onChangeText={kinNumberValidation}
            Number
          />
          <View>
            <FieldLabel help lable={'Employment type '} />
            <View>
              <SelectList
                boxStyles={styles.boxStyles}
                placeholder={'Select'}
                data={employeeTypeList}
                setSelected={value => setEmployeeType(value)}
                search={false}
                value={employeeType}
                fontFamily={'Magenos-Medium'}
                dropdownStyles={styles.dropdownStyles}
                dropdownTextStyles={styles.dropdownTextStyles}
                inputStyles={styles.inputStyles}
              />
              {!employeeType && <Text style={styles.error}>{validtype}</Text>}
            </View>
          </View>
          <View>
            <FieldLabel lable={'Bank Details'} />
            <View style={styles.bank}>
              <InputField
                lable="Name of Bank"
                placeholder="Bank"
                value={bankName}
                error={validBankName}
                onChangeText={bankNameValidation}
              />
              <InputField
                lable="Account Name"
                placeholder="Name"
                value={accountName}
                error={validAccountName}
                onChangeText={accountNameValidation}
              />
              <AccountInput
                lable={'Account Number'}
                placeholder={'Account number'}
                value={accountNumber}
                error={validAccountNumber}
                onChangeText={accountNumberValidation}
              />
              <AccountInput
                lable={'Sort Code'}
                placeholder={'Sort code'}
                value={sortcode}
                error={validSortCode}
                onChangeText={sortCodeValidation}
              />
            </View>
            <Button lable="Next" onPress={nextHandler} />
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
  DropDownLable: {
    fontFamily: 'Magenos-Medium',
    fontSize: 17,
    color: '#000',
    marginBottom: 8,
  },
  error: {
    color: 'red',
    fontFamily: 'Magenos-Medium',
    fontSize: 16,
    marginBottom: 10,
  },
  inputStyles: {
    fontSize: 14,
    fontFamily: 'Magenos-Medium',
    color: '#000',
  },
  boxStyles: {
    borderRadius: 5,
    borderColor: '#C9C9C9',
    height: 44,
    marginBottom: 15,
    marginTop: 5,
  },
  dropdownStyles: {
    borderRadius: 5,
    marginBottom: 10,
    marginTop: -10,
    borderColor: '#C9C9C9',
  },
  dropdownTextStyles: {
    fontFamily: 'Magenos-Medium',
    fontSize: 14,
    color: '#000',
  },
});
