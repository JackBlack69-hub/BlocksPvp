// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: `
        "Poppins",
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        sans-serif
    `,
  },
  palette: {
    primary: {
      main: "#2196f3",
    },
  },
});

export default theme;
