import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import heroImgPath from '../../assets/images/5.jpg';
import styled from 'styled-components';

const TitleTypography = styled(Typography)`
  && {
    font-size: 5.5rem;
    font-weight: 700;
    line-height: 1.2em;
    text-transform: capitalize;
    @media (max-width: 768px) {
    /* Adjust styles for smaller screens here */
    font-size: 3.2rem; /* Example: Reduce font size */
  }
  }
`;

const SubtitleTypography = styled(Typography)`
  && {
    font-size: 1.2rem;
    line-height: 1.5em;
    @media (max-width: 768px) {
    /* Adjust styles for smaller screens here */
    font-size: 0.8rem; /* Example: Reduce font size */
  }
  }
`;

const CTAButton = styled(Button)`
  && {
    box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.5);
    text-transform: capitalize;
    color: #12333a;
    font-size: 1.1rem;
    font-weight: 600;
    width: fit-content;
    padding: 6px 3rem;
    background-color: #fffffd;
    &:hover {
      background-color: #f0f0f0;
      box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5);
    }
    &:active {
      background-color: #e0e0e0;
      box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.6);
    }
    &:focus {
      box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.5);
    }
  }
`;

const HeroContainer = styled(Box)`
  background: linear-gradient(to top, rgba(0,0,0, .6), rgb(18, 51, 58,0.7)), url(${heroImgPath}); /* Replace 'gear.jpg' with your image path */
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
  text-align: center;

 
`;

function Hero() {
  return (
    <HeroContainer component="header" >
      <Grid container display="flex" direction="column" justifyContent="center" alignItems="center" width="50%" gap={3} sx={{ height: '100%'  } }>
         <TitleTypography variant='h1'>make room for adventure</TitleTypography>
         <SubtitleTypography color="secondary.contrastText">The world is full of corners, as they say. With HutHut, you can
         explore as many of them as you can handle, with our beautiful selection of remote adventure trails. Where do you want to go?</SubtitleTypography>
         <CTAButton variant='contained' color='secondary'>explore</CTAButton>
      </Grid>
    </HeroContainer>
  );
}

export default Hero;
