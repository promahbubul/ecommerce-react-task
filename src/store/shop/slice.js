import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    auth: {
      token: "",
      email: "",
      isAdmin: false,
    },
  },
  reducers: {
    LogedIn: (state, action) => {
      return {
        ...state,
        auth: {
          ...action.payload,
          isAdmin: true,
        },
      };
    },
  },
});
