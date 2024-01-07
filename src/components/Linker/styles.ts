import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import {width,height} from "../../utills/Dimensions"
const styles = StyleSheet.create({
  container:{
    width:width(87.5),
    marginTop:height(2),  
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
  },
  questionText:{
    fontSize:width(3.7),
    color:AppColors.white,
  },
  forgetText:{
    fontSize:width(3.7),
    color:AppColors.primary,
  }
});
export default styles;