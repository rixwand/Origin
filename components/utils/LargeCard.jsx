import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import * as color from '../../assets/color';

const LargeCard = ({title, desc, price, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={{width: '70%'}}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDesc}>{desc}</Text>
      </View>
      <Text style={styles.price}>{price}</Text>
    </TouchableOpacity>
  );
};

export default LargeCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: color.lightblue,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 13,
    borderRadius: 5,
    flexDirection: 'row',
  },
  cardTitle: {
    fontFamily: 'SourceSansPro-Semibold',
    fontSize: 12,
    color: color.darkblue,
    fontWeight: 'bold',
  },
  cardDesc: {
    fontSize: 10,
    fontFamily: 'SourceSansPro-Semibold',
    paddingTop: 5,
    color: color.darkblue,
  },
  price: {
    fontFamily: 'SourceSansPro-Semibold',
    color: color.darkblue,
    fontWeight: 'bold',
    fontSize: 16,
    verticalAlign: 'middle',
    width: '30%',
    textAlign: 'right',
    paddingEnd: 10,
  },
});
