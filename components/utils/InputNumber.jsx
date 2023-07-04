import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Contact from '../../assets/Svg/contact.svg';

const InputNumber = ({onChangeText, phone}) => {
  return (
    <View style={style.number}>
      <Text
        style={{
          color: '#2E5392',
          marginTop: 8,
          fontFamily: 'SourceSansPro-Regular',
          fontSize: 12,
        }}>
        Masukkan nomor telpon
      </Text>
      <View style={style.inputWrapper}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <TextInput
            style={style.phoneInput}
            keyboardType="phone-pad"
            onChangeText={onChangeText}
            value={phone}
          />
        </View>
        <TouchableOpacity style={{marginLeft: 15}}>
          <Contact width={29} height={37} color="#2E5392" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputNumber;

const style = StyleSheet.create({
  number: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 20,
  },
  inputWrapper: {
    display: 'flex',
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 17,
    height: 40,
    paddingHorizontal: 10,
    borderColor: '#ADD4F2',
    borderRadius: 5,
    width: 277,
    // paddingTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  phoneInput: {
    fontSize: 18,
    fontFamily: 'SourceSansPro-Semibold',
    color: '#2E5392',
    padding: 0,
    width: '100%',
  },
});
