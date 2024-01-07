import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import ProfileSetup from '../screens/ProfileSetup';
import Dashboard from '../screens/Dashboard';
import {useSelector} from 'react-redux';
import Loader from '../components/Loader';
import Home from '../screens/Home';
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
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ProfileSetup" component={ProfileSetup} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Home" headerMode="none">
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

