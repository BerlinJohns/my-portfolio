import { Navbar } from "./Components/navbar";
import {Home} from "./Components/Home";
import { ThemeProvider, createTheme, makeStyles } from '@mui/material/styles';

const theme=createTheme({
  palette:{
    primary:{
      main:"#FF5EBA" //pink
    },
    secondary:{
      main:"#008FFF"//blue
    },
    success:{
      main:"#111"  
    }
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
   <div>
     < Navbar/>
     <Home/>
   </div>
   </ThemeProvider>
  );
}

export default App;
