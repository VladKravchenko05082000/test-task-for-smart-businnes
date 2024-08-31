import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "store/store";

export const selectFilteredUsers = createSelector(
  (state: AppState) => state.users.usersData,
  (state: AppState) => state.users.filters,
  (allUsers, filters) => {
    return allUsers.filter(
      user =>
        user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
        user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
        user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
        user.phone.toLowerCase().includes(filters.phone.toLowerCase()),
    );
  },
);
