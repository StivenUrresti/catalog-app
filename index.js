/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import App from '@/App';
import {Provider} from 'react-redux';
import store from '@/libraries/redux';

const Aplication = () => (
  <Provider store={store}>
    <SafeAreaProvider style={{flex: 1}}>
      <App />
    </SafeAreaProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Aplication);
