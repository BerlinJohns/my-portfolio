import React from 'react';
import { Box } from "@mui/system";
import {Typography} from '@mui/material';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import ReactGA from "react-ga4";

import { SiNestjs,SiTailwindcss,SiMongodb,SiExpress,SiTypescript } from "react-icons/si";
import { FaAngular } from "react-icons/fa";


function Projects() {
  const openAliya = () => {
    window.open('https://aliyaservice.netlify.app/', '_blank');
    ReactGA.event({
      category: 'Button Click',
      action: 'Clicked Aliya Project',
    });
  };
  return (
    <>
    <Box sx={{ backgroundColor:'#111'}}>
    <Typography component="h1" 
          sx={{
              paddingTop:2.5,
              paddingBottom:2.5,
              color:'#008FFF',
              width:'100%',
              textAlign:'center',
              fontSize:{
                xs:25,
                sm:35,
               
              }
             
        }}>
              Projects
    </Typography>
        
   <Grid container
   spacing={1}
   sx={{
    padding:2
   }} >
     <Grid item xs={6} md={4}>
<Card 
onClick={openAliya}
sx={{ maxWidth: 345,
    backgroundColor:'#111',
    border: 1,
    borderColor: '#008FFF'
    }}
    
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image="https://ucarecdn.com/ecc7dc8d-a6ff-4e10-89b8-f5ef68105537/-/preview/500x500/-/quality/smart_retina/-/format/auto/"
          alt="Aliya Service"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"
           
           sx={{
            color:'#008FFF',
            fontSize:{
              xs:13
            }
          }}
          >
            Aliya Service
          </Typography>
          <Typography  color="text.secondary"
          sx={{
            color:'#C786FF',
            fontSize:{
              xs:8,
              sm:12
            }
          }}
          >
          It's a simple web application created for service showcase and collect home appliance reapring from clients.

         <Typography variant='h6'
         
         sx={{
          color:'#008FFF',
          fontSize:{
            xs:10,
            md:13
          },
        }}
        >
          Tech stack:
          {' '} 

  <span style={{ color: '#FF31D8' }}>
    <FaAngular />
  </span>
  {' '}
   <span style={{ color: '#38BDF8' }}>
     <SiTailwindcss/>
  </span>
   {' '}
  <span style={{ color: '#E0234E' }}>
    <SiNestjs />
  </span>
  {' '}
   <span style={{ color: '#00ED64' }}>
    <SiMongodb />
  </span>
  

 
 
  
         </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     </Grid>
    <Grid item xs={6} md={4}>
    <Card sx={{ maxWidth: 345 ,
    
    backgroundColor:'#111',
    border: 1,
    borderColor: '#008FFF',
    minHeight: '100%'
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image="https://ucarecdn.com/398127ea-ef87-48b8-b877-b3fc7416aab1/-/preview/1000x491/"
          alt="deploy soon...."
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div"
          sx={{
            color:'#008FFF',
            fontSize:{
              xs:13
            }
          }}
          >
            Pets Zone
          </Typography> 
          <Typography  color="text.secondary"
          sx={{
            color:'#C786FF',
            fontSize:{
              xs:8,
              sm:12
            }
          }}
          >
            Under Construction..
            
      
          </Typography>
             <Typography variant='h6'
         
         sx={{
          color:'#008FFF',
          fontSize:{
            xs:10,
            md:13
          },
          paddingTop:{
           xs:4,
           md: 3.5
          },
        }}
        >
          Tech stack:
          {' '} 

  <span style={{ color: '#FF31D8' }}>
    <FaAngular />
  </span>
  {' '}
   <span style={{ color: '#38BDF8' }}>
     <SiTailwindcss/>
  </span>
   {' '}
  <span style={{ color: '#fff' }}>
    <SiExpress />
  </span>
 {' '}
  <span style={{ color: '#007BCD' }}>
    <SiTypescript />
  </span>
  {' '}
   <span style={{ color: '#00ED64' }}>
    <SiMongodb />
  </span>
         </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>

    </Grid>



   
    </Box>
    </>
  )
}

export default Projects;