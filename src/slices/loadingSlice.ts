import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/libraries/redux';

interface ILoadingState {
  showLoading: boolean;
}

const initialState: ILoadingState = {
  showLoading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setShowLoading(state, action: PayloadAction<boolean>) {
      state.showLoading = action.payload;
    },
  },
});

export const {setShowLoading} = loadingSlice.actions;
export const selectLoading = (state: RootState) => state.loading;

export default loadingSlice.reducer;
