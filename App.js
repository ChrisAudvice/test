/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ScreenThree from './ScreenThree';

const Stack = createStackNavigator();

const linking = {
  prefixes: ['testapp://'],
  config: {
    screens: {
      ScreenOne: 'screenone',
      // TrackListScreen: 'playlist/:id/' //:id gets parsed as a string, you have to specify it if you want a number.
      ScreenThree: 'screenthree',
    },
  },
};

const MainStack = () => (
  <Stack.Navigator initialRouteName="ScreenTwo">
    <Stack.Screen name="ScreenOne" component={ScreenOne} />
    <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
  </Stack.Navigator>
);

const SecondStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ScreenThree" component={ScreenThree} />
  </Stack.Navigator>
);

const MainNavigator = () => (
  <Stack.Navigator initialRouteName="MainStack">
    <Stack.Screen name="MainStack" component={MainStack} />
    <Stack.Screen name="SecondStack" component={SecondStack} />
    <Stack.Screen name="ScreenThree" component={ScreenThree} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <MainNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
