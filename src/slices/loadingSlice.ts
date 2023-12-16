import {RootState} from '@/libraries/redux';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface ILoadingSlice {
  showLoading: boolean;
}

const initialState: ILoadingSlice = {
  showLoading: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setShowLoading: (state, action: PayloadAction<boolean>) => {
      state.showLoading = action.payload;
    },
  },
});

export const {setShowLoading} = loadingSlice.actions;
export const selectLoading = (state: RootState) => state.loading;

export default loadingSlice.reducer;
