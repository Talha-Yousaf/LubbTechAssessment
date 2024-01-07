import {StyleSheet} from "react-native";
import { width,height } from "../../utills/Dimensions";
import AppColors from "../../utills/AppColors";
import FontFamily from "../../utills/FontFamily";
const styles = StyleSheet.create({
    container:{
        width:width(85.7),
        marginTop:height(5),
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    line:{
        width:width(40),
        borderWidth:0.3,
        borderColor:AppColors.white50,
    },
    orText:{
        fontFamily:FontFamily.LatoRegular,
        color:AppColors.white50,
    }
});

export default styles