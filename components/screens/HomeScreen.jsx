import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AddButton from '../Buttons/AddButton';
import {Icon} from '@mrkpatchaa/react-native-ionicons';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#E2EFFD', height: '100%'}}>
      <View style={style.home}>
        <Text style={style.logo}>Origin</Text>
        <View style={style.bgSaldo}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={style.saldo}>SALDO</Text>
            <AddButton
              style={{marginTop: 3, marginLeft: 3}}
              onPress={() => {}}
            />
          </View>
          <Text
            style={{
              fontSize: 24,
              position: 'absolute',
              fontFamily: 'SourceSansPro-SemiBold',
              right: 35,
              color: '#2E5392',
            }}>
            537.000
          </Text>
        </View>
      </View>
      <View style={style.feature}>
        <TouchableOpacity
          style={style.icon}
          onPress={() => navigation.navigate('Pulsa')}>
          <Icon name="phone-portrait-outline" size={50} color="#2E5392" />
          <Text style={style.subtitle}>Pulsa</Text>
        </TouchableOpacity>
        <View style={style.icon}>
          <Icon name="globe-outline" size={50} color="#2E5392" />
          <Text style={style.subtitle}>Internet</Text>
        </View>
        <View style={style.icon}>
          <Icon name="call-outline" size={50} color="#2E5392" />
          <Text style={style.subtitle}>Telpon</Text>
        </View>
        <View style={style.icon}>
          <Icon name="mail-outline" size={50} color="#2E5392" />
          <Text style={style.subtitle}>SMS</Text>
        </View>
        <View style={style.icon}>
          <Icon name="flash-outline" size={50} color="#2E5392" />
          <Text style={style.subtitle}>Listrik</Text>
        </View>
        <View style={style.icon}>
          <Icon name="game-controller-outline" size={50} color="#2E5392" />
          <Text style={style.subtitle}>Games</Text>
        </View>
        <View style={style.icon}>
          <Icon name="wallet-outline" size={50} color="#2E5392" />
          <Text style={style.subtitle}>E-Wallet</Text>
        </View>
        <View style={style.icon}>
          <Icon
            name="ellipsis-horizontal-circle-outline"
            size={50}
            color="#2E5392"
          />
          <Text style={style.subtitle}>More</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  home: {
    backgroundColor: '#2E5392',
    height: 252,
  },
  logo: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    fontFamily: 'Iceberg',
    fontSize: 26,
    color: 'white',
  },
  bgSaldo: {
    backgroundColor: 'white',
    paddingHorizontal: 35,
    height: 52,
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
  },
  saldo: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2E5392',
  },
  feature: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: 'white',
    padding: 30,
    top: 150,
    borderRadius: 5,
    justifyContent: 'space-between',
    gap: 20,
    paddingBottom: 35,
    paddingRight: 35,
    elevation: 2,
    marginHorizontal: 20,
    flexWrap: 'wrap',
  },
  subtitle: {
    color: '#2E5392',
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 13,
    marginTop: 2,
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    width: 50,
  },
});
