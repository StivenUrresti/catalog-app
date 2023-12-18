import React from 'react';
import {TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {View as UiLibView} from 'react-native-ui-lib';
import {TabsHomeRoutes} from '@/types/tabRoutes';

import {colorsLight} from '@/theme/colorsLight';
import {CatalogIcon, DotIcon, FavoriteIcon} from '@/assets/svg';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {useAppSelector} from '@/hooks/useRedux';
import {selectTabBar} from '@/slices/tabBarSlice';

export function CustomTabBar({
  state,
  descriptors,
  navigation,
}: {
  state: any;
  descriptors: any;
  navigation: any;
}) {
  const {hiddenTabBar} = useAppSelector(selectTabBar);
  const translateY = useSharedValue(hiddenTabBar ? 100 : 0);

  translateY.value = withTiming(hiddenTabBar ? 100 : 0, {
    duration: 320,
    easing: Easing.out(Easing.ease),
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  const getIcon = (key: string) => {
    switch (key) {
      case TabsHomeRoutes.CATALOG:
        return <CatalogIcon width={28} height={28} />;
      case TabsHomeRoutes.FAVORITES:
        return <FavoriteIcon width={28} height={28} />;
      default:
        return <FavoriteIcon width={28} height={28} />;
    }
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.item}
            key={index}>
            {getIcon(route?.name)}
            {isFocused ? <DotIcon /> : <UiLibView height={6} />}
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: colorsLight.WHITE,
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 32 : 16,
    elevation: 3,
    borderRadius: 34,
    shadowColor: '#00000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: 'row',
    height: 68,
    width: '95%',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
