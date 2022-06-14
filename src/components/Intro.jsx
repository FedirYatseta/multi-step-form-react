import React from "react";
import logo from '../img/main.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl'
import { DataGrid, GridCellEditCommitParams, GridRowModes } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import { FormLabel, InputLabel, Select, MenuItem, NativeSelect } from '@mui/material/'

function Intro({ formData, setFormData }) {

  // const [City, setCity] = React.useState('');
  // const handleChange = (event) => {
  //   setCity(event.target.value);
  //   setFormData({ ...formData, City: setCity });
  // };
  return (
    <div className="sign-up-container">
      <h1>Earn money this week as a residential cleaner!</h1>
      <ul>
        <li><span className="material-symbols-outlined">
          verified
        </span>Access to hundreds of clients </li>
        <li><span className="material-symbols-outlined">
          verified
        </span>Set your own pay rate </li>
        <li><span className="material-symbols-outlined">
          verified
        </span>Control your own schedule</li>
      </ul>
      <div className="item-photo ibg">
        <img src={logo} alt="main" />
      </div>

      <Grid className='sign-up-container-items'>
        <Grid >
          <TextField
            required
            //id="outlined-required"
            label="First Name"
            variant="outlined"
            value={formData.FirstName}
            onChange={(e) => {
              setFormData({ ...formData, FirstName: e.target.value });
            }}
          />
        </Grid>
        <Grid>
          <TextField
            // id="outlined-basic"
            variant="outlined"
            label="Last Name"
            defaultValue=""
            value={formData.LastName}
            onChange={(e) => {
              setFormData({ ...formData, LastName: e.target.value });
            }}
          />
        </Grid>
        <Grid >
          <TextField
            required
            // id="outlined-required"
            label="Email"
            variant="outlined"
            value={formData.Email}
            onChange={(e) => {
              setFormData({ ...formData, City: e.target.value });
            }}
          />
        </Grid>
        <Grid >
          <TextField
            required
            // id="outlined-required"
            label="Phone Number"
            variant="outlined"
            value={formData.PhoneNumber}
            onChange={(e) => {
              setFormData({ ...formData, PhoneNumber: e.target.value });
            }}
          />
        </Grid>
      </Grid>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select className='item-city'
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

    </div>
  );
}

export default Intro;
