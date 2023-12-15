/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import App from '@/App';

const Aplication = () => (
  <SafeAreaProvider style={{flex: 1}}>
    <App />
  </SafeAreaProvider>
);

AppRegistry.registerComponent(appName, () => Aplication);
