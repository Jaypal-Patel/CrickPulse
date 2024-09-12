import { configureStore } from "@reduxjs/toolkit";
import PlayerSlice from "./Slices/PlayerSlice";
import PlaterCategorySlice from "./Slices/PlaterCategorySlice";
import SearchSlice from "./Slices/SearchSlice";

const Store = configureStore({
  reducer: {
    player: PlayerSlice,
    category: PlaterCategorySlice,
    search: SearchSlice,
  },
});

export default Store;
