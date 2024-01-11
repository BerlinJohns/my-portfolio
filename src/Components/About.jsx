import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Showcase from "../Media/showcase.svg";
import Reveal from 'react-reveal/Reveal';


const useStyles=makeStyles((theme)=>({
   heading:{
       display:'flex',
       justifyContent:'center',
     
   },
   
   Showcase:{
       width:"80%",
       hight:'80%',
       marginRight:"2em",
       marginLeft:"4em",
       alignContent:'center'
   }
}));




export function About() {
    const classes=useStyles();
    return (
        <Reveal effect="fadeInUp">
        <Box
        sx={{
            backgroundColor:"#111"
        }}
        >
                                                                         
                                                                        
            <Typography
             component="h2"
             variant="h3"
             color="secondary"
             className={classes.heading}
             sx={{
                pt:{
                    xs:24,
                    sm:4,
                    md:1,
                    lg:3,
                },
                 mb:{
                     xs:1,
                     sm:1,
                     md:1,
                     lg:3,
                 },
                 fontSize:{
                     xs:25,
                     sm:35,
                     md:35,
                     lg:40
                 }
             }}
            >
                                          About me
            </Typography>
                                            
            <Box >        
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={6} lg={6}
                sx={{
                   margin:"2em"
                }}
              
                >
                <Typography
                component="p"
                color="primary"
                sx={{
                   fontSize:{
                    xs:14,
                    sm:20,
                    md:20,
                    lg:"1.4rem"
                   },
                   lineHeight:{
                    xs:1.4,   
                    lg:2
                   },
                   wordSpacing:{
                       xs:15,
                       sm:10,
                       md:15,
                       lg:10
                   },
                   }}
                    
                    >
                    <Typography component="h2" varient="h2"
                    sx={{
                        fontSize:{
                            xs:22,
                            sm:38,
                            md:38,
                            lg:40,
                            
                        },
                        fontWeight:{
                            xs:700,
                        },
                        lineHeight:{
                           
                           }
                      
                    }}>Hi, I'm</Typography>
                    <Typography
                    color="white"
                    varient='p'
                    sx={{
                        lineHeight:{
                           xs:3,
                           },
                           fontSize:{
                            xs:25,
                            sm:40,
                            md:35,
                            lg:"4.2rem"
                           },
                           fontFamily:"Metal Mania",
                           marginLeft:"1em"
                        
                    }}
                    >Berlin Johns.M </Typography>
                    
                   <Typography
                   sx={{
                    lineHeight:{
                        sm:4
                    }
                   }}>
                    I am a self-taught developer and designer who embarked on my coding journey during the lockdown period of 2020.  I am proficient at developing modern web and mobile applications, showcasing my evolving skills in both development and design.
                   </Typography>
                  
                    </Typography>
                </Grid>
                <Grid item xs={10} sm={12} md={6} lg={5}>
                 
                     <img src={Showcase} className={classes.Showcase} alt="showcase"
                     />
                  
                </Grid>    
              </Grid>
              </Box>
            </Box>
             </Reveal>    
          
    )
}


