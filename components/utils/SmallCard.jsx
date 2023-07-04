import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
const SmallCard = ({active, produk, price}) => {
  const bgcolor = active ? '#2E5392' : '#E2EFFD';
  const color = active ? '#E2EFFD' : '#2E5392';
  return (
    <TouchableOpacity style={{backgroundColor: bgcolor, ...style.pulsa}}>
      <Text
        style={{
          paddingTop: 10,
          paddingHorizontal: 16,
          fontFamily: 'SourceSansPro-Semibold',
          fontSize: 16,
          color,
        }}>
        {produk}
      </Text>
      <Text
        style={{
          paddingTop: 1,
          paddingHorizontal: 16,
          fontFamily: 'SourceSansPro-Semibold',
          fontSize: 16,
          color,
          fontWeight: 'bold',
        }}>
        {price}
      </Text>
    </TouchableOpacity>
  );
};

export default SmallCard;

const style = StyleSheet.create({
  pulsa: {
    width: '48%',
    borderRadius: 7,
    height: 70,
  },
});
