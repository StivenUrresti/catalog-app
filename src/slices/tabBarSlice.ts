import {RootState} from '@/libraries/redux';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface ITabBar {
  hiddenTabBar: boolean;
}

const initialState: ITabBar = {
  hiddenTabBar: false,
};

const tabBarSlice = createSlice({
  name: 'tabBar',
  initialState,
  reducers: {
    setHiddenTabBar: (state, action: PayloadAction<boolean>) => {
      state.hiddenTabBar = action.payload;
    },
  },
});

export const {setHiddenTabBar} = tabBarSlice.actions;
export const selectTabBar = (state: RootState) => state.tabBar;

export default tabBarSlice.reducer;
