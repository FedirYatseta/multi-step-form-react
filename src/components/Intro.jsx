import React from "react";
import logo from '../img/main.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid';
import { FormLabel, InputLabel, Select, MenuItem, NativeSelect } from '@mui/material/'
import { Image } from 'mui-image'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

import Autocomplete from '@mui/material/Autocomplete';

const options = ['Kiev', 'Vinnytsia', 'Odessa'];

function Intro({ formData, setFormData }) {
  const [value, setValue] = React.useState(options[0]);
  return (
    <Box>
      <Box sx={{
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '25px',
        textAlign: 'center'
      }} > Earn money this week as a residential cleaner!
      </Box>
      <Grid item xs={12} sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'stretch',
        p: '30px'
      }} >
        <List sx={{ p: '0' }}>
          <ListItem sx={{ p: '2px' }}>
            <ListItemIcon sx={{ minWidth: '30px', color: '#77c977' }}>
              <CheckCircleOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary='Access to hundreds of clients' />
          </ListItem>
        </List>
        <List sx={{ p: '0' }}>
          <ListItem sx={{ p: '2px' }}>
            <ListItemIcon sx={{ minWidth: '30px', color: '#77c977' }}>
              <CheckCircleOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary='Set your own pay rate' />
          </ListItem>
        </List>
        <List sx={{ p: '0' }}>
          <ListItem sx={{ p: '2px' }}>
            <ListItemIcon sx={{ minWidth: '30px', color: '#77c977' }}>
              <CheckCircleOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary='Control your own schedule' />
          </ListItem>
        </List>
      </Grid>
      <Box sx={{ py: 2 }}>
        <Image src={logo} />
      </Box>
      <div>
        <Grid container spacing={2} sx={{ pb: 3 }}>
          <Grid item xs={6} >
            <FormLabel id="demo-simple-select-label" required>First Name</FormLabel>
            <TextField fullWidth
              required
              id="outlined-required"
              variant="outlined"
              value={formData.FirstName}
              onChange={(e) => {
                setFormData({ ...formData, FirstName: e.target.value });
              }}
            />
          </Grid>
          <Grid item xs={6} >
            <FormLabel id="demo-simple-select-label" required>Last Name</FormLabel>
            <TextField fullWidth id="outlined-basic"
              variant="outlined"
              value={formData.LastName}
              onChange={(e) => {
                setFormData({ ...formData, LastName: e.target.value });
              }} />
          </Grid>
          <Grid item xs={6}>
            <FormLabel id="demo-simple-select-label" required>Email</FormLabel>
            <TextField required fullWidth
              id="outlined-required"
              variant="outlined"
              value={formData.Email}
              onChange={(e) => {
                setFormData({ ...formData, Email: e.target.value });
              }} />
          </Grid>
          <Grid item xs={6}>
            <FormLabel id="demo-simple-select-label" required>Phone Number</FormLabel>
            <TextField required fullWidth
              id="outlined-required"
              variant="outlined"
              value={formData.PhoneNumber}
              onChange={(e) => {
                setFormData({ ...formData, PhoneNumber: e.target.value });
              }} />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FormLabel id="demo-simple-select-label" sx={{ mb: 1, p: 0 }}>Which city you want to work in? *</FormLabel>
              <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                  setFormData({ ...formData, City: newValue });
                }}
                id="controllable-states-demo"
                options={options}
                renderInput={(params) => <TextField {...params} label='Pick a city' />} />
            </FormControl>
          </Grid>
        </Grid>
      </div>
    </Box>
  )
}
export default Intro