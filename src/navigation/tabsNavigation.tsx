/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabsHomeParamList, TabsHomeRoutes} from '@/types/tabRoutes';
import {FavoritesScreen, CatalogScreen} from '@/screens';
import {CustomTabBar} from './CustomTabBar';

const Tab = createBottomTabNavigator<TabsHomeParamList>();

export function TabsNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={TabsHomeRoutes.CATALOG}
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen name={TabsHomeRoutes.CATALOG} component={CatalogScreen} />
      <Tab.Screen name={TabsHomeRoutes.FAVORITES} component={FavoritesScreen} />
    </Tab.Navigator>
  );
}
