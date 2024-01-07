import {StyleSheet,Platform} from "react-native";
import { width,height } from "../../utills/Dimensions";
import AppColors from "../../utills/AppColors";
import FontFamily from "../../utills/FontFamily";
const styles = StyleSheet.create({
    container:{
        width:width(85.7),
        marginTop:Platform.OS=="android"? height(5):height(4),
        paddingVertical:height(1.5),
        borderWidth:1,
        borderColor:AppColors.primary,
        justifyContent:"center",
        alignItems:"center",
    },
    innerContainer:{
        width:width(33),
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    iconImage:{
        width:width(6),
        height:width(6),
    },
    loginWithGoogleText:{
        fontSize:width(3),
        fontFamily:FontFamily.LatoRegular,
        color:AppColors.white,
    },
});
export default styles