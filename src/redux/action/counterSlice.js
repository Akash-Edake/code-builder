import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 10,
  userTheme: "light",
  snippetsTheme: [
    "dracula",
    "a11yDark",
    "a11yLight",
    "anOldHope",
    "androidstudio",
    "arta",
    "atomOneDark",
    "atomOneLight",
    "codepen",
    "far",
    "github",
    "googlecode",
    "hopscotch",
    "hybrid",
    "irBlack",
    "monoBlue",
    "monokaiSublime",
    "monokai",
    "nord",
    "noctisViola",
    "obsidian",
    "ocean",
    "paraisoDark",
    "paraisoLight",
    "pojoaque",
    "purebasic",
    "railscast",
    "rainbow",
    "shadesOfPurple",
    "solarizedDark",
    "solarizedLight",
    "sunburst",
    "tomorrowNightBlue",
    "tomorrowNightBright",
    "tomorrowNightEighties",
    "tomorrowNight",
    "tomorrow",
    "vs2015",
    "xt256",
    "zenburn",
  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    UserTheme: (state, action) => {
      state.userTheme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { UserTheme } = counterSlice.actions;

export default counterSlice.reducer;
