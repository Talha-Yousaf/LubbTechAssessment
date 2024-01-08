import {StyleSheet} from 'react-native';
import {height, width} from '../../utills/Dimensions';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  tabBar: {
    width: width(100),
    height: height(8),
    paddingHorizontal: width(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: AppColors.gray,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  singleItemContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '20%',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabLabel: {
    // fontFamily:FontFamily.PoppinsRegular,
    color: AppColors.white,
    fontSize: width(2.8),
    marginTop: height(0.5),
  },
  icon: {
    height: height(3.5),
    width: height(3.5),
    resizeMode: 'contain',
  },
  addButton:{
    height:width(16),
    width:width(16),
    borderRadius:width(16)/2,
    marginTop:-height(8),
    backgroundColor:AppColors.primary,
    justifyContent:"center",
    alignItems:"center",
  },
});
export default styles;
