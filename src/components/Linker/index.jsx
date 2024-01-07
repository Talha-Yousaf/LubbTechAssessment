import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
const ForgetPassword = ({question, hint, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question + ' '}</Text>
      <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
        <Text style={styles.forgetText}>{hint}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ForgetPassword;
