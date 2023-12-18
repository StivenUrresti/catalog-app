/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import {RootStackParamList, RootStackRoutes} from '@/types/stackRoutes';
import {TabsNavigation} from './tabsNavigation';
import {DetailCatalogScreen} from '@/screens';
import {Platform, TouchableOpacity} from 'react-native';
import {colorsLight} from '@/theme/colorsLight';
import {BackArrow} from '@/assets/svg';
import {SearchScreen} from '@/screens/catalog';

const Stack = createStackNavigator<RootStackParamList>();

enableScreens();
function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RootStackRoutes.TABS_HOME}
        component={TabsNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RootStackRoutes.DETAIL_CATALOG_SCREEN}
        component={DetailCatalogScreen}
        options={({navigation}) => ({
          headerTitle: '',
          headerBackTitle: 'Art Works',
          headerTintColor: colorsLight.GRAY_03,
          headerBackTitleVisible: true,
          headerShadowVisible: false,
          headerLeftContainerStyle: {
            paddingLeft: Platform.OS === 'ios' ? 18 : 6,
          },
          headerBackImage: () => (
            <TouchableOpacity onPress={() => navigation.pop()}>
              <BackArrow color={colorsLight.GRAY_03} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name={RootStackRoutes.SEARCH_SCREEN}
        component={SearchScreen}
        options={({navigation}) => ({
          headerTitle: '',
          headerTintColor: colorsLight.GRAY_03,
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          headerLeftContainerStyle: {
            paddingLeft: Platform.OS === 'ios' ? 18 : 6,
          },
          headerShown: false,
          headerBackImage: () => (
            <TouchableOpacity onPress={() => navigation.pop()}>
              <BackArrow color={colorsLight.GRAY_03} />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
