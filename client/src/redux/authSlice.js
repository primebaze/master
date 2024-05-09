
import { createSlice, } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  fullname: "", 
  current_status :"",
  profileImage: "", 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.fullname = action.payload.fullname; 
      state.current_status = action.payload.current_status; 
    },
    logout(state) {
      state.isAuthenticated = false;
      state.fullname = ""; 
      state.current_status = "";
      state.profileImage = ""; 
    },
    setProfileImage(state, action) {
      state.profileImage = action.payload;
    },

  },
});

export const { login, logout,setProfileImage } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
