import { createSlice } from "@reduxjs/toolkit";

import { UsersState } from "./types";
import { fetchAllUsers } from "./action";

const initialState: UsersState = {
  usersData: [],
  pending: false,
  count: 0,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    increment: state => {
      state.count = state.count + 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.pending = false;
        state.usersData = action.payload;
      })
      .addCase(fetchAllUsers.pending, state => {
        state.pending = true;
      })

      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload;
      });
  },
});

export const { increment } = usersSlice.actions;

export default usersSlice;
