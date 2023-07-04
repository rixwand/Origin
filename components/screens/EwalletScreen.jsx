import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import * as color from '../../assets/color';
import Dana from '../../assets/Svg/Dana.svg';
import Gojek from '../../assets/Svg/Gojek.svg';
import Ovo from '../../assets/Svg/Ovo.svg';
import Jago from '../../assets/Svg/Jago.svg';
import LinkAja from '../../assets/Svg/LinkAja.svg';
import ShopeePay from '../../assets/Svg/ShopeePay.svg';
import Doku from '../../assets/Svg/Doku.svg';
import Grab from '../../assets/Svg/Grab.svg';

const EwalletScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.icon}>
          <Dana width={60} height={60} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Gojek width={60} height={60} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Ovo width={60} height={60} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Jago width={60} height={60} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <LinkAja width={60} height={60} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <ShopeePay width={60} height={60} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Doku width={60} height={60} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Grab width={60} height={60} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EwalletScreen;

const styles = StyleSheet.create({
  root: {
    minHeight: '100%',
    backgroundColor: color.lightblue,
    padding: 15,
  },
  container: {
    padding: 25,
    backgroundColor: 'white',
    flexWrap: 'wrap',
    rowGap: 25,
    columnGap: 10,
    borderRadius: 5,
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
  },
  icon: {
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 5,
    padding: 5,
  },
});
