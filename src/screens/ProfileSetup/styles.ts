import {StyleSheet} from "react-native";
import { width,height } from "../../utills/Dimensions";
import AppColors from "../../utills/AppColors";
import FontFamily from "../../utills/FontFamily";
const styles = StyleSheet.create({
    mainContainerLight:{
        flex:1,
        backgroundColor:AppColors.white,
        alignItems:"center",
    },
    mainContainerDark:{
        flex:1,
        backgroundColor:AppColors.black,
        alignItems:"center",
    },
    container:{
        width:width(87.5),
        marginTop:height(5),
    },
    loginTextContainer:{
        marginVertical:height(10),

    },
    loginText:{
        fontSize:width(10),
        fontFamily:FontFamily.LatoBold,
        color:AppColors.white
    },
    textInputContainer:{
        flexDirection:"column",
        justifyContent:"space-between",
    },
    buttonContainerStyle:{
        marginTop:height(6)
    },
    dropDownContainerStyles:{
        backgroundColor:AppColors.black,
    },

});

export default styles