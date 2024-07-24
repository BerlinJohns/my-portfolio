import { useState } from "react";
import { Navbar } from "./Components/navbar";
import {Home} from "./Components/Home";
import { About } from "./Components/About";
import {Footer} from "./Components/Footer";
import {Skills} from "./Components/Skills";
import Petszone from "./Components/Petszone";
import { ThemeProvider, createTheme} from '@mui/material/styles';
import Projects from "./Components/Projects";
import ReactGA from "react-ga4";
import './App.css';
import MyServices from "./Components/Services";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';





ReactGA.initialize("G-WBSZ93M7FY");
ReactGA.send({
   hitType: "pageview", 
   page:window.location.pathname, 
    });

    

function App() {
  const [darkMode, setDarkMode] = useState(true); // State variable for dark mode

  const toggleDarkMode = () => {
    ReactGA.event({
      category: 'Button Click',
      action: 'Toggled Theme Mode',
    });
    setDarkMode(!darkMode); // Toggle dark mode state
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light', // Toggle between dark and light mode
      primary: {
        main: '#FF5EBA', // Pink
      },
      secondary: {
        main: '#008FFF', // Blue
      },
      success: {
        main: '#25F4E7',
      },
      background: {
        default: darkMode ? '#111' : '#fff', // Toggle background color based on mode
      },
      info: {
        main: '#111', // Info color
      },
    },
    typography: {
      fontFamily: 'Poppins, Ubuntu, Lora',
      fontWeightLight: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
  });
  return (
    
    <ThemeProvider theme={theme}>
      
    <div  className="container">
      <Router>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Switch >
          <Route path="/my-portfolio" exact>
          <Home darkMode={darkMode} />
            <About darkMode={darkMode} />
            <MyServices darkMode={darkMode}/>
            <Projects darkMode={darkMode} />
            <Skills darkMode={darkMode}/>
          </Route>
           <Route path="/petszone">
            <Petszone darkMode={darkMode}/>
           </Route>
        </Switch>
        <Footer darkMode={darkMode}/>
      </Router>
      </div>
   
   </ThemeProvider>
  );
}

export default App;
