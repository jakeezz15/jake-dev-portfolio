import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#02314F",
    },
    secondary: {
      main: "#FE8400",
    },
    error: {
      main: red.A400,
    },
    background: {
      //   default: "#02314F",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),

    h1: {
      fontFamily: ["Playfair Display", "serif"].join(","),
    },
    h2: {
      fontFamily: ["Playfair Display", "serif"].join(","),
    },
    h3: {
      fontFamily: ["Playfair Display", "serif"].join(","),
    },
    h4: {
      fontFamily: ["Playfair Display", "serif"].join(","),
    },
    h5: {
      fontFamily: ["Playfair Display", "serif"].join(","),
    },
    h6: {
      fontFamily: ["Playfair Display", "serif"].join(","),
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
        maxWidth: "lg",
        sx: {
          // minWidth: "800px",
          // background: "#023047",
        },
      },
    },
  },
});

export default theme;
