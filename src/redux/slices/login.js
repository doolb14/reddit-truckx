import {createSlice} from '@reduxjs/toolkit';

const LoginSlice = createSlice({
  name: 'login',
  initialState: {is_logged_in: false},
  reducers: {
    loginUser(state, action) {
      state.is_logged_in = true;
    },
    logoutUser(state, action) {
      state.is_logged_in = false;
    },
  },
});

export const {loginUser, logoutUser} = LoginSlice.actions;
export default LoginSlice.reducer;
