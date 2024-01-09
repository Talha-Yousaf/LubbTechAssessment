import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import TextInput from '../../components/TextInput';
import {useDispatch, useSelector} from 'react-redux';
import { setLoaderVisible } from '../../Redux/Actions/Config';
import {showMessage} from 'react-native-flash-message';
import {LANGUAGE} from '../../utills/Constants';
import styles from './styles';
import Button from '../../components/Button';
import LineWithOr from '../../components/LineWithOr';
import Linker from '../../components/Linker';
import GoogleLoginButton from '../../components/GoogleLoginButton';
import {loginMethod,googleSigninMethod} from "../../Firebase/Auth";
import { login } from '../../Redux/Actions/Auth';
import AppColors from '../../utills/AppColors';
const Login = ({navigation}) => {
  const language = useSelector(state => state.Config.language);
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading,setIsLoading] = useState(false);

  const loginFunction = async () => {
    let error = false;
    let message = '';
    try {
      if (email.trim() === '') {
        error = true;
        message = 'Email should not be empty';
      }
      else if (!email.trim().toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )){
        error = true;
        message = 'Invalid Email';
      } 
      else if (password.trim() ==='') {
        error = true;
        message = 'Passsword should not be empty';
      }
      else if(password.trim().length <8){
        error = true;
        message = 'Passsword should be atleast 8 characters';
      }
      if (error) {
        dispatch(setLoaderVisible(false));
        showMessage({
          message: 'Error',
          description: message,
          type: 'danger',
        });
      } else {
        dispatch(setLoaderVisible(true));
        const res = await loginMethod(email.toLocaleLowerCase(), password);
        if(res.newUser){
          dispatch(setLoaderVisible(false))
          navigation.navigate("ProfileSetup",{user:res})
        }
        else{
          dispatch(setLoaderVisible(false))
          dispatch(login({...res}))
        }
      }
    } catch (e) {
      dispatch(setLoaderVisible(false));
      showMessage({
        message: e,
        description: "Error Here",
        type: 'danger',
      });
    }
  };
  const handleGoogleSignin = async()=>{
    try{
      setIsLoading(true);
      const res = await googleSigninMethod();
      setIsLoading(false)
      if(res.newUser){
        navigation.navigate("ProfileSetup",{user:res})
      }
      else{
        dispatch(login({...res}))
      }
    }
    catch(e){
      showMessage({
        message: e,
        description: "Error Here",
        type: 'danger',
      });
    }
  }
  return (
    <ScreenWrapper>
      <View style={styles.mainContainerDark}>
        <View style={styles.container}>
          <View style={styles.loginTextContainer}>
            <Text style={styles.loginText}>Login</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder={
                language === LANGUAGE.ENGLISH ? 'Email' : 'Adresa de e-mail'
              }
              title={'Email'}
              value={email}
              onChangeText={text => setEmail(text)}
              editable={!isLoading}
            />
            <TextInput
              placeholder={
                language === LANGUAGE.ENGLISH ? 'Password' : 'Parola'
              }
              title={'Password'}
              hidden
              value={password}
              editable={!isLoading}
              onChangeText={text => {
                setPassword(text);
              }}
              
            />
          </View>
          <Button
            title={'Login'}
            containerStyle={styles.buttonContainerStyle}
            onPress={loginFunction}
            disabled={isLoading}
          />
          <LineWithOr />
          <GoogleLoginButton onPress={handleGoogleSignin} isLoading={isLoading} loaderColor={AppColors.white}/>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;
