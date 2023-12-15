import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import {RootStackParamList, RootStackRoutes} from '@/types/stackRoutes';
import {TabsNavigation} from './tabsNavigation';
import {DetailCatalogScreen} from '@/screens';

// Routes

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
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
