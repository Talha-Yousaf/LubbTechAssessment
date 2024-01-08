import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import AppColors from '../../utills/AppColors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Entypo from 'react-native-vector-icons/Entypo';
const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();
const HomeStack = createStackNavigator();
const AddTaskStack = createStackNavigator();
import {width} from 'react-native-dimension';
import {useSelector} from 'react-redux';
import { LANGUAGE } from '../../utills/Constants';

function MyTabBar({state, descriptors, navigation, route, sub = false}) {

  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const language = useSelector(state => state.Config.language);

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.singleItemContainer}
            key={route.key}
            >
            <>
              {index == 0 && (
                <View style={styles.tabItem}>
                  <Feather
                    name="home"
                    size={width(7)}
                    color={isFocused ? AppColors.primary : AppColors.white}
                  />
                  <Text
                    style={[
                      styles.tabLabel,
                      isFocused && {color: AppColors.primary},
                    ]}>
                    {language===LANGUAGE.ENGLISH?"Home":"Home"}
                  </Text>
                </View>
              )}
              {index == 1 && (
                <View style={styles.addButton}>
                  <AntDesign name="plus"
                    size={width(7)}
                    color={AppColors.white}
                    />
                </View>
              )}
              {index == 2 && (
                <View style={styles.tabItem}>
                  <Ionicons
                    name="ios-person-sharp"
                    color={isFocused ? AppColors.primary : AppColors.white}
                    size={width(7)}
                  />
                  <Text
                    style={[
                      styles.tabLabel,
                      isFocused && {color: AppColors.primary},
                    ]}>
                    {language===LANGUAGE.ENGLISH?"Profile":"Profil"}
                  </Text>
                </View>
              )}
            </>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
function HomeStackNavigation() {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}
function AddTaskStackNavigator() {
  return (
    <AddTaskStack.Navigator initialRouteName="AddTask" screenOptions={{headerShown:false}}>

      <AddTaskStack.Screen name="AddTask" component={Profile} />
    
    </AddTaskStack.Navigator>
  );
}
function ProfileStackNavigation() {
  return (
    <ProfileStack.Navigator initialRouteName="Profile" screenOptions={{headerShown:false}}>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
}
export default BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{headerShown:false}}
      tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="HomeTab" component={HomeStackNavigation} />
      <Tab.Screen name="AddTaskTab" component={AddTaskStackNavigator} />
      <Tab.Screen name="ProfileTab" component={ProfileStackNavigation} />
    </Tab.Navigator>
  );
};