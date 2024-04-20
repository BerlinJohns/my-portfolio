import React from "react";
import AppBar from "@mui/material/AppBar";
import Icon from "../Media/log.png";
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";
import { Box, } from "@mui/system";
import { IconButton } from "@mui/material";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

const useStyles=makeStyles((theme)=>{
 return {
     
     logo:{
        width:'100%',
        height:'auto',
        marginLeft:'2em',
        
     },
     wrapper:{
        width:"22%",
        [theme.breakpoints.down(750)]: {
         height: "10vh",
         paddingTop:"0.8em",
        
                            // secondary
       }
     },
     hov:{
      transition:'2s',
      '&:hover': {
         color: "#C786FF",
         TransitionEvent:'5s',
         cursor: 'pointer',
         transition:'0.5s',

                      
         }
     },
     iconButton: {
      border:"red",
     borderColor:"red",

    },
   
   }
});
export function Navbar({ darkMode, toggleDarkMode }){
   const classes=useStyles();
   return (
   
   
   <AppBar 
   color="background"
   elevation="0"
    position="fixed"
   >
      <Box sx={{
         display:'flex'
      }}>
    
   <div className={classes.wrapper}>
   <img src={Icon} alt="Logo" className={classes.logo}/>
   </div>
    <Box sx={{
       display:'flex',
       justifyContent:'right',
       alignItems:'center',
       width:'100%',
       paddingTop:'.5em',
       
    }}>
    <Typography sx={{
       fontSize:{
         xs:8,
         sm:10,
         md:16,
         lg:16

     },
     marginRight:4,
     
    }} variant="h6" color="secondary" component="a" className={classes.hov}  >
      Stay Humble But not Simple!
    </Typography>
    </Box>

    
    <IconButton color="inherit" onClick={toggleDarkMode}
    sx={{
      fontSize:{
         xs:14,
         md:20
      },
      marginRight:4,
    }}
    >
            {darkMode ? <FaMoon style={{ color: '#F5EE00' }} /> : <IoMdSunny style={{ color: '#F5EE00' }} />}
          </IconButton>
    
    
      </Box>
   </AppBar>
 
  
   )
};
