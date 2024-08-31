import { createAsyncThunk } from "@reduxjs/toolkit";

import { getInstance } from "services";
import { defaultErrorMessageHandler } from "utils";

import { UsersDataType } from "./types";

export const fetchAllUsers = createAsyncThunk<UsersDataType[], undefined, { rejectValue: string }>(
  "users/fetch-all-users",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getInstance({}).get<UsersDataType[]>("/users");

      return response.data;
    } catch (err) {
      const error = err as Error;

      return rejectWithValue(defaultErrorMessageHandler(error.message));
    }
  },
);
