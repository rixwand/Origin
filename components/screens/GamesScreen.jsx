import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import * as colors from '../../assets/color';
import Genshin from '../../assets/icon/genshin.jpeg';

const GamesScreen = () => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.title}>Populer</Text>
        <View style={styles.games}>
          <TouchableOpacity style={styles.icon}>
            <Image source={Genshin} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>Genshin Impact</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={Genshin} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>Honkai Star Rail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={Genshin} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>League Of Legends: Wild Rift</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={Genshin} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>Genshin Impact</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={Genshin} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>Honkai Star Rail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={Genshin} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>League Of Legends: Wild Rift</Text>
          </TouchableOpacity>
        </View>
        <Text style={{marginTop: 35, ...styles.title}}>Semua games</Text>
        <View style={styles.games}>
          <TouchableOpacity style={styles.icon}>
            <Image source={Genshin} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>Genshin Impact</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={Genshin} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>Honkai Star Rail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={Genshin} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>League Of Legends: Wild Rift</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={Genshin} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>Genshin Impact</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={Genshin} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>Honkai Star Rail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={Genshin} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>League Of Legends: Wild Rift</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={Genshin} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>Genshin Impact</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={Genshin} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>Honkai Star Rail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={Genshin} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>League Of Legends: Wild Rift</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={Genshin} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>Genshin Impact</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={Genshin} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>Honkai Star Rail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={Genshin} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>League Of Legends: Wild Rift</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={Genshin} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>Genshin Impact</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={Genshin} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>Honkai Star Rail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={Genshin} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>League Of Legends: Wild Rift</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={Genshin} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>Genshin Impact</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={Genshin} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>Honkai Star Rail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={Genshin} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>League Of Legends: Wild Rift</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default GamesScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.lightblue,
    padding: 15,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    paddingTop: 10,
    marginBottom: 50,
  },
  title: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darkblue,
    textTransform: 'uppercase',
    paddingBottom: 10,
  },
  games: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    rowGap: 15,
    borderRadius: 5,
  },
  gameIcon: {
    width: '100%',
    height: '78%',
  },
  icon: {
    width: '30%',
    height: 129,
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 5,
    // padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  gameTitle: {
    fontFamily: 'SourceSansPro-SemiBold',
    color: colors.darkblue,
    fontSize: 10,
    paddingTop: 2,
    // flexWrap: 'wrap',
    textAlign: 'center',
    paddingHorizontal: 5,
  },
});
