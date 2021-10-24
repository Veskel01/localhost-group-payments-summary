import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {}
  interface ThemeOptions {}
}

const MuiTheme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default MuiTheme;
