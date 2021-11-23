import React from "react";
import AppBar from "@mui/material/AppBar";
import Icon from "../Media/log.png";
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";




const useStyles=makeStyles({
     flx:{
        display:'flex',
        alignItems:'space-between',
     },
     fix:{
        position:'sticky',
        
     },
     logo:{
        width:'22%',
        marginLeft:'1em',
        
     },
     hov:{
      transition:'2s',
      '&:hover': {
         color: "#C786FF",
         TransitionEvent:'5s',
         cursor: 'pointer',
         transition:'0.5s',

                      
         }
     }

});
export function Navbar(){
   const classes=useStyles();
   return (
   <>
   
   <AppBar color="success"
            
    className={classes.fix}>
      <Box sx={{
         display:'flex'
      }}>
    
     <img src={Icon} alt="Logo" className={classes.logo}/>
    <Box sx={{
       display:'flex',
       justifyContent:'space-evenly',
       alignItems:'center',
       width:'100%',
       paddingTop:'.5em',
       
    }}>
    <Typography variant="h6" color="secondary" component="a" className={classes.hov} >
       Home
    </Typography>
    <Typography variant="h6" color="secondary" component="a" className={classes.hov}>
       About me
    </Typography>
    <Typography variant="h6" color="secondary" component="a" className={classes.hov}>
       Projects
    </Typography>
    <Typography variant="h6" color="secondary" component="a" className={classes.hov}>
      Contact Me
    </Typography>
    </Box>
     
      </Box>
   </AppBar>
  
   </>
   )
};
