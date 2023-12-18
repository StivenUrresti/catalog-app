/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import StackNavigation from './navigation/stackNavigation';
import {Loading} from './components';
import store from './libraries/redux';
import {loadFavoritesAsync} from './slices/favoritesSlice';
import {ModalSearch} from './components/ModalSearch';

store.dispatch(loadFavoritesAsync());

const App = () => {
  return (
    <GestureHandlerRootView style={style.container}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Loading />
          <ModalSearch />
          <StackNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
