import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Confirmation = ({total, onPress}) => {
  return (
    <View style={style.confirmation}>
      <View style={{display: 'flex', flexDirection: 'column'}}>
        <Text style={{fontSize: 14, ...style.totalBayar}}>Total Bayar</Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            ...style.totalBayar,
          }}>
          {total}
        </Text>
      </View>
      <TouchableOpacity onPress={onPress} style={style.confirmButton}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'SourceSansPro-Semibold',
            fontSize: 14,
          }}>
          Lanjutkan
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Confirmation;

const style = StyleSheet.create({
  confirmation: {
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    display: 'flex',
    flexDirection: 'row',
    padding: 22,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    borderWidth: 1,
    borderColor: '#B2CFFF',
    overflow: 'hidden',
    marginBottom: 0,
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
  },
  totalBayar: {
    fontFamily: 'SourceSansPro-Semibold',
    color: '#2E5392',
    padding: 1,
  },
  confirmButton: {
    backgroundColor: '#2E5392',
    paddingVertical: 7,
    paddingHorizontal: 18,
    borderRadius: 5,
    marginRight: 10,
  },
});
