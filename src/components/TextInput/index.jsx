import React, { forwardRef,useState,useRef} from 'react';
import {Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import {width} from '../../utills/Dimensions';
import AppColors from '../../utills/AppColors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const Input = ({
  title,
  prefixIcon,
  hidden = false,
  dropDown = false,
  placeholder,
  containerStyles = {},
  multiline = false,
  inputStyle = {},
  inputContainerStyles,
  textAlignVertical,
  rightIcon = false,
  source,
  value,
  onChangeText,
  maxLength=200,
  editable = true,
  nummeric = false,
  alphabets = false,
},ref ) => {
  const [eye, setEye] = useState(hidden);
  const [focus,setFocus] = useState(false);  
  return (
    <View style={[styles.container, containerStyles]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={[styles.inputContainer, !editable && {backgroundColor:AppColors.black50},focus&&styles.focus,inputContainerStyles]}>
        {prefixIcon && (
          <View style={styles.prefixIconContainer}>{prefixIcon()}</View>
        )}
        <TextInput
          ref ={ref}
          keyboardType ={nummeric?"numeric":"default"}
          value={value}
          multiline={multiline}
          textAlignVertical={textAlignVertical}
          maxLength = {maxLength}
          onChangeText = {onChangeText!=null?(text)=>{
            onChangeText(text)
          }:
          ()=>{}
          // :(text)=>{
          //   let regex = /^[a-zA-Z ]*$/
          //   if(alphabets &&  regex.test(text)){
          //     setInputText(text)
          //   }
          //   else if(!alphabets){
          //     setInputText(text)
          //   }
          // }
        }
          onFocus={()=>setFocus(true)}
          onEndEditing={()=>setFocus(false)}
          editable = {editable}
          style={[
            styles.input,
            inputStyle,
            hidden && {width: '90%'},
            dropDown && {width: '90%'},
            prefixIcon && {width: '90%'},
            hidden && prefixIcon && {width: '80%'},
            dropDown && prefixIcon && {width: '80%'},
          ]}
          placeholder={placeholder}
          placeholderTextColor={AppColors.white50}
          secureTextEntry={eye}
        />
        {hidden && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setEye(!eye)}
            style={styles.eyeContainer}>
            <Entypo
              name={eye ? 'eye' :'eye-with-line'}
              size={width(6)}
              color={AppColors.white}
            />
          </TouchableOpacity>
        )}
        {rightIcon && (
          <TouchableOpacity
            onPress={() => setEye(!eye)}
            style={styles.rightImage}>
            <Image source={source} />
          </TouchableOpacity>
        )}
        {dropDown && (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {}}
            style={styles.eyeContainer}>
            <AntDesign
              name={'down'}
              size={width(4)}
              color={AppColors.primary}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default forwardRef(Input);