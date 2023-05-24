import {React} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";
import { Box } from '@mui/system';
import { Button } from '@mui/material';
// import styled from '@emotion/styled';
// import TextField from '@mui/material/TextField';
import Smprofile from '../Media/Smportfoliodp.jpeg';
import Bgprofile from '../Media/profile.bmp';
import Hidden from '@mui/material/Hidden';


// const CssTextField = styled(TextField)({
//   '& label.Mui-focused': {
//     color: 'primary',
//   },
//   '& .MuiInput-underline:after': {
//     borderBottomColor: '#FF5EBA',
//   },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: '#008FFF',
//     },
//     '&:hover fieldset': {
//       borderColor: '#FF5EBA',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: '#FF5EBA',
//     },
//   },
// });

const useStyles =makeStyles((theme)=>({

  title: {
    
    background: "linear-gradient(to right, #FF5EBA , #008FFF, #25F4E7)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
 layer1:{
  height:"100%",
 
},
 btn:{
  marginTop:"0.5em !importent ",
 },
 icons:{
   color:'#008FFF'
 },
Smprofile:{
  width:'10rem',
  borderRadius:'50%',
  border: '4px solid  #008FFF',
  
  
},
profile:{
  width:'20rem' ,
  border:'4',
  padding:'2em'
  
  
 
},
profile_warrper:{
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
 
}

}));
const handleButtonClick = () => {
  window.open('https://www.linkedin.com/in/berlinjohns', '_blank',"noopener noreferrer");
};
export function Home() {
  const classes=useStyles();
  


  
    return (
        
          <Box
          sx={{
            backgroundColor:"#111",
            height:{
              xs:"55vh",
              sm:"60vh",
              md:"85vh",
              lg:"100vh",
            },
          }}
          >
          <Grid container background="default" >
              <Hidden smUp>
                
          <Grid item 
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginTop="5em"
         
           xs={12}>
                
          <img  src={Smprofile} alt="Berlin_Johns_Portfolio" className={classes.Smprofile}/>
                
          </Grid>
              </Hidden>
            
            <Grid item lg={7} md={6} sm={8} 
            className={classes.layer1}
           
            
            sx={{
              marginTop:{
                   xs:2,
                   sm:0,
                   md:14,
                   lg:20,
              },
              marginLeft:{
                xs:4,
                sm:4,
                md:4,
                lg:4,
              },
              lineHeight:{
                xs:'3.2rem',
                sm:'4rem',
                md:'5.5rem',
                lg:'5rem',

              } ,
              
            }}  >
                
                 <Typography component="h1"
                 sx={{
                   
                  fontSize:{
                    xs:'1.9rem',
                    sm:'2.5rem',
                    md:'3rem',
                    lg:60,
                  lineHeight:{
                    xs:'.5rem',
                    sm:'2rem',
                    md:'3.5rem',
                    lg:'5rem',

                  } , 
                  },
                  fontWeight:"600",
                  minWidth:"80%",
                  maxHeight:"50",
                 }}
                 className={classes.title}
                 >
                   As a web designer and 
                   developer, I help you create online assets for your business.
                   
                 </Typography>
                  <Button
                   onClick={handleButtonClick}
                 sx={{
                  backgroundColor:"white",
                  color:"#008FFF"
                 }}>
                      Hire Me
                  </Button>
                
             </Grid>
             <Hidden smDown>
             <Grid item lg={4} md={3} sm={12}>
             <Box sx={{
               paddingTop:{
                md:'6em'
               }
             }} className={classes.profile_warrper}>
                  <img src={Bgprofile} className={classes.profile} alt="Profile" />
             </Box>
             </Grid>
             </Hidden>
             
             
           </Grid>  
           </Box>   
          
        
    )
}


