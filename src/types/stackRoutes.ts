import {NavigatorScreenParams} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {TabsHomeParamList} from './tabRoutes';

export enum RootStackRoutes {
  TABS_HOME = 'TABS_HOME',
  DETAIL_CATALOG_SCREEN = 'DETAIL_CATALOG_SCREEN',
}

export type RootStackParamList = {
  [RootStackRoutes.TABS_HOME]: NavigatorScreenParams<TabsHomeParamList>;
  [RootStackRoutes.DETAIL_CATALOG_SCREEN]: {idArt: number};
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
