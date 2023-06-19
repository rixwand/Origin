import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from '@mrkpatchaa/react-native-ionicons';

const AddButton = ({onPress, style}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={style}>
        <Icon name="add-circle" size={17} color="#2E5392" />
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;
