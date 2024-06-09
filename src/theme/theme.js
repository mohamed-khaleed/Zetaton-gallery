// src/theme/index.js
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#12333a',      
      contrastText: '#f8ffff', 
      light:"#2a474e"
    },
    secondary: {
      main: '#829da2',      
      contrastText: '#f9fbf6', 
    },
    background: {
      default: '#f9fbf6',   
      paper: '#f8ffff',     
    },
    text: {
      primary: '#12333a',   
      secondary: '#829da2', 
    },
  },
  typography: {
    fontFamily: 'Lora,Arial,sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
  },

});

export default theme;
