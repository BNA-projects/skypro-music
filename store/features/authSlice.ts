import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  username: string;
  access: string;
  refresh: string;
};

const initialState: initialStateType = {
  username: '',
  access: '',
  refresh: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
      localStorage.setItem('username', action.payload);
    },
     setAccessToken: (state, action: PayloadAction<string>) => {
      state.access = action.payload;
      localStorage.setItem('acceess', action.payload);
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refresh = action.payload;
      localStorage.setItem('refresh', action.payload);
    },
  },
});

export const { setUserName } = authSlice.actions;

export const authSliceReducer = authSlice.reducer;
