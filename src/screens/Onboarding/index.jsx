import React, {useRef, useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {onBoarding} from '../../utills/DummyData';
import styles from './styles';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import { login } from '../../Redux/Actions/Auth';
import { setLoaderVisible } from '../../Redux/Actions/Config';
import { showMessage } from 'react-native-flash-message';
import { setNewUserToOld } from '../../Firebase/Auth';
const OnBoarding = ({navigation, route}) => {
    const [cureentActive, setCurrentActive] = useState(0);
    const listRef = useRef();
    const user = route?.params?.user;
    const dispatch = useDispatch();
  const renderItem = ({item, index}) => {
    const onNext = async() => {
      if (index == 0) {
        listRef.current.scrollToIndex({
          animated: true,
          index: index + 1,
          viewPosition: 0,
        });
        setCurrentActive(index + 1);
      } else {
        loginToApp()
      }
    };
    const onBackPress = () => {
      if (index == 1) {
        listRef.current.scrollToIndex({
          animated: true,
          index: index - 1,
          viewPosition: 0,
        });
        setCurrentActive(index - 1);
      }
    };
    const loginToApp = async() => {
        try{
            dispatch(setLoaderVisible(true));
            await setNewUserToOld(user.uid)
            dispatch(setLoaderVisible(false));
            dispatch(login({...user}))
        }
        catch(e){
            showMessage({
                message:"Error",
                description:e,
                type:"danger"
            });
        }
    };
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={loginToApp} activeOpacity={0.6}>
          <Text style={styles.skipText}>SKIP</Text>
        </TouchableOpacity>
        <Image source={item.image} style={styles.image} />
        <View style={styles.paginationContainer}>
          <View
            style={[
              cureentActive == 0
                ? styles.paginationLineActive
                : styles.paginationLine,
            ]}
          />
          <View
            style={[
              cureentActive == 1
                ? styles.paginationLineActive
                : styles.paginationLine,
            ]}
          />
        </View>
        <Text style={styles.headingText}>{item.heading}</Text>
        <Text style={styles.descriptionText}>{item.description}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.backContainer}
            activeOpacity={0.6}
            disabled={index == 0}
            onPress={onBackPress}>
            <Text style={styles.backText}>{'BACK'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onNext}
            activeOpacity={0.6}
            style={styles.nextContainer}>
            <Text style={styles.nextText}>
              {index == 0 ? 'NEXT' : 'Get Started'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <ScreenWrapper>
      <View>
        <FlatList
          ref={listRef}
          data={onBoarding}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
        />
      </View>
    </ScreenWrapper>
  );
};

export default OnBoarding;
