import React from 'react';
import {View, Text,FlatList} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import styles from './styles';
const Home = ({navigation}) => {
  return (
    <ScreenWrapper>
      <View style={styles.mainContainer}>
        <Text>Home</Text>
      </View>
    </ScreenWrapper>
  );
};

export default Home;
