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
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { styled } from '@mui/material/styles';


function Intro({ formData, setFormData }) {

  return (
    <Box>
      <Box sx={{
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '25px',
        textAlign: 'center'
      }} > Earn mon ey this week as a residential cleaner!
      </Box>
      <Grid ite xs={12} md={6} sx={{
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
      <Box sx={{ width: '100%', }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ p: 0 }}>
          <Grid item xs={6} >
            <TextField fullWidth sx={{ m: 1, p: 0 }} required
              id="outlined-required"
              label="First Name"
              variant="outlined"
              value={formData.FirstName}
              onChange={(e) => {
                setFormData({ ...formData, FirstName: e.target.value });
              }}
            />
          </Grid>
          <Grid item xs={6} >
            <TextField fullWidth sx={{ m: 1, p: 0 }} id="outlined-basic"
              variant="outlined"
              label="Last Name"
              defaultValue=""
              value={formData.LastName}
              onChange={(e) => {
                setFormData({ ...formData, LastName: e.target.value });
              }} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth sx={{ m: 1, p: 0 }} required
              id="outlined-required"
              label="Email"
              variant="outlined"
              value={formData.Email}
              onChange={(e) => {
                setFormData({ ...formData, Email: e.target.value });
              }} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth sx={{ m: 1, p: 0 }} required
              id="outlined-required"
              label="Phone Number"
              variant="outlined"
              value={formData.PhoneNumber}
              onChange={(e) => {
                setFormData({ ...formData, PhoneNumber: e.target.value });
              }} />
          </Grid>
          <Grid item xs={12}>
            <FormControl sx={{ m: 1, p: 0 }} fullWidth>
              <InputLabel id="demo-simple-select-label">City</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.City}
                label="City"
                onChange={(e) => {
                  setFormData({ ...formData, City: e.target.value });
                }}
              >
                <MenuItem value={'Kiev'}>Kiev</MenuItem>
                <MenuItem value={'Lviv'}>Lviv</MenuItem>
                <MenuItem value={'Odessa'}>Odessa</MenuItem>
              </Select>
            </FormControl>
          </Grid>

        </Grid>
      </Box>
    </Box>);
}
export default Intro