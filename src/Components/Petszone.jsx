import React from 'react';
import { Box, } from '@mui/system';
import {Typography,List, ListItem,ListItemIcon, ListItemText} from '@mui/material';
import AngularLogo from '../Media/angular.ico';
import { Button } from '@mui/material';
import { Link } from '@mui/material';
import { FaExternalLinkAlt } from "react-icons/fa";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Petszone({ darkMode, toggleDarkMode }) {
   
    
  return (
    
    <>
    
    <Box
          sx={{
            backgroundColor:darkMode ? '#111':'white',
            marginTop:8,
            height: {
                xs: "auto", // This allows the height to adjust based on content
              },
              minHeight: "100vh",
          }}
          >
            <Typography component="h1" 
          sx={{
              paddingTop:2.5,
              paddingBottom:2.5,
              color:'#FF5EBA',
              width:'100%',
              textAlign:'center',
              fontSize:{
                xs:25,
                sm:35,
               
              }
             
        }}>
              PetsZone
    </Typography>
    <Typography component="h6" 
          sx={{
              paddingY:2.5,
              paddingX:2,
              color:'#25F4E7',
              width:'100%',
              textAlign:'left',

              fontSize:{
                xs:18,
                sm:27,
               
              }
             
        }}>
              TechStack Details:

    </Typography>
        <Typography component="p" 
            sx={{
                paddingY:1,
                paddingX:2,
                
                color:'#008FFF',
                width:'100%',
                textAlign:'left',

                fontSize:{
                    xs:14,
                    sm:21,
                
                }
                
            }}>
                Frond End:
                <img 
            src={AngularLogo} 
            alt="Angular Logo" 
            style={{ width: 20,
                    height: 20,
                    marginLeft: 8 }} // Adjust the size and margin as needed
        />ngular 17

        </Typography>

        <Typography
          component="p"
          sx={{
            paddingY: 1,
            paddingX: 2,
            color: '#008FFF',
            width: '100%',
            textAlign: 'left',
            fontSize: {
              xs: 14,
              sm: 21,
            },
          }}
        >
          Backend: Express.js + TypeScript
        </Typography>
        <Typography
          component="p"
          sx={{
            paddingY: 1,
            paddingX: 2,
            color: '#008FFF',
            width: '100%',
            textAlign: 'left',
            fontSize: {
              xs: 14,
              sm: 21,
            },
          }}
        >
          Database: MongoDB
        </Typography>
        <Typography
          component="p"
          sx={{
            paddingY: 1,
            paddingX: 2,
            color: '#008FFF',
            width: '100%',
            textAlign: 'left',
            fontSize: {
              xs: 14,
              sm: 21,
            },
          }}
        >
          Authentication: Firebase
        </Typography>
        
      
        <Typography
          component="p"
          sx={{
            paddingY: 1,
            paddingX: 2,
            color: '#008FFF',
            width: '100%',
            textAlign: 'left',
            fontSize: {
              xs: 14,
              sm: 21,
            },
          }}
        >
          Payment Gateway: GPay
        </Typography>
        <Typography
          component="p"
          sx={{
            paddingY: 1,
            paddingX: 2,
            color: '#008FFF',
            width: '100%',
            textAlign: 'left',
            fontSize: {
              xs: 14,
              sm: 21,
            },
          }}
        >
          CSS Framework: Tailwind CSS
        </Typography>

        <Box sx={{ marginTop: 4}}>
        <Typography
          component="h2"
          sx={{
            paddingY: 1,
            paddingX: 2,
            color:'#25F4E7',
            width: '100%',
            textAlign: 'left',
            fontSize: {
              xs: 16,
              sm: 24,
            },
            marginBottom: 2,
          }}
        >
          Upcoming Features I will add:
        </Typography>
        <List sx={{
            color: '#008FFF',
        }}>
          <ListItem>
          <ListItemIcon
           sx={{ 
            color: '#25F4E7', // Change bullet color here
          }} >
              <FiberManualRecordIcon fontSize="inherit" />
            </ListItemIcon>
            <ListItemText  primary="Pagination" />
          </ListItem>
          <ListItem>
          <ListItemIcon
           sx={{ 
            color: '#25F4E7', // Change bullet color here
          }} >
              <FiberManualRecordIcon fontSize="inherit" />
            </ListItemIcon>
            <ListItemText primary="Changing from default change detection to OnPush or local change detection" />
          </ListItem>
          <ListItem>
          <ListItemIcon
           sx={{ 
            color: '#25F4E7', // Change bullet color here
          }} >
              <FiberManualRecordIcon fontSize="inherit" />
            </ListItemIcon>
            <ListItemText primary="Adding live chat option to increase B2C interaction" />
          </ListItem>
          <ListItem>
          <ListItemIcon
           sx={{ 
            color: '#25F4E7', // Change bullet color here
          }} >
              <FiberManualRecordIcon fontSize="inherit" />
            </ListItemIcon>
            <ListItemText primary="Implementing a global product search option" />
          </ListItem>
          
        </List>
      </Box>

      <div>
       {/* Your content here */}
       <Link 
        href="https://ngpetszone.netlify.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 20,
          textDecoration: 'none', // Removes underline from the link
        }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<FaExternalLinkAlt />} // Add icon to the button
          sx={{
            display: 'flex',
            alignItems: 'center',
           
            padding: {
              xs: '8px 16px',
              sm: '10px 20px',
            },
            fontSize: {
              xs: '12px',
              sm: '14px',
            },
            minWidth: {
              xs: 'auto',
              sm: '150px',
            },
          }}
        >
          Visit Now
        </Button>
      </Link>
    </div>
        </Box>
    </>
  )
}

export default Petszone