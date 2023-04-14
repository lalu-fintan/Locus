import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
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
import DatePicker from 'react-native-date-picker';
import DurationTime from '../../../components/DoorMan/DurationTime';

const BackgroundCheckScreen = ({navigation, route}) => {
  const {callBack} = route.params;
  console.log(callBack);

  const [date, setDate] = useState(new Date());

  const [open, setOpen] = useState(false);
  const [dateLable, setDateLable] = useState('');
  const [validDate, setValidDate] = useState('');
  console.log(dateLable);

  const [description, setDescrition] = useState('');
  const [validDescription, setValidDescription] = useState('');
  const [city, setCity] = useState('');
  const [validCity, setValidCity] = useState('');
  const [addSIANumber, setAddSIANumber] = useState([
    {
      field: '',
      error: false,
      message: 'Sia Number is required',
      minLength: {
        value: 3,
        error: false,
        message: 'Please fill minimum 3 characters',
      },
      maxLength: {
        value: 20,
        error: false,
        message: 'Please fill maximum 20 characters',
      },
    },
  ]);
  const [otherName, setOtherName] = useState('');
  const [validOtherName, setValidOtherName] = useState('');
  const [addressHistory, setAddressHistory] = useState([
    {
      postCode: {
        field: '',
        error: false,
        message: 'Postcode is required',
        minLength: {
          value: 3,
          error: false,
          message: 'Please fill minimum 3 characters',
        },
        maxLength: {
          value: 20,
          error: false,
          message: 'Please fill maximum 20 characters',
        },
      },
      address: {
        field: '',
        error: false,
        message: 'Address is required',
        minLength: {
          value: 3,
          error: false,
          message: 'Please fill minimum 3 characters',
        },
        maxLength: {
          value: 20,
          error: false,
          message: 'Please fill maximum 20 characters',
        },
      },
      live: {
        field: '',
        error: false,
        message: 'Lived is required',
        minLength: {
          value: 3,
          error: false,
          message: 'Please fill minimum 3 characters',
        },
        maxLength: {
          value: 20,
          error: false,
          message: 'Please fill maximum 20 characters',
        },
      },
    },
  ]);
  const [employeementHistory, setEmployeementHistory] = useState([
    {
      companyName: {
        field: '',
        error: false,
        message: 'Company name is required',
        minLength: {
          value: 3,
          error: false,
          message: 'Please fill minimum 3 characters',
        },
        maxLength: {
          value: 20,
          error: false,
          message: 'Please fill maximum 20 characters',
        },
      },
      role: {
        field: '',
        error: false,
        message: 'Role is required',
        minLength: {
          value: 3,
          error: false,
          message: 'Please fill minimum 3 characters',
        },
        maxLength: {
          value: 20,
          error: false,
          message: 'Please fill maximum 20 characters',
        },
      },
      from: {
        field: '',
        error: false,
        message: 'From is required',
        minLength: {
          value: 12,
          error: false,
          message: 'fill valid mm-yy',
        },
      },
      to: {
        field: '',
        error: false,
        message: 'To is required',
        minLength: {
          value: 12,
          error: false,
          message: 'fill valid mm-yy',
        },
      },
    },
  ]);
  console.log(addSIANumber);
  const addSIANumberValue = () => {
    const data = [...addSIANumber];
    data.push({
      field: '',
      error: false,
      message: 'Sia Number is required',
      minLength: {
        value: 3,
        error: false,
        message: 'Please fill minimum 3 characters',
      },
      maxLength: {
        value: 20,
        error: false,
        message: 'Please fill maximum 20 characters',
      },
    });
    setAddSIANumber(data);
  };

  const otherNameValidation = value => {
    if (value.length > 15) {
      return;
    }
    setOtherName(value);
  };

  const addAddressHistory = () => {
    const data = [...addressHistory];
    data.push({
      postCode: {
        field: '',
        error: false,
        message: 'Postcode is required',
        minLength: {
          value: 3,
          error: false,
          message: 'Please fill minimum 3 characters',
        },
        maxLength: {
          value: 20,
          error: false,
          message: 'Please fill maximum 20 characters',
        },
      },
      address: {
        field: '',
        error: false,
        message: 'Address is required',
        minLength: {
          value: 3,
          error: false,
          message: 'Please fill minimum 3 characters',
        },
        maxLength: {
          value: 20,
          error: false,
          message: 'Please fill maximum 20 characters',
        },
      },
      live: {
        field: '',
        error: false,
        message: 'Lived is required',
        minLength: {
          value: 3,
          error: false,
          message: 'Please fill minimum 3 characters',
        },
        maxLength: {
          value: 20,
          error: false,
          message: 'Please fill maximum 20 characters',
        },
      },
    });
    setAddressHistory(data);
  };

  const addCompanyHistory = () => {
    const data = [...employeementHistory];
    data.push({
      companyName: {
        field: '',
        error: false,
        message: 'Company name is required',
        minLength: {
          value: 3,
          error: false,
          message: 'Please fill minimum 3 characters',
        },
        maxLength: {
          value: 20,
          error: false,
          message: 'Please fill maximum 20 characters',
        },
      },
      role: {
        field: '',
        error: false,
        message: 'Role is required',
        minLength: {
          value: 3,
          error: false,
          message: 'Please fill minimum 3 characters',
        },
        maxLength: {
          value: 20,
          error: false,
          message: 'Please fill maximum 20 characters',
        },
      },
      from: {
        field: '',
        error: false,
        message: 'From is required',
        minLength: {
          value: 12,
          error: false,
          message: 'fill valid mm-yy',
        },
      },
      to: {
        field: '',
        error: false,
        message: 'To is required',
        minLength: {
          value: 12,
          error: false,
          message: 'fill valid mm-yy',
        },
      },
    });
    setEmployeementHistory(data);
  };

  const [radio, setRadio] = useState(2);

  const [radio2, setRadio2] = useState(1);

  const radioHandle1 = () => {
    setRadio(1);
  };
  const radioHandle2 = () => {
    setRadio(2);
  };
  const radioHandleFor1 = () => {
    setRadio2(1);
  };
  const radioHandleFor2 = () => {
    setRadio2(2);
  };

  const SIANumberValidation = (value, index) => {
    const data = [...addSIANumber];
    data[index].field = value;
    if (!value.length) {
      data[index].error = true;
      data[index].minLength.error = false;
    } else if (value.length < data[index].minLength.value) {
      data[index].minLength.error = true;
      data[index].error = false;
    } else if (value.length > data[index].maxLength.value) {
      data[index].maxLength.error = true;
      data[index].error = false;
    } else {
      data[index].error = false;
      data[index].minLength.error = false;
      data[index].maxLength.error = false;
    }
    setAddSIANumber(data);
  };

  const addressHistoryValidation = (value, index, type) => {
    const data = [...addressHistory];
    data[index][type].field = value;
    if (!value.length) {
      data[index][type].error = true;
      data[index][type].minLength.error = false;
    } else if (value.length < data[index][type].minLength.value) {
      data[index][type].minLength.error = true;
      data[index][type].error = false;
    } else if (value.length > data[index][type].maxLength.value) {
      data[index][type].maxLength.error = true;
      data[index][type].minLength.error = false;
    } else {
      data[index][type].error = false;
      data[index][type].minLength.error = false;
      data[index][type].maxLength.error = false;
    }
    setAddressHistory(data);
  };
  const employeementHistoryValidation = (value, index, type) => {
    const data = [...employeementHistory];
    data[index][type].field = value;
    if (!value.length) {
      data[index][type].error = true;
      data[index][type].minLength.error = false;
    } else if (value.length < data[index][type].minLength.value) {
      data[index][type].minLength.error = true;
      data[index][type].error = false;
    } else if (value.length > data[index][type].maxLength.value) {
      data[index][type].maxLength.error = true;
      data[index][type].error = false;
    } else {
      data[index][type].error = false;
      data[index][type].minLength.error = false;
      data[index][type].maxLength.error = false;
    }
    setEmployeementHistory(data);
  };

  const cityValidation = value => {
    if (!value) {
      setValidCity('Place is required');
    } else {
      setValidCity('');
    }
    setCity(value);
  };

  const descriptionValidation = value => {
    if (!value) {
      setValidDescription('This Field is required');
    } else {
      setValidDescription('');
    }
    setDescrition(value);
  };

  function nextHandler() {
    let validate = true;
    const SIANumbers = [...addSIANumber];
    SIANumbers.map(value => {
      if (!value.field) {
        value.error = true;
        validate = false;
      } else {
        value.error = false;
      }
      setAddSIANumber(SIANumbers);
    });

    const AddressValue = [...addressHistory];

    AddressValue.map(value => {
      if (!value.postCode.field) {
        value.postCode.error = true;
        validate = false;
      }
      if (!value.address.field) {
        value.address.error = true;
        validate = false;
      }
      if (!value.live.field) {
        value.live.error = true;
        validate = false;
      } else {
        value.postCode.error = false;
        value.address.error = false;
        value.live.error = false;
      }
      setAddressHistory(AddressValue);
    });

    const employeeValue = [...employeementHistory];
    employeeValue.map(value => {
      if (!value.companyName.field) {
        value.companyName.error = true;
        validate = false;
      }
      if (!value.role.field) {
        value.role.error = true;
        validate = false;
      }
      if (!value.from.field) {
        value.from.error = true;
        validate = false;
      }
      if (!value.to.field) {
        value.to.error = true;
        validate = false;
      } else {
        value.companyName.error = false;
        value.role.error = false;
        value.from.error = false;
        value.to.error = false;
      }
      setEmployeementHistory(employeeValue);
    });

    if (!dateLable) {
      setValidDate('Date is required');
      validate = false;
    }
    if (!city) {
      setValidCity('field is required');
      validate = false;
    }
    if (!description) {
      setValidDescription('This Field is required');
      validate = false;
    }
    if (validate) {
      navigation.navigate('FinalScreen');
      callBack();

      const SIANumbers = [...addSIANumber];
      SIANumbers.map(SIAvalue => {
        SIAvalue.field = '';
      });
      const AddressValue = [...addressHistory];
      AddressValue.map(value => {
        value.address.field = '';
        value.live.field = '';
        value.postCode.field = '';
      });
      const employeeValue = [...employeementHistory];
      employeeValue.map(empValue => {
        empValue.companyName.field = '';
        empValue.role.field = '';
        empValue.from.field = '';
        empValue.to.field = '';
      });
      setOtherName('');
      setDateLable('');
      setCity('');
      setDescrition('');
    }
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <TopLogo navigation={() => navigation.goBack()} />
        <TopBox lable={'Background Checks'} />
        <View style={styles.mainContainer}>
          <View>
            {addSIANumber.map((Item, index) => {
              return (
                <>
                  <InputField
                    lable={'Previous SIA Number'}
                    placeholder={'Number'}
                    value={Item.value}
                    index={index}
                    onChangeText={SIANumberValidation}
                    Number
                  />

                  {Item.error && (
                    <Text style={{color: 'red', marginTop: 5}}>
                      {Item.message}
                    </Text>
                  )}
                  {Item.minLength.error && (
                    <Text style={{color: 'red', marginTop: 5}}>
                      {Item.minLength.message}
                    </Text>
                  )}
                  {Item.maxLength.error && (
                    <Text style={{color: 'red', marginTop: 5}}>
                      {Item.maxLength.message}
                    </Text>
                  )}
                </>
              );
            })}

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <AddButton
                lable={'Add another'}
                width={163}
                onPress={addSIANumberValue}
              />
            </View>
            <InputField
              lable={'Were you known by any other name?'}
              placeholder={'Name'}
              value={otherName}
              onChangeText={otherNameValidation}
            />
          </View>
          <View>
            <FieldLabel
              lable={'Address history (before your current address)'}
            />
            <View style={styles.address}>
              {addressHistory.map((item, index) => {
                return (
                  <>
                    <InputField
                      lable={'Postcode'}
                      placeholder={'Postcode '}
                      index={index}
                      type="postCode"
                      required
                      Number
                      value={item.postCode.field}
                      onChangeText={addressHistoryValidation}
                    />
                    {item.postCode.error && (
                      <Text style={{color: 'red', marginTop: 5}}>
                        {item.postCode.message}
                      </Text>
                    )}
                    {item.postCode.minLength.error && (
                      <Text style={{color: 'red', marginTop: 5}}>
                        {item.postCode.minLength.message}
                      </Text>
                    )}
                    {item.postCode.maxLength.error && (
                      <Text style={{color: 'red', marginTop: 5}}>
                        {item.postCode.maxLength.message}
                      </Text>
                    )}
                    <InputField
                      lable={'Address'}
                      placeholder={'Address'}
                      value={item.address.field}
                      index={index}
                      type="address"
                      required
                      onChangeText={addressHistoryValidation}
                    />
                    {item.address.error && (
                      <Text style={{color: 'red', marginTop: 5}}>
                        {item.address.message}
                      </Text>
                    )}
                    {item.address.minLength.error && (
                      <Text style={{color: 'red', marginTop: 5}}>
                        {item.address.minLength.message}
                      </Text>
                    )}
                    {/* {item.address.maxLength.error && (
                      <Text style={{color: 'red', marginTop: 5}}>
                        {item.address.maxLength.message}
                      </Text>
                    )} */}
                    <InputField
                      lable={'How long have you lived there?'}
                      placeholder={'Period'}
                      value={item.live.field}
                      index={index}
                      type="live"
                      required
                      onChangeText={addressHistoryValidation}
                    />
                    {item.live.error && (
                      <Text style={{color: 'red', marginTop: 5}}>
                        {item.live.message}
                      </Text>
                    )}
                    {item.live.minLength.error && (
                      <Text style={{color: 'red', marginTop: 5}}>
                        {item.live.minLength.message}
                      </Text>
                    )}
                    {item.live.maxLength.error && (
                      <Text style={{color: 'red', marginTop: 5}}>
                        {item.live.maxLength.message}
                      </Text>
                    )}
                  </>
                );
              })}

              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <AddButton
                  lable={'Add another address'}
                  width={212}
                  onPress={addAddressHistory}
                />
              </View>
            </View>
            <View>
              <FieldLabel lable={'Employment history'} />
              {employeementHistory.map((item, index) => {
                return (
                  <View style={styles.subContainer}>
                    <InputField
                      lable={'Company name'}
                      placeholder={'Company name'}
                      value={item.companyName}
                      index={index}
                      type="companyName"
                      onChangeText={employeementHistoryValidation}
                    />
                    {item.companyName.error && (
                      <Text style={{color: 'red', marginTop: 5}}>
                        {item.companyName.message}
                      </Text>
                    )}
                    {item.companyName.minLength.error && (
                      <Text style={{color: 'red', marginTop: 5}}>
                        {item.companyName.minLength.message}
                      </Text>
                    )}
                    {item.companyName.maxLength.error && (
                      <Text style={{color: 'red', marginTop: 5}}>
                        {item.companyName.maxLength.message}
                      </Text>
                    )}
                    <InputField
                      lable={'Role'}
                      placeholder={'Postcode'}
                      value={item.role}
                      index={index}
                      type="role"
                      onChangeText={employeementHistoryValidation}
                    />
                    {item.role.error && (
                      <Text style={{color: 'red', marginTop: 5}}>
                        {item.role.message}
                      </Text>
                    )}
                    {item.role.minLength.error && (
                      <Text style={{color: 'red', marginTop: 5}}>
                        {item.role.minLength.message}
                      </Text>
                    )}
                    {item.role.maxLength.error && (
                      <Text style={{color: 'red', marginTop: 5}}>
                        {item.role.maxLength.message}
                      </Text>
                    )}
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <View>
                        <TimeInput
                          lable={'From'}
                          placeholder={'Mm/yy'}
                          value={item.from}
                          index={index}
                          type="from"
                          onChangeText={employeementHistoryValidation}
                          PhoneNumber
                        />
                        {item.from.error && (
                          <Text style={{color: 'red', marginTop: 5}}>
                            {item.from.message}
                          </Text>
                        )}
                        {/* {item.from.minLength.error && (
                          <Text style={{color: 'red', marginTop: 5}}>
                            {item.from.minLength.message}
                          </Text>
                        )} */}
                      </View>

                      <View style={{marginLeft: 17}}>
                        <TimeInput
                          lable={'To'}
                          placeholder={'Mm/yy'}
                          value={item.from}
                          index={index}
                          type="to"
                          onChangeText={employeementHistoryValidation}
                          PhoneNumber
                        />
                        {item.to.error && (
                          <Text style={{color: 'red', marginTop: 5}}>
                            {item.to.message}
                          </Text>
                        )}
                        {/* {item.to.minLength.error && (
                          <Text style={{color: 'red', marginTop: 5}}>
                            {item.to.minLength.message}
                          </Text>
                        )} */}
                      </View>
                    </View>
                  </View>
                );
              })}

              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <AddButton
                  lable={'Add another experience'}
                  width={241}
                  onPress={addCompanyHistory}
                />
              </View>
            </View>

            <View>
              <FieldLabel lable={'Criminal & bankruptcy'} />
              <View>
                <RadioButtons
                  onPress1={radioHandle1}
                  onPress2={radioHandle2}
                  count={radio}
                  lable={
                    'Are you currently under any charges of any violation of law? *'
                  }
                  required
                />
                <DurationTime
                  Label={'If yes, date of occurrence'}
                  date={dateLable ? dateLable : 'Date'}
                  onPress={() => setOpen(true)}
                  // error={validDate}
                />
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  mode={'date'}
                  maximumDate={new Date('2025-04-30')}
                  minimumDate={new Date('2000-01-01')}
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                    setDateLable(date.toDateString());
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
                {!dateLable && (
                  <Text
                    style={{
                      color: 'red',
                      fontFamily: 'Magenos-Medium',
                      marginTop: 5,
                      fontSize: 16,
                    }}>
                    {validDate}
                  </Text>
                )}
                <AccountInput
                  lable={'Place of occurrence'}
                  placeholder={'City'}
                  value={city}
                  onChangeText={cityValidation}
                  error={validCity}
                />
              </View>
            </View>

            <View style={styles.CommentContainer}>
              <Text style={styles.CommentLable}>Explanation</Text>
              <View style={styles.CommentBox}>
                <TextInput
                  value={description}
                  placeholder={'Description'}
                  style={styles.inputField}
                  onChangeText={descriptionValidation}
                  multiline={true}
                  numberOfLines={4}
                />
              </View>
              {!description && (
                <Text style={styles.error}>{validDescription}</Text>
              )}
            </View>
          </View>
          <RadioButtons
            lable={'Have you ever declared bankruptcy?'}
            onPress1={radioHandleFor1}
            onPress2={radioHandleFor2}
            count={radio2}
          />

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
    paddingHorizontal: 10,
    marginTop: -15,
  },
  error: {
    color: 'red',
    fontFamily: 'Magenos-Medium',
    marginTop: 8,
    fontSize: 16,
  },
});
