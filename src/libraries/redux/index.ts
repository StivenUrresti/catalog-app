import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import loading from '@/slices/loadingSlice';
import favorites from '@/slices/favoritesSlice';
import tabBar from '@/slices/tabBarSlice';
import {catalogApi} from '@/api/catalogApi/catalogApi';

const store = configureStore({
  reducer: {
    loading,
    favorites,
    tabBar,
    [catalogApi.reducerPath]: catalogApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([catalogApi.middleware]),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
export default store;
