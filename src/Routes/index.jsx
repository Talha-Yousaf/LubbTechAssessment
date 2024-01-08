import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './BottomTab';
import Login from '../screens/Login';
import ProfileSetup from '../screens/ProfileSetup';
import Onboarding from '../screens/Onboarding';
import {useSelector} from 'react-redux';
import Loader from '../components/Loader';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
const Stack = createStackNavigator();

GoogleSignin.configure({
  webClientId: '440300609647-c6gk6s9lj5726076sl8k82ousi3c8vjp.apps.googleusercontent.com',
});
export default function Routes() {
    const isLogin = useSelector(state => state.Auth.isLogin)
  return (
    <NavigationContainer>
      <Loader/>
      {!isLogin ? (
        <Stack.Navigator initialRouteName="Onboarding" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ProfileSetup" component={ProfileSetup} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
        </Stack.Navigator>
      ) : (
        <BottomTab />
      )}
    </NavigationContainer>
  );
}

