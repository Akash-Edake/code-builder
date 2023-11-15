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
  userData: {},
  codeStorage: [],
  muiTheme: {
    primary: {
      main: {
        light: "#1976d2",
        dark: "#1976d2",
      },
    },
    secondary: {
      main: {
        light: "#9c27b0",
        dark: "#9c27b0",
      },
    },
    background: {
      light: {
        default: "#fff",
        paper: "#fff",
      },
      dark: {
        default: "black",
        paper: "black",
      },
    },
    text: {
      light: {
        primary: "rgba(0,0,0,0.89)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0,0,0,0.39)",
        hint:"#22194D"
      },
      dark: {
        primary: "#fff",
        secondary: "#fff",
        disabled: "#fff",
        hint:"#22194D"
      },
    },
    divider: {
      light: "rgba(0, 0, 0, 0.12)",
      dark: "rgba(255, 255, 255, 0.12)",
    },
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    UserTheme: (state, action) => {
      state.userTheme = action.payload;
    },
    UserData: (state, action) => {
      state.userData = action.payload;
    },
    CodeStorage: (state, action) => {
      state.codeStorage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { UserTheme, UserData, CodeStorage } = counterSlice.actions;

export default counterSlice.reducer;
