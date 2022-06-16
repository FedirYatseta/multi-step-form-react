import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl'
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import { FormLabel, RadioGroup, FormControlLabel, Radio, InputLabel, Select, MenuItem } from '@mui/material/'

import Autocomplete from '@mui/material/Autocomplete';
const options = ['1', '2'];
export default function BasicInfo({ formData, setFormData }) {
    const columns = [
        { field: 'id', headerName: '', width: 75 },
        { field: 'Sun', headerName: 'Sun', width: 75, editable: true, type: 'boolean' },
        { field: 'Mon', headerName: 'Mon', width: 75, editable: true, type: 'boolean' },
        { field: 'Tue', headerName: 'Tue', width: 75, editable: true, type: 'boolean' },
        { field: 'Wed', headerName: 'Wed', width: 75, editable: true, type: 'boolean' },
        { field: 'Thu', headerName: 'Thu', width: 75, editable: true, type: 'boolean' },
        { field: 'Fri', headerName: 'Fri', width: 75, editable: true, type: 'boolean' },
        { field: 'Sat', headerName: 'Sat', width: 75, editable: true, type: 'boolean' },
    ]

    const rows = [
        { id: 'Morning', Mon: false, Tue: false, Wed: false, Thu: false, Fri: false, Sat: false },
        { id: 'Afternoon', Mon: false, Tue: false, Wed: false, Thu: false, Fri: false, Sat: false },
        { id: 'Evening', Mon: false, Tue: false, Wed: false, Thu: false, Fri: false, Sat: false },
    ]

    const initialData = [

    ]
    //const [state, setState] = React.useState(initialData)

    const [value, setValue] = React.useState(options[0]);
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    //const [value, setValue] = React.useState(theAge[0]);

    return (
        <Box>
            <div>
                <div>
                    <h1>Basic Information</h1>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FormLabel id="demo-simple-select-label" required>Street Address</FormLabel>
                        <TextField fullWidth
                            required
                            id="outlined-required"
                            variant="outlined"
                            value={formData.baseAddress}
                            onChange={(e) => {
                                setFormData({ ...formData, baseAddress: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormLabel id="demo-simple-select-label" required>APT # (optional)</FormLabel>
                        <TextField fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            value={formData.baseApt}
                            onChange={(e) => {
                                setFormData({ ...formData, baseApt: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormLabel id="demo-simple-select-label" required>City</FormLabel>
                        <TextField fullWidth
                            required
                            id="outlined-required"
                            variant="outlined"
                            value={formData.baseCity}
                            onChange={(e) => {
                                setFormData({ ...formData, baseCity: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormLabel id="demo-simple-select-label" required>State</FormLabel>
                        <TextField fullWidth
                            required
                            id="outlined-required"
                            variant="outlined"
                            value={formData.baseState}
                            onChange={(e) => {
                                setFormData({ ...formData, baseState: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormLabel id="demo-simple-select-label" required>Phone Number</FormLabel>
                        <TextField fullWidth
                            required
                            id="outlined-required"
                            type="number"
                            variant="outlined"
                            value={formData.basePhone}
                            onChange={(e) => {
                                setFormData({ ...formData, basePhone: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormLabel id="demo-simple-select-label" required>  DOB</FormLabel>
                        <TextField fullWidth sx={{ m: 0, p: 0 }} id="outlined-required"
                            type="date"
                            variant="outlined"
                            value={formData.baseDOB}
                            onChange={(e) => {
                                setFormData({ ...formData, baseDOB: e.target.value });
                            }} />
                    </Grid>
                </Grid>
            </div>
            <FormControl fullWidth sx={{ m: 0, py: 2 }}>
                <FormLabel id="demo-radio-buttons-group-label" sx={{ m: 0, py: 2, fontSize: '25px', fontWeight: 600, }}>Cleaning Experience</FormLabel>
                <FormLabel>Do you have professional cleaning experience? </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Yes"
                    name="radio-buttons-group"
                >
                    <FormControlLabel sx={{ border: '1px solid #cdcdcd', borderRadius: 2, mt: 1, mx: 0 }}
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                        onChange={(e) => {
                            setFormData({ ...formData, question_1: e.target.value });
                        }} />
                    <FormControlLabel sx={{ border: '1px solid #cdcdcd', borderRadius: 2, mt: 1, mx: 0 }}
                        value="No"
                        control={<Radio />}
                        label="No" onChange={(e) => {
                            setFormData({ ...formData, question_1: e.target.value });
                        }} />
                </RadioGroup>
            </FormControl>
            <FormControl fullWidth sx={{ m: 0, py: 2, }}>
                <FormLabel sx={{ m: 0, py: 2 }}>How many years of experience do you have? </FormLabel>
                <Autocomplete
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        setFormData({ ...formData, question_2: newValue });
                    }}
                    id="controllable-states-demo"
                    options={options}
                    renderInput={(params) => <TextField {...params} />} />
            </FormControl>
            <FormControl fullWidth sx={{ m: 0, py: 2 }}>
                <FormLabel id="demo-radio-buttons-group-label" sx={{ m: 0, py: 2 }}>Can you legally work in the us?  </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Yes"
                    name="radio-buttons-group"
                >
                    <FormControlLabel sx={{ border: '1px solid #cdcdcd', borderRadius: 2, mt: 1, mx: 0 }}
                        value="Yes" control={<Radio />} label="Yes"
                        onChange={(e) => {
                            setFormData({ ...formData, question_3: e.target.value });
                        }} />
                    <FormControlLabel sx={{ border: '1px solid #cdcdcd', borderRadius: 2, mt: 1, mx: 0 }}
                        value="No" control={<Radio />} label="No"
                        onChange={(e) => {
                            setFormData({ ...formData, question_3: e.target.value });
                        }} />
                </RadioGroup>
            </FormControl>
            <FormControl fullWidth sx={{ m: 0, py: 2 }}>
                <FormLabel id="demo-radio-buttons-group-label" sx={{ m: 0, py: 2 }}>Can you pass a background check? </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Yes"
                    name="radio-buttons-group"
                >
                    <FormControlLabel sx={{ border: '1px solid #cdcdcd', borderRadius: 2, mt: 1, mx: 0 }}
                        value="Yes" control={<Radio />} label="Yes"
                        onChange={(e) => {
                            setFormData({ ...formData, question_4: e.target.value });
                        }} />
                    <FormControlLabel sx={{ border: '1px solid #cdcdcd', borderRadius: 2, mt: 1, mx: 0 }}
                        value="No" control={<Radio />} label="No"
                        onChange={(e) => {
                            setFormData({ ...formData, question_4: e.target.value });
                        }} />
                </RadioGroup>
            </FormControl>
            <FormControl fullWidth sx={{ m: 0, py: 2 }}>
                <FormLabel id="demo-radio-buttons-group-label">Our employees are paid by direct deposit, do you have a bank account</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Yes"
                    name="radio-buttons-group"
                >
                    <FormControlLabel sx={{ border: '1px solid #cdcdcd', borderRadius: 2, mt: 1, mx: 0 }}
                        value="Yes" control={<Radio />} label="Yes"
                        onChange={(e) => {
                            setFormData({ ...formData, question_5: e.target.value });
                        }} />
                    <FormControlLabel sx={{ border: '1px solid #cdcdcd', borderRadius: 2, mt: 1, mx: 0 }}
                        value="No" control={<Radio />} label="No" onChange={(e) => {
                            setFormData({ ...formData, question_5: e.target.value });
                        }} />
                </RadioGroup>
            </FormControl>
            <FormControl fullWidth sx={{ m: 0, py: 2 }}>
                <FormLabel id="demo-radio-buttons-group-label">You’ll need to get to cleans across the city, do you have transport ?</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="personal"
                    name="radio-buttons-group"
                >
                    <FormControlLabel sx={{ border: '1px solid #cdcdcd', borderRadius: 2, mt: 1, mx: 0 }}
                        value="personal" control={<Radio />} label="Yes, I have a vehicle"
                        onChange={(e) => {
                            setFormData({ ...formData, question_6: e.target.value });
                        }}
                    />
                    <FormControlLabel sx={{ border: '1px solid #cdcdcd', borderRadius: 2, mt: 1, mx: 0 }}
                        value="public" control={<Radio />} label="Yes, I take public transportation" onChange={(e) => {
                            setFormData({ ...formData, question_6: e.target.value });
                        }} />
                    <FormControlLabel sx={{ border: '1px solid #cdcdcd', borderRadius: 2, mt: 1, mx: 0 }}
                        value="No" control={<Radio />} label="No" onChange={(e) => {
                            setFormData({ ...formData, question_6: e.target.value });
                        }} />
                </RadioGroup>
            </FormControl>
            <FormControl fullWidth sx={{ m: 0, py: 2 }}>
                <FormLabel >Work Availability</FormLabel>
                <DataGrid required
                    rows={rows}
                    columns={columns}
                    pageSize={3}
                    rowsPerPageOptions={[3]}
                    editMode="cell"
                    hideFooterPagination
                //onCellEditCommit={handleCommit}
                />
            </FormControl>
            {/* <h1>{JSON.stringify(state)}</h1> */}
        </Box>
    );
}
