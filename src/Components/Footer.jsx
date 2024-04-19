import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import {BsInstagram, BsLinkedin,BsTwitter,BsGithub,BsTelephoneForward,BsFillEnvelopeFill} from 'react-icons/bs';
import { makeStyles } from "@mui/styles";
import ReactGA from "react-ga4";

const date=new Date().getFullYear()



 const useStyles=makeStyles((theme)=>({
  heading:{
      display:'flex',
      justifyContent:'center',
    
  },
  icons:{
    transition:'2s',
    color:'#C786FF',
    height:'auto',
    width:'1.3em',
    
    '&:hover':{
      color:'gray',
      cursor:'pointer',
      transition:'0.5s',
      transform: 'scale(1.5)',
    }
  }

}));


  const handleEmailClick = () => {
    window.location.href = 'mailto:berlinjohns78@gmail.com';
    ReactGA.event({
      category: 'Button Click',
      action: 'Clicked the Mail',
    });
  };
  const handlePhoneClick = () => {
    window.location.href = 'tel:9629802155';
    ReactGA.event({
      category: 'Button Click',
      action: 'Clicked the Contact',
    });
  };



export function Footer({darkMode}) {
  const classes=useStyles();
    return (
      <>
        <Grid container   
          sx={{
            backgroundColor:darkMode ? "#111" : "white",
            padding:"4em",
            borderTop:".1em solid gray "
           
            
            
          }} >
             
         <Grid item xs={12} sm={3}  sx={{  
           justifyContent:"space-between",
           display:"flex",
           marginBottom:5,
         }}
          > 
              <a href="https://www.instagram.com/b_e_r_l_i_n_b_i_b_i_n/" target="_blank" rel="noopener noreferrer">
              <BsInstagram  className={classes.icons} /></a>
            <a href="https://www.linkedin.com/in/berlinjohns" target="_blank" rel="noopener noreferrer">
               <BsLinkedin  className={classes.icons} />
            </a>
            <a href="https://twitter.com/BerlinJohnes" target="_blank" rel="noopener noreferrer">
            <BsTwitter  className={classes.icons} />
            </a>
           <a href="https://github.com/BerlinJohns" target="_blank" rel="noopener noreferrer">
            <BsGithub  className={classes.icons} /> 
           </a>
            
            </Grid>  
            <Grid item xs="auto" sx={{
            marginX:"auto",
             
            }}>
              <Typography  component="p" 
              style={{ 
                color: '#C786FF',
                cursor:'pointer',
                 }}>
               <span style={{ display: 'flex', alignItems: 'center' }} onClick={handleEmailClick}>
                  <BsFillEnvelopeFill />
                  <span style={{ marginLeft: '5px' }}>&nbsp; berlinjohns78@gmail.com</span>
              </span>
              </Typography>
              <Typography  component="p" color="#C786FF" 
              onClick={handlePhoneClick}
               sx={{
                marginTop:2,
                cursor:'pointer'
              }}>
                  <BsTelephoneForward /> &nbsp;  +91 9629802155
              </Typography>
            </Grid> 
           
       </Grid>
       <Typography  component="p" width="100%" backgroundColor= {darkMode ? "#111" : "white"} color="#616161" className={classes.heading}>
            Copyright © {date}
            </Typography>
       </>
       
    )
}


