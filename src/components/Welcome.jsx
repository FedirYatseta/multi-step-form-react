import { Box } from "@mui/material";
import React from "react";
import Typography from '@mui/material/Typography';
import logo from '../img/main.png';
import { Image } from 'mui-image'
function Welcome({ formData, setFormData }) {
  return (
    <Box>
      <Typography variant="h4" component="div" gutterBottom sx={{ textAlign: 'center', }}>
        Thank You!
      </Typography>
      <Typography variant="body2" component="div" gutterBottom sx={{ textAlign: 'center', py: 3 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
      </Typography>
      <Box sx={{ pb: 0 }}>
        <Image src={logo} />
      </Box>
    </Box>
  );
}

export default Welcome;
