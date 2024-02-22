import { shopSlice } from "./slice";
const { actions: slice } = shopSlice;

export const adminLogin = (__a__) => (dispatch) => {
  dispatch(slice.LogedIn(__a__));
};
