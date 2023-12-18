/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';
import store from '@/libraries/redux';
import App from '@/App';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Aplication = () => (
  <Provider store={store}>
    <SafeAreaProvider style={{flex: 1}}>
      <App />
    </SafeAreaProvider>
  </Provider>
);

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
AppRegistry.registerComponent(appName, () => Aplication);
