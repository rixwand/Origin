import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AddButton from '../Buttons/AddButton';
import {Icon} from '@mrkpatchaa/react-native-ionicons';
import Texture from '../../assets/Svg/texture.svg';
import * as color from '../../assets/color';
const HomeScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#E2EFFD', flex: 1}}>
      <ScrollView style={{position: 'relative'}}>
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
          <TouchableOpacity
            onPress={() => navigation.navigate('Internet')}
            style={style.icon}>
            <Icon name="globe-outline" size={50} color="#2E5392" />
            <Text style={style.subtitle}>Internet</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Telpon')}
            style={style.icon}>
            <Icon name="call-outline" size={50} color="#2E5392" />
            <Text style={style.subtitle}>Telpon</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SMS')}
            style={style.icon}>
            <Icon name="mail-outline" size={50} color="#2E5392" />
            <Text style={style.subtitle}>SMS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Listrik')}
            style={style.icon}>
            <Icon name="flash-outline" size={50} color="#2E5392" />
            <Text style={style.subtitle}>Listrik</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Games')}
            style={style.icon}>
            <Icon name="game-controller-outline" size={50} color="#2E5392" />
            <Text style={style.subtitle}>Games</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('E-Wallet')}
            style={style.icon}>
            <Icon name="wallet-outline" size={50} color="#2E5392" />
            <Text style={style.subtitle}>E-Wallet</Text>
          </TouchableOpacity>
          <View style={style.icon}>
            <Icon
              name="ellipsis-horizontal-circle-outline"
              size={50}
              color="#2E5392"
            />
            <Text style={style.subtitle}>More</Text>
          </View>
        </View>
        <View style={style.texture}>
          <Texture />
        </View>
      </ScrollView>

      <View style={style.navbar}>
        <View style={{zIndex: 10, ...style.qrcode}}>
          <View
            style={{
              backgroundColor: color.lightblue,
              padding: 8,
              borderRadius: 100,
            }}>
            <TouchableOpacity style={style.qr}>
              <Icon name={'qr-code-outline'} size={34} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            alignItems: 'center',
            bottom: 0,
          }}>
          <View
            style={{backgroundColor: 'white', width: '16%', height: 40}}></View>
        </View>
        <View style={style.leftNavbar}>
          <TouchableOpacity
            style={{backgroundColor: color.lightblue, ...style.menuIcon}}>
            <Icon name="home-outline" size={30} color={color.darkblue} />
          </TouchableOpacity>
          <TouchableOpacity style={style.menuIcon}>
            <Icon name="newspaper-outline" size={30} color={color.darkblue} />
          </TouchableOpacity>
        </View>
        <View style={style.rightNavbar}>
          <TouchableOpacity style={{...style.menuIcon}}>
            <Icon name="chatbubbles-outline" size={30} color={color.darkblue} />
          </TouchableOpacity>
          <TouchableOpacity style={style.menuIcon}>
            <Icon name="person-outline" size={30} color={color.darkblue} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  texture: {
    position: 'relative',
    width: '100%',
    alignItems: 'flex-end',
    marginTop: -50,
  },
  home: {
    backgroundColor: '#2E5392',
    height: 250,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  logo: {
    paddingVertical: 15,
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
    top: 140,
    borderRadius: 15,
    justifyContent: 'space-between',
    gap: 10,
    paddingBottom: 35,
    paddingRight: 35,
    elevation: 2,
    marginHorizontal: 35,
    flexWrap: 'wrap',
    rowGap: 30,
    zIndex: 10,
    opacity: 10,
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
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    // backgroundColor: 'white',
  },
  leftNavbar: {
    backgroundColor: 'white',
    paddingVertical: 6,
    paddingLeft: 24,
    paddingRight: 20,
    width: '42.8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopRightRadius: 30,
  },
  rightNavbar: {
    backgroundColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 24,
    paddingLeft: 20,
    paddingRight: 24,
    width: '42.8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: 30,
  },
  menuIcon: {
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
  },
  qrcode: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    bottom: 25,
  },
  qr: {
    backgroundColor: color.darkblue,
    padding: 10,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'middle',
  },
});
