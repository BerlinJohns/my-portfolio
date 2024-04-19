import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Card, CardContent, Grid, Typography,Box } from '@mui/material';
import { FiCode, FiSmartphone, FiShield } from 'react-icons/fi';
import { GiPaintBrush } from "react-icons/gi";
const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
  },
}));

const servicesData = [
  {
    icon: <FiCode size={40} />,
    title: 'Web Application Development',
    description: 'Crafting responsive and dynamic web applications with cost-effective and tailored solutions.',
  },
  {
    icon: <FiSmartphone size={40} />,
    title: 'Mobile Application Development',
    description: 'Crafting mobile apps for various platforms, ensuring a seamless user experience with expertise in best practices.',
  },
  {
    icon: <FiShield size={40} />,
    title: 'Security Testing',
    description: 'I prioritize the security of your applications, conducting rigorous testing to identify vulnerabilities and focusing on mitigating OWASP Top 10 security risks.',
  },
  {
    icon: <GiPaintBrush size={40} />,
    title: 'Photo Editing',
    description: 'Offering photo editing services tailored for web apps and social media, I enhance images to optimize their impact and engagement.',
  },
];

const MyServices = ({darkMode}) => {
  const classes = useStyles();

  return (
    <Box sx={{
      backgroundColor: darkMode ? "#111" : "white"
    }} className={classes.section}>
      <Container 
     
      maxWidth="lg">
        <Typography
            sx={{
              paddingTop:2.5,
              paddingBottom:2.5,
              color:'#008FFF',
              width:'100%',
              fontSize:{
                xs:25,
                sm:35,
               
              }
             
        }}
        color="secondary" component="h2" variant="h3" align="center" gutterBottom>
          My Services
        </Typography>
        <Grid container spacing={2}>
          {servicesData.map((service, index) => (
            <Grid item xs={6} sm={6} md={4} key={index}>
              <Card className={classes.card}>
                <CardContent>
                  {service.icon}
                  <Typography   
                  sx={{
                    fontSize:{
                      xs:14,
                      sm:24
                    }
                  }}
                  color="primary" variant="h5" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography
                  sx={{
                    textAlign:{
                      xs:"justify"
                    },
                    fontSize:{
                      xs:12,
                      sm:14
                    }
                  }}
                  color="#25F4E7" >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MyServices;
