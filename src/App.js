import { Navbar } from "./Components/Navbar";
import {Home} from "./Components/Home";
import { About } from "./Components/About";
import {Footer} from "./Components/Footer";
import {Skills} from "./Components/Skills";
import { ThemeProvider, createTheme} from '@mui/material/styles';
import './App.css';





export const theme=createTheme({
  
  palette:{
    primary:{
      main:"#FF5EBA", //pink
      
    },
    secondary:{
      main:"#008FFF"//blue
    },
    success:{
      main:"#C786FF"  
    },
    background:{
      default:"111",
    },
    info:{
        main:"#111"
    },
   
   


  },
  typography:{
    fontFamily:"Poppins ,Ubunt",
    fontWeightLight:'400',
    fontWeightMedium:'500',
    fontWeightBold:'700',
    
    
  },
})
function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <div className="scrollPath"></div>
    <div >
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Footer/>
      </div>
   
   </ThemeProvider>
  );
}

export default App;
