import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/libraries/redux';

interface ISearch {
  show: boolean;
}

const initialState: ISearch = {
  show: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setShow(state, action: PayloadAction<boolean>) {
      state.show = action.payload;
    },
  },
});

export const {setShow} = searchSlice.actions;
export const selectSearch = (state: RootState) => state.search;

export default searchSlice.reducer;
