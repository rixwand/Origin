import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import HomeScreen from './components/screens/HomeScreen';
import PulsaScreen from './components/screens/PulsaScreen';

const Stack = createStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 500,
    damping: 100,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            gestureEnabled: true,
            // transitionSpec: {
            //   open: config,
            //   close: config,
            // },
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
            gestureEnabled: true,
            //   // transitionSpec: {
            //   //   open: config,
            //   //   close: config,
            //   // },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
