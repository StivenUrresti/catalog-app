import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import loading from '@/slices/loadingSlice';
import favorites from '@/slices/favoritesSlice';

const store = configureStore({
  reducer: {
    loading,
    favorites,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
export default store;
