import {StyleSheet} from "react-native";
import { width,height } from "../../utills/Dimensions";
import AppColors from "../../utills/AppColors";
import FontFamily from "../../utills/FontFamily";
const styles = StyleSheet.create({
    mainContainer:{
        width:width(100),
        height:height(100),
        backgroundColor:AppColors.black,
    },
    skipText:{
        fontFamily:FontFamily.LatoRegular,
        fontSize:width(4),
        marginLeft:width(2),
        marginTop:height(2),
        color:AppColors.gray,
    },
    image:{
        width:width(67),
        height:height(40),
        alignSelf:"center",
    },
    headingText:{
        fontSize:width(8),
        marginTop:height(6),
        fontFamily:FontFamily.LatoBold,
        color:AppColors.white,
        alignSelf:"center",
    },
    descriptionText:{
        width:width(70),
        fontSize:width(4),
        marginTop:height(6),
        fontFamily:FontFamily.LatoRegular,
        color:AppColors.white,
        alignSelf:"center",
        textAlign:"center",
    },
    buttonContainer:{
        width:width(87.5),
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",  
     },
});
export default styles;