import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
const LineWithOr = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line}/>
      <Text style={styles.orText}>or</Text>
      <View style={styles.line}/>
    </View>
  );
};

export default LineWithOr;
