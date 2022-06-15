import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl'
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import { FormLabel, RadioGroup, FormControlLabel, Radio, InputLabel, Select, MenuItem } from '@mui/material/'

import Autocomplete from '@mui/material/Autocomplete';

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
    const theAge = ['1', '2', '3']
    const [value, setValue] = React.useState(null);
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Box>
            <div>
                <div>
                    <h1>Basic Information</h1>
                </div>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Street Address"
                            variant="outlined"
                            value={formData.baseAddress}
                            onChange={(e) => {
                                setFormData({ ...formData, baseAddress: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="APT # optional"
                            value={formData.baseApt}
                            onChange={(e) => {
                                setFormData({ ...formData, baseApt: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="outlined-required"
                            label="City"
                            variant="outlined"
                            value={formData.baseCity}
                            onChange={(e) => {
                                setFormData({ ...formData, baseCity: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="outlined-required"
                            label="State"
                            variant="outlined"
                            value={formData.baseState}
                            onChange={(e) => {
                                setFormData({ ...formData, baseState: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Phone Number"
                            type="number"
                            variant="outlined"
                            value={formData.basePhone}
                            onChange={(e) => {
                                setFormData({ ...formData, basePhone: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
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
                    <FormControlLabel sx={{ border: '1px solid #cdcdcd', borderRadius: 2, my: 1, mx: 0 }}
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                        onChange={(e) => {
                            setFormData({ ...formData, question_1: e.target.value });
                        }} />
                    <FormControlLabel sx={{ border: '1px solid #cdcdcd', borderRadius: 2, my: 1, mx: 0 }}
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
                    selectOnFocus
                    disablePortal
                    id="combo-box-demo"
                    options={theAge}
                    onChange={(e) => {
                        setFormData({ ...formData, question_2: e.target.value });
                    }}
                    renderInput={(params) => <TextField {...params} label="1" />}
                />
            </FormControl>
            <FormControl fullWidth sx={{ m: 0, py: 2 }}>
                <FormLabel id="demo-radio-buttons-group-label" sx={{ m: 0, py: 2 }}>Can you legally work in the us?  </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Yes"
                    name="radio-buttons-group"
                >
                    <FormControlLabel sx={{ border: '1px solid #cdcdcd', borderRadius: 2, my: 1, mx: 0 }}
                        value="Yes" control={<Radio />} label="Yes"
                        onChange={(e) => {
                            setFormData({ ...formData, question_3: e.target.value });
                        }} />
                    <FormControlLabel sx={{ border: '1px solid #cdcdcd', borderRadius: 2, my: 1, mx: 0 }}
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
                    <FormControlLabel sx={{ border: '1px solid #cdcdcd', borderRadius: 2, my: 1, mx: 0 }}
                        value="Yes" control={<Radio />} label="Yes"
                        onChange={(e) => {
                            setFormData({ ...formData, question_4: e.target.value });
                        }} />
                    <FormControlLabel sx={{ border: '1px solid #cdcdcd', borderRadius: 2, my: 1, mx: 0 }}
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
                    <FormControlLabel sx={{ border: '1px solid #cdcdcd', borderRadius: 2, my: 1, mx: 0 }}
                        value="Yes" control={<Radio />} label="Yes"
                        onChange={(e) => {
                            setFormData({ ...formData, question_5: e.target.value });
                        }} />
                    <FormControlLabel sx={{ border: '1px solid #cdcdcd', borderRadius: 2, my: 1, mx: 0 }}
                        value="No" control={<Radio />} label="No" onChange={(e) => {
                            setFormData({ ...formData, question_5: e.target.value });
                        }} />
                </RadioGroup>
            </FormControl>
            <FormControl fullWidth sx={{ m: 0, py: 2 }}>
                <FormLabel id="demo-radio-buttons-group-label">You’ll need to get to cleans across the city, do you have transport</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="personal"
                    name="radio-buttons-group"
                >
                    <FormControlLabel sx={{ border: '1px solid #cdcdcd', borderRadius: 2, my: 1, mx: 0 }}
                        value="personal" control={<Radio />} label="Yes, I have a vehicle"
                        onChange={(e) => {
                            setFormData({ ...formData, question_6: e.target.value });
                        }}
                    />
                    <FormControlLabel sx={{ border: '1px solid #cdcdcd', borderRadius: 2, my: 1, mx: 0 }}
                        value="public" control={<Radio />} label="Yes, I take public transportation" onChange={(e) => {
                            setFormData({ ...formData, question_6: e.target.value });
                        }} />
                    <FormControlLabel sx={{ border: '1px solid #cdcdcd', borderRadius: 2, my: 1, mx: 0 }}
                        value="No" control={<Radio />} label="No" onChange={(e) => {
                            setFormData({ ...formData, question_6: e.target.value });
                        }} />
                </RadioGroup>
            </FormControl>
            <Box sx={{ m: 0, py: 2, height: 300, }}>
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
            </Box>
            {/* <h1>{JSON.stringify(state)}</h1> */}
        </Box>
    );
}
