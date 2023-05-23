import React from "react";
import AppBar from "@mui/material/AppBar";
import Icon from "../Media/log.png";
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";
import { Box, } from "@mui/system";




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
   }
});
export function Navbar(){
   const classes=useStyles();
   return (
   
   
   <AppBar color="info"
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
         xs:16,
         sm:16,
         md:16,
         lg:16

     },
     marginRight:4,
     
    }} variant="h6" color="secondary" component="a" className={classes.hov}  >
      Stay Humble But not Simple!
    </Typography>
    </Box>
     
      </Box>
   </AppBar>
 
  
   )
};
