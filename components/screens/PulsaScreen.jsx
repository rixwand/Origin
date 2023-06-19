import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import React from 'react';
// import {ScrollView} from 'react-native-gesture-handler';
import Contact from '../../assets/Svg/contact.svg';

const PulsaScreen = () => {
  return (
    <View style={style.container}>
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
        <TextInput inp style={style.numberInput}></TextInput>
        {/* <Contact width={29} height={37} color="#2E5392" /> */}
      </View>
    </View>
  );
};

export default PulsaScreen;

const style = StyleSheet.create({
  container: {
    backgroundColor: '#E2EFFD',
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  number: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 20,
  },
  numberInput: {
    borderWidth: 2,
    marginTop: 5,
    marginBottom: 17,
    fontSize: 18,
    height: 40,
    paddingHorizontal: 13,
    borderColor: '#ADD4F2',
    borderRadius: 5,
    width: 277,
    fontFamily: 'SourceSansPro-Semibold',
    color: '#2E5392',
    fontWeight: 'bold',
    // paddingVertical:
    paddingBottom: 6,
  },
});
