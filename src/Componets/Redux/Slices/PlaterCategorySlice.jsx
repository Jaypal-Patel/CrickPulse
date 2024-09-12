import { createSlice } from "@reduxjs/toolkit";

const PlayerCategorySlice = createSlice({
  name: "category",
  initialState: {
    category: "All",
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = PlayerCategorySlice.actions;
export default PlayerCategorySlice.reducer;
