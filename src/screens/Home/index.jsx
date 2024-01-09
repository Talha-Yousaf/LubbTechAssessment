import React, { useEffect } from 'react';
import {View, Text} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import styles from './styles';
import { useSelector } from 'react-redux';
const Home = ({navigation}) => {

  const user = useSelector(state=>state.Auth.user)
  
  useEffect(()=>{
    
  },[])
  
  return (
    <ScreenWrapper>
      <View style={styles.mainContainer}>
        <Text>Home</Text>
      </View>
    </ScreenWrapper>
  );
};

export default Home;
