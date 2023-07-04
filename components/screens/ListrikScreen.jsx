import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import * as color from '../../assets/color';
import {TextInput} from 'react-native-gesture-handler';
import Listrik from '../utils/SmallCard';
import Confirmation from '../utils/Confirmation';
const ListrikScreen = () => {
  const [listrik, setListrik] = useState();
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.listrikType}>Jenis Produk Listrik</Text>
        <View
          style={{
            borderBottomColor: color.darkblue,
            borderBottomWidth: 1,
            marginBottom: 20,
          }}>
          <Picker
            itemStyle={{}}
            style={{
              marginVertical: -15,
              marginHorizontal: -15,
              color: color.darkblue,
              fontSize: 25,
            }}
            fontFamily={'SourceSansPro-Semibold'}
            selectedValue={listrik}
            mode="dropdown"
            dropdownIconColor={'#2E5392'}
            dropdownIconRippleColor={color.lightblue}
            onValueChange={(itemValue, itemIndex) => setListrik(itemValue)}>
            <Picker.Item label="Token Listrik" value="token" />
            <Picker.Item label="Tagihan Listrik" value="tagihan" />
          </Picker>
        </View>
        <Text style={styles.listrikType}>No. Meter/ID pelanggan</Text>
        <TextInput style={styles.idPel} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.listrikType}>Pilih Jumlah Token :</Text>
          <Text style={styles.costumer}>Pelanggan</Text>
        </View>
        <View style={styles.productWrapper}>
          <Listrik produk={'20.000'} price={'Rp 20.045'} active />
          <Listrik produk={'50.000'} price={'Rp 50.045'} />
          <Listrik produk={'100.000'} price={'Rp 100.045'} />
          <Listrik produk={'200.000'} price={'Rp 200.045'} />
          <Listrik produk={'500.000'} price={'Rp 500.045'} />
          <Listrik produk={'1.000.000'} price={'Rp 1.000.045'} />
        </View>
      </View>
      <Confirmation total={'Rp 20.045'} />
    </View>
  );
};

export default ListrikScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: color.lightblue,
    flex: 1,
    height: '100%',
  },
  container: {
    backgroundColor: 'white',
    padding: 20,
    elevation: 2,
    borderRadius: 5,
    margin: 15,
  },
  listrikType: {
    paddingBottom: 3,
    fontFamily: 'SourceSansPro-Semibold',
    color: color.darkblue,
  },
  idPel: {
    borderBottomColor: color.darkblue,
    borderBottomWidth: 1,
    paddingVertical: 1,
    fontFamily: 'SourceSansPro-Semibold',
    color: color.darkblue,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  productWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 15,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  costumer: {
    fontFamily: 'SourceSansPro-Semibold',
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: color.lightblue,
    color: color.darkblue,
    marginTop: -5,
    fontSize: 12,
    verticalAlign: 'middle',
    borderRadius: 5,
    fontWeight: 'bold',
  },
});
