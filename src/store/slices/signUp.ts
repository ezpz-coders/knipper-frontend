import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../../config';
import { inputForm } from '../../pages/signup';

export const signUpUser = createAsyncThunk(
  'signup/User',
  async (_: inputForm) => {
    const res = await fetch(`${BASE_URL}/api/v1/users/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(_),
    });
    const data = await res.json();
    return data;
  }
);
export interface userDetails {
  auth_token:string
}
export interface loginStruct {
  details?: any,
  isLoggedIn: boolean;
}
export interface actionMethods {
  type: string;
  payload: loginStruct;
}
const initialState: loginStruct = {
  isLoggedIn: false,
};
const signUpSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUpUser.fulfilled, (state, payload) => {
      state.details = payload;
      state.isLoggedIn = true;
    });
  },
});

export default signUpSlice.reducer;
