import React from 'react';
import {View, Text, TouchableOpacity, Image,ActivityIndicator} from 'react-native';
import GoogleImage from '../../assets/images/google.png';
import styles from './styles';
import AppColors from '../../utills/AppColors';
const GoogleLoginButton = ({
  onPress=()=>{},
  isLoading=false,
  loaderColor=AppColors.white
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={styles.container}>
      { isLoading?
         <ActivityIndicator color={loaderColor} size="small" />
        :
        <View style={styles.innerContainer}>
        <Image source={GoogleImage} style={styles.iconImage} />
        <Text style={styles.loginWithGoogleText}>Login with Google</Text>
      </View>
      }
    </TouchableOpacity>
  );
};

export default GoogleLoginButton;
