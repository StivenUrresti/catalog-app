import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import loading from '@/slices/loadingSlice';
import favorites from '@/slices/favoritesSlice';
import {catalogApi} from '@/api/catlogApi/catalogApi';

const store = configureStore({
  reducer: {
    loading,
    favorites,
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
