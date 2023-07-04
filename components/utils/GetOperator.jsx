import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Telkomsel from '../../assets/Svg/Telkomsel.svg';
import Tri from '../../assets/Svg/Tri.svg';
import Xl from '../../assets/Svg/Xl.svg';
import Axis from '../../assets/Svg/Axis.svg';
import Smartfren from '../../assets/Svg/Smartfren.svg';
import Im3 from '../../assets/Svg/Im3.svg';

const GetOperator = ({operator}) => {
  switch (operator) {
    case 'Telkomsel':
      return (
        <View style={style.iconOperator}>
          <Telkomsel width={25} />
        </View>
      );
      break;
    case 'Indosat Ooredoo':
      return (
        <View style={style.iconOperator}>
          <Im3 width={30} height={20} />
        </View>
      );
      break;
    case 'XL Axiata':
      return (
        <View style={style.iconOperator}>
          <Xl width={30} height={20} />
        </View>
      );
      break;
    case 'Axis':
      return (
        <View style={style.iconOperator}>
          <Axis width={30} height={20} />
        </View>
      );
      break;
    case '3':
      return (
        <View style={style.iconOperator}>
          <Tri width={30} height={20} />
        </View>
      );
      break;
    case 'Smartfren':
      return (
        <View style={style.iconOperator}>
          <Smartfren width={60} height={20} />
        </View>
      );
      break;
    default:
      break;
  }
};

export default GetOperator;

const style = StyleSheet.create({
  iconOperator: {
    position: 'absolute',
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 7,
    borderRadius: 5,
    top: -16,
    left: 7,
  },
});
