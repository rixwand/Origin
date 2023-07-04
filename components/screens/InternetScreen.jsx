import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import InputNumber from '../utils/InputNumber';
import GetOperator from '../utils/GetOperator';
import LargeCard from '../utils/LargeCard';

const data = {
  title: 'Telkomsel Data Flash 110 MB / 7 Hari',
  desc: 'Telkomsel Data Flash 110 MB / 7 Hari',
  price: '3.960',
};

const InternetScreen = () => {
  const [phone, setPhone] = useState();
  const [validation, setValidalidation] = useState({
    valid: true,
    operator: 'Smartfren',
  });

  const phoneInputHandler = text => {
    const number = text.replace(/[^0-9]/g, '');
    setPhone(number);
    setValidalidation(GetOperator(number));
  };
  return (
    <View style={{flex: 1, backgroundColor: '#E2EFFD'}}>
      <ScrollView style={styles.container}>
        <InputNumber phone={phone} onChangeText={phoneInputHandler} />
        <View style={styles.product}>
          <GetOperator operator={validation.operator} />
          <LargeCard {...data} />
          <LargeCard {...data} />
          <LargeCard {...data} />
          <LargeCard {...data} />
          <LargeCard {...data} />
          <LargeCard {...data} />
          <LargeCard {...data} />
          <LargeCard {...data} />
          <LargeCard {...data} />
        </View>
      </ScrollView>
    </View>
  );
};

export default InternetScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  product: {
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 5,
    marginBottom: 130,
    paddingBottom: 10,
    paddingTop: 20,
    paddingHorizontal: 10,
    gap: 8,
  },
});
