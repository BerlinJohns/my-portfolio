import React from 'react';
import {Typography} from '@mui/material';
import { makeStyles} from '@mui/styles';
import {Box} from '@mui/system';
import Grid from '@mui/material/Grid';
import {FaFreeCodeCamp,FaReact,FaNodeJs,FaLinux,FaGitAlt} from 'react-icons/fa';
import {GrMysql} from 'react-icons/gr';
import {SiMongodb,SiBootstrap,SiOwasp,SiFastapi,} from 'react-icons/si';
import { useState } from 'react';
import { FaAngular } from "react-icons/fa";

const useStyles=makeStyles((theme)=>({
  list:{
     
      
  },
  
}));
const skillList=[
  {
    id:0,
    name:"Angular",
    icon:<FaAngular/>
  },
  {
    id:1,
    name: "React",
    icon: <FaReact/>

  },
  { 
    id:2,
    name: "Node.js",
    icon: <FaNodeJs/>

  },
  {
    id:3,    
    name:"React Native",
    icon: <FaReact/>

  },
  {
    id:4,
    name: "Linux",
    icon: <FaLinux/>
  },
  {
    id:5,
    name: "Python FastApi",
    icon: <SiFastapi/>

  },
  {
    id:6,
    name:"Version Control",
    icon:<FaGitAlt/>
  },
  {
    id:7,
    name: "SQL/NoSQL",
    icon2: <GrMysql/>,
    icon: <SiMongodb/>

  },
  {
    id:8,
    name:"Bootstrap , MUI",
    icon:<SiBootstrap/>
  },
  { 
    id:9,
    name:"Security Testing",
    icon:<SiOwasp/>
  }
]
export function Skills({darkMode}) {
    const [skills]=useState(skillList);
    const classes=useStyles();
    
    return (
        <>
        <Box sx={{ backgroundColor:darkMode ? "#111" : "white"}}>
          <Typography component="h1" 
          sx={{
              paddingTop:9,
              color:'#008FFF',
              width:'100%',
              textAlign:'center',
              fontSize:{
                xs:25,
                sm:35,
               
              }
             
        }}>
              My Skill Sets
          </Typography>
          <Grid container>
              <Grid item xs={10} marginX="auto" marginY="3em" alignContent="center"> 
                <Typography xs={{
                  marginY:'1em !important',
                }} color="#C786FF" 
                component="ul" 
                style ={{listStyle:'none'}}>
                    
                   { skills.map((link) => {
                     
                    return(
                      <Typography key={link.id} component="li" sx={{fontSize:{xs:18,sm:22},marginTop:5}} className={classes.list}>
                     <FaFreeCodeCamp color='#008FFF'/> &nbsp; &nbsp; {link.name} &nbsp;{link.icon}
                     </Typography>
                     )})
                    }
                
                  
                </Typography>
              

           </Grid >
          </Grid>
        </Box>
        </>
    )
}


