import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints:{
    values:{
      sm: 480,
      md:669,
    }
  },
    typography: {
      h1: {
        fontSize: "5rem"
      },
      fontFamily: 'Lexend Deca, Arial, Helvetica, sans-serif',
    },
    palette: {
      mode: 'light',
      common: {
        black: '#101010',
        white: '#fff',
        offWhite: '#F7FCFF',
        offBlack: '#4A4444',
        gray: '#262626',
        lightGray: '#dfdfdf',
        highlight: '#c5ecf9'
      },
      primary: {
        main: '#FF06D7',
        light: '#ff78e1',
        dark: '#ed00be',
        contrastText: "#4A4444",
        text: {
          primary: '#101010',
          secondary: '#101010',
        }
    }
  }
  })