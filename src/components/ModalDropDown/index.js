import React, { forwardRef ,useState } from 'react';
import { View, Text } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import styles from './styles';
const ModalDropDown = ({
    children,
    data,
    onSelect,
    containerStyles={},
    textStyle={},
},ref) => {
    return (
        <ModalDropdown
          defaultValue={'1'}
          ref={ref}
          showsVerticalScrollIndicator={false}
          onSelect={onSelect}
          options={data}
          style={containerStyles}
          dropdownTextStyle={[styles.textStyle,textStyle]}
          defaultTextStyle={styles.dropdownStyle}
          dropdownStyle={styles.dropdownStyle}
          renderSeparator={() => <View />}> 
           {children}
          </ModalDropdown>
    )
}

export default forwardRef(ModalDropDown) 