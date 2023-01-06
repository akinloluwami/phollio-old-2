import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  token: string;
  username: string;
  isEmailVerified: boolean;
}

const initialState: UserState = {
  token: window.localStorage.getItem("tkn") as string,
  username: "zing",
  isEmailVerified: false,
};

export const fetchUserData = createAsyncThunk("user/fetchData", async () => {
  const response = await axios.get<UserState>("/api/user");
  console.log(response);
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setIsEmailVerified(state, action: PayloadAction<boolean>) {
      state.isEmailVerified = action.payload;
    },
  },
  extraReducers: {
    [fetchUserData.fulfilled]: (
      state: any,
      action: PayloadAction<UserState>
    ) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.isEmailVerified = action.payload.isEmailVerified;
    },
  },
});

export const { setUsername, setIsEmailVerified } = userSlice.actions;
export default userSlice.reducer;
