import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import TextInput from '../../components/TextInput';
import {useDispatch, useSelector} from 'react-redux';
import {setLoaderVisible} from '../../Redux/Actions/Config';
import {showMessage} from 'react-native-flash-message';
import {LANGUAGE} from '../../utills/Constants';
import styles from './styles';
import Button from '../../components/Button';
import ModalDropDown from '../../components/ModalDropDown';
import {genders} from "../../utills/DummyData";
import { profileSubmit } from '../../Firebase/Auth';

const ProfileSetup = ({route, navigation}) => {
  const language = useSelector(state => state.Config.language);
  const user = route?.params?.user;
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [age, setAge] = useState("20");
  const [gender, setGender] = useState(genders[0]);
  useEffect(()=>{
    console.log(user);
  },[])
  const submitForm = async() => {
    let error = false;
    let message = '';
    if (name.trim() === '') {
      error = true;
      message = 'Name should not be empty';
    }
    else if (age<1 && age>200){
      error = true;
      message = 'Invalid Age';
    } 
    if (error) {
      dispatch(setLoaderVisible(false));
      showMessage({
        message: 'Error',
        description: message,
        type: 'danger',
      });
    } else {
      try{
        dispatch(setLoaderVisible(true));
        const res = await profileSubmit(user.uid,name,age,gender);
        dispatch(setLoaderVisible(false));
        navigation.navigate("Onboarding",{user});
      }
      catch(e){
        dispatch(setLoaderVisible(false))
        showMessage({
          message: e,
          description: message,
          type: 'danger',
        });
      }
    }
  };
  return (
    <ScreenWrapper>
      <View style={styles.mainContainerDark}>
        <View style={styles.container}>
          <View style={styles.loginTextContainer}>
            <Text style={styles.loginText}>Profile Setup</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder={
                language === LANGUAGE.ENGLISH ? 'name' : 'Adresa de e-mail'
              }
              title={'Name'}
              value={name}
              onChangeText={text => setName(text)}
            />
            <TextInput
              placeholder={language === LANGUAGE.ENGLISH ? 'Age' : 'Parola'}
              nummeric
              title={'Age'}
              value={age}
              onChangeText={text => {
                setAge(text);
              }}
            />
            <ModalDropDown data={genders}
             onSelect={(index) => {setGender(genders[index])}}
             containerStyles={styles.dropDownContainerStyles}
            >
            <TextInput
              // placeholder={language === LANGUAGE.ENGLISH ? 'Gender' : 'Parola'}
              dropDown
              editable={false}
              title={'Gender'}
              value={gender}
            />
            </ModalDropDown>
          </View>
          <Button
            title={'Submit'}
            containerStyle={styles.buttonContainerStyle}
            onPress={submitForm}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ProfileSetup;
