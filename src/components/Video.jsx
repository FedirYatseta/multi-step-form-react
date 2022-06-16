import { Grid, Box } from "@mui/material";
import { Typography } from '@mui/material';

import TextField from '@mui/material/TextField';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { TextFields } from "@mui/icons-material";

function Video({ formData, setFormData }) {
  const divStyle = {
    color: '#000'
  };
  return (
    <Box>
      <Typography sx={{ textAlign: 'center', fontWeight: 600 }} variant="h5">Video Interview</Typography>
      <Typography sx={{ py: 2, textAlign: 'center' }}>Please answer the following, and feel free to keep it short and sweet.
        This is the final step in the application process!</Typography>
      <Grid container spacing={2} sx={{ p: 2 }} >
        <Grid tem xs={12} sm={6}>
          <Typography variant="button" component="div" gutterBottom sx={{ textAlign: 'left', }}>
            Question 1 of 1
          </Typography>
          <Typography variant="body2" component="div" gutterBottom sx={{ textAlign: 'left' }}>
            Think back to your past work
            experience or hobbies and tell us
            what skills you have that would
            make you a good employee. Please
            take more than 15 seconds.
          </Typography>
          <Typography variant="body2" component="div" gutterBottom sx={{ textAlign: 'left', color: '#888d90' }}>
            You have <b style={divStyle}>120 seconds to answer.</b> When
            you are ready, press the camera icon to
            start recording.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Skeleton variant="rectangular" height={200} />
          </div>
        </Grid>
      </Grid>
    </Box >
  );
}

export default Video;
