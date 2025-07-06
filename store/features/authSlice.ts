import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type initialStateType = {
username:string,
acsess:string,
refresh:string
};

const initialState: initialStateType = {
 username:'',
acsess:'',
refresh:''
};



 const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state. username = action.payload;
    },

    },
  })

  export const {
  setUserName
  } = authSlice.actions;
  
  export const authSliceReducer = authSlice.reducer;