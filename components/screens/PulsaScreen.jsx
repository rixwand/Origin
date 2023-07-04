import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {getOperator} from 'no-telp';
import Pulsa from '../utils/SmallCard';
import Confirmation from '../utils/Confirmation';
import GetOperator from '../utils/GetOperator';
import InputNumber from '../utils/InputNumber';

const PulsaScreen = () => {
  const [phone, setPhone] = useState();
  const [validation, setValidalidation] = useState({
    valid: true,
    operator: 'Smartfren',
  });

  const phoneInputHandler = text => {
    const number = text.replace(/[^0-9]/g, '');
    setPhone(number);
    setValidalidation(getOperator(number));
  };
  return (
    <View style={{flex: 1, backgroundColor: '#E2EFFD'}}>
      <ScrollView style={style.container}>
        <InputNumber phone={phone} onChangeText={phoneInputHandler} />

        {validation.valid && (
          <View style={style.product}>
            <GetOperator operator={validation.operator} />
            <TouchableOpacity style={{width: '45%', ...style.subTitle}}>
              <Text style={style.subMenu}>Pulsa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '55%', ...style.subTitle}}>
              <Text style={style.subMenu}>Pulsa Transfer</Text>
            </TouchableOpacity>
            <View style={style.pulsaWrapper}>
              <Pulsa active={true} produk={'5.000'} price={'Rp 5.120'} />
              <Pulsa produk={'5.000'} price={'Rp 5.120'} />
              <Pulsa produk={'5.000'} price={'Rp 5.120'} />
              <Pulsa produk={'5.000'} price={'Rp 5.120'} />
              <Pulsa produk={'5.000'} price={'Rp 5.120'} />
              <Pulsa produk={'5.000'} price={'Rp 5.120'} />
              <Pulsa produk={'5.000'} price={'Rp 5.120'} />
              <Pulsa produk={'5.000'} price={'Rp 5.120'} />
              <Pulsa produk={'5.000'} price={'Rp 5.120'} />
              <Pulsa produk={'5.000'} price={'Rp 5.120'} />
              <Pulsa produk={'5.000'} price={'Rp 5.120'} />
              <Pulsa produk={'5.000'} price={'Rp 5.120'} />
              <Pulsa produk={'5.000'} price={'Rp 5.120'} />
              <Pulsa produk={'5.000'} price={'Rp 5.120'} />
              <Pulsa produk={'5.000'} price={'Rp 5.120'} />
              <Pulsa produk={'5.000'} price={'Rp 5.120'} />
              <Pulsa produk={'5.000'} price={'Rp 5.120'} />
              <Pulsa produk={'5.000'} price={'Rp 5.120'} />
              <Pulsa produk={'5.000'} price={'Rp 5.120'} />
              <Pulsa produk={'5.000'} price={'Rp 5.120'} />
              <Pulsa produk={'5.000'} price={'Rp 5.120'} />
              <Pulsa produk={'5.000'} price={'Rp 5.120'} />
            </View>
          </View>
        )}
      </ScrollView>
      <Confirmation total={'Rp 5.120'} />
    </View>
  );
};

export default PulsaScreen;

const style = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 20,
  },

  product: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    borderRadius: 5,
    flexWrap: 'wrap',
    marginBottom: 130,
  },
  subTitle: {
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 15,
  },
  subMenu: {
    fontFamily: 'SourceSansPro-Semibold',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2E5392',
  },

  pulsaWrapper: {
    width: '100%',
    padding: 15,
    paddingTop: 0,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 15,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
});
