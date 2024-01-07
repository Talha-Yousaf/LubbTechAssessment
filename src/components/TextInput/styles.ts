import {StyleSheet} from 'react-native';
import {height, width} from '../../utills/Dimensions';
import AppColors from '../../utills/AppColors';
import FontFamily from '../../utills/FontFamily';

const styles = StyleSheet.create({
  container: {
    width: width(87.5),
    alignSelf: 'center',
    marginBottom:height(1.5)
  },
  title: {
    color: AppColors.white,
    fontFamily:FontFamily.LatoRegular,
    marginVertical: height(1),
    width: width(90),
    fontSize:width(3.7)
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: height(6),
    borderWidth: 1,
    borderColor: AppColors.white50,
    borderRadius: 5,
    paddingHorizontal: width(2.5),
  },
  focus:{
    borderColor: AppColors.primary,
  },
  input: {
    height: height(6),
    fontSize:width(4),
    color:AppColors.white,
    width: '94%',
    paddingVertical: 0,
    alignSelf: 'center',
  },
  prefixIconContainer: {
    width: width(8.5),
    height: height(5.75),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  eyeContainer: {
    justifyContent: 'center',
    width: width(8.5),
    height: height(5.75),
    // alignItems: 'flex-end',
  },
  rightImage: {
    justifyContent: 'center',
    width: width(8.5),
    height: height(5.75),
    // alignItems: 'flex-end',
  },
  sufFixIcon: {
    width: width(7),
    alignSelf: 'center',
  },
});

export default styles;