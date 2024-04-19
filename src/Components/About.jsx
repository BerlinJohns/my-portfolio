import React from "react";
import { Typography,Button} from "@mui/material";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Showcase from "../Media/showcase.svg";
import { FaFileDownload } from "react-icons/fa";
import ReactGA from "react-ga4";


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

    const  resumeDownload=()=>{
        ReactGA.event({
            category: 'Button Click',
            action: 'Resume Downloaded',
          });
    }
    return (
       
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
                    xs:3,
                    
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
                 <Typography color="primary" component="h2" variant="h2"
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
                      
                    }}>Hi, I'm
                    </Typography>
                   
                    <Typography
                    color="white"
                    variant='p'
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
                           fontFamily:"Lora",
                           fontStyle:"italic",
                           marginLeft:"1em"
                        
                    }}
                    >Berlin Johns.M </Typography>

                   <Typography
                   color="primary"
                   sx={{
                    lineHeight:{
                        xs:2,
                        sm:4
                    },
                    fontSize:{
                        xs:15,
                        sm:18,

                    },
                    textAlign:{
                        xs:"justify",
                        
                    }

                   }}>
                    I am a self-taught developer and designer who embarked on my coding journey during the lockdown period of 2020.  I am proficient at developing modern web and mobile applications, showcasing my evolving skills in both development and design.
                   </Typography>
               

                    <Button
                    onClick={resumeDownload}
                    sx={{
                       marginY:{
                        xs:3,
                        sm:1,
                       },
                       '& a': {
                        textDecoration: 'none', // Remove text decoration for anchor tag
                        color: 'inherit', // Inherit text color from parent (button)
                      },
                    }} 
                    size="medium" color="success" variant="outlined" startIcon={<FaFileDownload/>} >
                          <a  href="https://raw.githubusercontent.com/berlinjohns/resume/main/Berlin_Johns_Resume.pdf" download>Download Resume</a>
                    </Button>
                </Grid>
                <Grid item xs={10} sm={12} md={6} lg={5}>
                 
                     <img src={Showcase} className={classes.Showcase} alt="showcase"
                     />
                  
                </Grid>    
              </Grid>
              </Box>
            </Box>  
          
    )
}


