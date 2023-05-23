import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import {BsInstagram, BsLinkedin,BsTwitter,BsGithub,BsTelephoneForward,BsFillEnvelopeFill} from 'react-icons/bs';
import { makeStyles } from "@mui/styles";
 
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

export function Footer() {
  const classes=useStyles();
    return (
      <>
        <Grid container   
          sx={{
            backgroundColor:"#111",
            padding:"4em",
            borderTop:".1em solid gray "
           
            
            
          }} >
             
         <Grid item xs={12} sm={3}  sx={{  
           justifyContent:"space-between",
           display:"flex",
           marginBottom:5,
         }}
          > 
              <a href="https://www.instagram.com/b_e_r_l_i_n_b_i_b_i_n/" target="_blank" rel="noopener noreferrer"><BsInstagram  className={classes.icons} /></a>
            
            <BsLinkedin  className={classes.icons} />
            <BsTwitter  className={classes.icons} />
            <BsGithub  className={classes.icons} /> 
            </Grid>  
            <Grid item xs="auto" sx={{
             marginX:"auto"
             
            }}>
              <Typography varient="h3" component="p" color="#C786FF"  >
              <BsFillEnvelopeFill/>  &nbsp; &nbsp;  berlinjohns78@gmail.com
              </Typography>
              <Typography varient="h1" component="p" color="#C786FF" 
               sx={{
                marginTop:2,
               
              }}>
                  <BsTelephoneForward /> &nbsp; &nbsp;   9629802155
              </Typography>
            </Grid> 
           
       </Grid>
       <Typography varient="h3" component="p" width="100%" backgroundColor="#111" color="#616161" className={classes.heading}>
            Copyright © {date}
            </Typography>
       </>
       
    )
}


