import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootStackParamList, RootStackScreenProps} from '@/types/stackRoutes';

export enum TabsHomeRoutes {
  CATALOG = 'CATALOG',
  FAVORITES = 'FAVORITES',
}

export type TabsHomeParamList = {
  [TabsHomeRoutes.CATALOG]: undefined;
  [TabsHomeRoutes.FAVORITES]: undefined;
};

export type TabsHomeScreenProps<T extends keyof TabsHomeParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabsHomeParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
