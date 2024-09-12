import { createSlice, nanoid } from "@reduxjs/toolkit";

const PlayerSlice = createSlice({
  name: "player",
  initialState: {
    player: [],
  },
  reducers: {
    addToPlayer: (state, action) => {
      const existingPlayer = state.player.find(
        (item) => item.task.name === action.payload.name
      );
      if (!existingPlayer) {
        if (state.player.length >= 11) {
          state.player.shift();
        }
        const newPlayer = {
          id: nanoid(),
          task: action.payload,
        };
        state.player.push(newPlayer);
      }
    },
    removePlayer: (state, action) => {
      state.player = state.player.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addToPlayer, removePlayer } = PlayerSlice.actions;
export default PlayerSlice.reducer;
