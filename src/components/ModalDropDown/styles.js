import {StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
    dropdownStyle: {
        width: width(87),
        marginLeft:width(0.5),
        marginTop:-height(1.5),
        paddingHorizontal:width(2),
        shadowColor: AppColors.sementic20,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      },
      textStyle:{
        fontSize:width(3),
        color:AppColors.black,
      },
});
export default styles