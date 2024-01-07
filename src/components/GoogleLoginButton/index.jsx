import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import GoogleImage from '../../assets/images/google.png';
import styles from './styles';
const GoogleLoginButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={GoogleImage} style={styles.iconImage} />
        <Text style={styles.loginWithGoogleText}>Login with Google</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoogleLoginButton;
