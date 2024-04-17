import { Navbar } from "./Components/Navbar";
import {Home} from "./Components/Home";
import { About } from "./Components/About";
import {Footer} from "./Components/Footer";
import {Skills} from "./Components/Skills";
import { ThemeProvider, createTheme} from '@mui/material/styles';
import Projects from "./Components/Projects";
import ReactGA from "react-ga4";
import './App.css';
import MyServices from "./Components/Services";






ReactGA.initialize("G-WBSZ93M7FY");
ReactGA.send({
   hitType: "pageview", 
   page:window.location.pathname, 
    });

    
export const theme=createTheme({
  
  palette:{
    primary:{
      main:"#FF5EBA", //pink
      
    },
    secondary:{
      main:"#008FFF"//blue
    },
    success:{
      main:"#25F4E7"  
    },
    background:{
      default:"111",
    },
    info:{
        main:"#111"
    },
   
   


  },
  typography:{
    fontFamily:"Poppins ,Ubunt,Lora",
    fontWeightLight:'400',
    fontWeightMedium:'500',
    fontWeightBold:'700',
    
    
  },
})
function App() {
  return (
    
    <ThemeProvider theme={theme}>
      
    <div className="container">
        <Navbar/>
        <Home/>
        <About/>
        <MyServices/>
        <Projects/>
        <Skills/>
        <Footer/>
      </div>
   
   </ThemeProvider>
  );
}

export default App;
