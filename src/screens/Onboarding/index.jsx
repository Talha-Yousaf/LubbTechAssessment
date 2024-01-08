import React from 'react';
import { View, Text, FlatList,Image } from 'react-native';
import {onBoarding} from "../../utills/DummyData";
import styles from './styles';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { TouchableOpacity } from 'react-native-gesture-handler';
const OnBoarding = ({navigation}) => {
const renderItem = ({item,index})=>{
    return(
        <View style={styles.mainContainer}>
            <TouchableOpacity 
            onPress={()=>{}}
            activeOpacity={0.6}
            >
                <Text style={styles.skipText}>SKIP</Text>
            </TouchableOpacity>
            <Image source={item.image} style={styles.image}/>
            <Text style={styles.headingText}>
                {item.heading}
            </Text>
            <Text style={styles.descriptionText}>
                {item.description}
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity>
                    <Text>{BACK}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>{"NEXT"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}  
return (
    <ScreenWrapper>
        <View>
        <FlatList 
         data={onBoarding}
         renderItem={renderItem}
         horizontal
         pagingEnabled
         showsHorizontalScrollIndicator={false}
        />
        </View>
    </ScreenWrapper>
  )
}

export default OnBoarding