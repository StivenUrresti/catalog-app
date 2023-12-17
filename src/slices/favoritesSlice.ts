import {IArtWorkEntity} from '@/api/catalogApi/entities/catalogEntity';
import {RootState} from '@/libraries/redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

interface IFavoritesSlice {
  favoritesData: IArtWorkEntity[];
  isInFavorites: boolean;
}

const initialState: IFavoritesSlice = {
  favoritesData: [],
  isInFavorites: false,
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const isAlreadyFavorite = state.favoritesData.some(
        favorite => favorite.id === action.payload.id,
      );
      if (!isAlreadyFavorite) {
        state.favoritesData.push(action.payload);
        AsyncStorage.setItem('favorites', JSON.stringify(state.favoritesData));
      }
    },
    removeFavorite: (state, action) => {
      state.favoritesData = state.favoritesData.filter(
        favorite => favorite.id !== action.payload.id,
      );
      AsyncStorage.setItem('favorites', JSON.stringify(state.favoritesData));
    },
    loadFavorites: (state, action) => {
      state.favoritesData = action.payload;
    },
    checkIsInFavorites: (state, action) => {
      state.isInFavorites = state.favoritesData.some(
        favorite => favorite.id === action.payload,
      );
    },
  },
});

export const {addFavorite, removeFavorite, loadFavorites, checkIsInFavorites} =
  favoritesSlice.actions;
export const selectFavorites = (state: RootState) => state.favorites;

export const loadFavoritesAsync = () => async (dispatch: any) => {
  try {
    const favoritesString = await AsyncStorage.getItem('favorites');
    const favoritesData = favoritesString ? JSON.parse(favoritesString) : [];
    dispatch(loadFavorites(favoritesData));
  } catch (error) {
    console.error('Error loading favorites from AsyncStorage:', error);
  }
};

export default favoritesSlice.reducer;
