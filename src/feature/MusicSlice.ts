import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentMusic: {
    title: "",
    artist: "",
    cover: "",
    audio: "",
  },
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    setCurrentMusic: (state, action) => {
      state.currentMusic = action.payload;
    },
  },
});

export const { setCurrentMusic } = musicSlice.actions;
export default musicSlice.reducer;