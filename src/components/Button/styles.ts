import { StyleSheet } from 'react-native';
import AppColors from '../../utills/AppColors';
import { width, height } from '../../utills/Dimensions';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import FontFamily from '../../utills/FontFamily';
const styles = StyleSheet.create({
  container: {
    height: height(5.5),
    width: width(87.5),
    borderRadius:width(1),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.primary,
    alignSelf: 'center',
  },
  text: {
    fontSize: width(4),
    color: AppColors.white,
    fontFamily:FontFamily.LatoRegular
  }
});
export default styles;
