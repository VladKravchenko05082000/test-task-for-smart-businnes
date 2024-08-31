import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FilterUserPayload, UsersState } from "./types";
import { fetchAllUsers } from "./action";

const initialState: UsersState = {
  usersData: [],
  filters: {
    name: "",
    email: "",
    username: "",
    phone: "",
  },
  pending: false,
  count: 0,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilterUsers: (state, action: PayloadAction<FilterUserPayload>) => {
      const key = action.payload.key;
      const searchQuery = action.payload.searchQuery;

      state.filters[key] = searchQuery;
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

export const { setFilterUsers } = usersSlice.actions;

export default usersSlice;
