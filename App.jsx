import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import HomeScreen from './components/screens/HomeScreen';
import PulsaScreen from './components/screens/PulsaScreen';
import GamesScreen from './components/screens/GamesScreen';
import EwalletScreen from './components/screens/EwalletScreen';
import ListrikScreen from './components/screens/ListrikScreen';
import TelponScreen from './components/screens/TelponScreen';
import SmsScreen from './components/screens/SmsScreen';
import InternetScreen from './components/screens/InternetScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Menu" component={Menu} /> */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Pulsa"
          component={PulsaScreen}
          options={{
            headerStyle: {
              backgroundColor: '#2E5392',
            },
            headerTintColor: 'white',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="E-Wallet"
          component={EwalletScreen}
          options={{
            headerStyle: {
              backgroundColor: '#2E5392',
            },
            headerTintColor: 'white',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Games"
          component={GamesScreen}
          options={{
            headerStyle: {
              backgroundColor: '#2E5392',
            },
            headerTintColor: 'white',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Listrik"
          component={ListrikScreen}
          options={{
            headerStyle: {
              backgroundColor: '#2E5392',
            },
            headerTintColor: 'white',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Telpon"
          component={TelponScreen}
          options={{
            headerStyle: {
              backgroundColor: '#2E5392',
            },
            headerTintColor: 'white',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="SMS"
          component={SmsScreen}
          options={{
            headerStyle: {
              backgroundColor: '#2E5392',
            },
            headerTintColor: 'white',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Internet"
          component={InternetScreen}
          options={{
            headerStyle: {
              backgroundColor: '#2E5392',
            },
            headerTintColor: 'white',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
