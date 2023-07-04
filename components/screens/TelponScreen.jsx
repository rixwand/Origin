import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import InputNumber from '../utils/InputNumber';
import GetOperator from '../utils/GetOperator';
import * as color from '../../assets/color';
import LargeCard from '../utils/LargeCard';

const data = {
  title: 'Telkomsel Telepon Paket Spesial / 7 Hari',
  desc: 'Telepon unlimited sesama + 100-250 menit all op (paket yang didapat berbeda tiap nomor dan zona',
  price: '12.310',
};

const TelponScreen = () => {
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

export default TelponScreen;

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
