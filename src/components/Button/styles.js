import { StyleSheet } from 'react-native';
import AppColors from '../../utills/AppColors';
import { width, height } from 'react-native-dimension';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(5),
    backgroundColor: AppColors.green,
    height: verticalScale(60),
    width: scale(300),
    alignSelf: 'center',
  },
  text: {
    color: AppColors.white,
    fontSize: width(4),
  }
});
export default styles;
