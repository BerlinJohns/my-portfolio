import React from 'react';
import { Typography } from '@mui/material';
import Grid from "@mui/material/Grid";
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Bootstrap from '../Media/bootstrap.png';
import Ebase from '../Media/firebase.png';
import Next from '../Media/nextjs.png';
import Node from '../Media/nodejs.png';
import Logo from '../Media/logo.svg';
import "../App.css"


const useStyles=makeStyles((theme)=>({
    heading:{
        display:'flex',
        justifyContent:'center',
          
    },
    iconFi:{
       maxWidth:"100%",
       hight:"auto",

       
       
    },
    iconBs:{
        maxWidth:"70%",
        hight:"auto",
        marginLeft:"2em"
 },
 iconNx:{
    maxWidth:"70%",
    hight:"auto",
    marginLeft:"2em"
},
iconNjx:{
    maxWidth:"70%",
    hight:"auto",
   
}
    
}));


function Techuse() {
    const classes=useStyles();
    return (
        <Box
        sx={{
            backgroundColor:"#111",
        }}>
             <Typography
            component="h3"
            varient="h3"
            color="secondary"
            className={classes.heading}
            sx={{
                mb:{
                    xs:10,
                    sm:10,
                    md:10,
                    lg:6.5,
                },
                fontSize:{
                    xs:25,
                    sm:35,
                    md:35,
                    lg:40
                }
            }}>
                Tech I Using ;)
            </Typography>
            <Grid container spacing={4}> 
                  <Grid item xs={6} sm={4} md={6} lg={4}>
                   <div> <img 
                    src={Bootstrap} alt="Bootstrap image "  className={classes.iconBs}/>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={4} md={3} lg={4}>
                   <div>
                   <img 
                    src={Ebase} alt="Firebase image "  className={classes.iconFi}/>
                   </div>
                  </Grid>
                  <Grid item xs={6} sm={4} md={3} lg={4}>
                   <div>
                   <img 
                    src={Next} alt="Next js image"  className={classes.iconNx}/>
                   </div>
                  </Grid>
                  <Grid item xs={6} sm={4} md={3} lg={4}>
                   <div>
                   <img 
                    src={Node} alt=" Node js image "  className={classes.iconNjx}/>
                   </div>
                  </Grid>
                  <Grid item xs={6} sm={4} md={3} lg={4}>
                   <div>
                   <img 
                    src={Logo} alt=" React js image "  className="App-logo"/>
                   </div>
                  </Grid>
            </Grid>
        </Box>
    )
}

export default Techuse
