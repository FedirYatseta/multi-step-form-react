import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl'
import { DataGrid, GridCellEditCommitParams, GridRowModes } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import { FormLabel, RadioGroup, FormControlLabel, Radio, InputLabel, Select, MenuItem } from '@mui/material/'


export default function FormPropsTextFields({ formData, setFormData }) {
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
    const [state, setState] = React.useState(initialData)

    //const [age, setAge] = React.useState('');
    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };
    // const handleCommit = (e: GridCellEditCommitParams) => {
    //     const arr = state?.map(r => {
    //         if (r.id === e.id) {
    //             return { ...r, [e.field]: e.value }
    //         }
    //         else {
    //             return { ...r }
    //         }
    //     })
    //     setState(arr)
    // }
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' }, margin: '0 20px'
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Address"
                            defaultValue="Street address"
                            variant="outlined"
                            value={formData.Address}
                            onChange={(e) => {
                                setFormData({ ...formData, Address: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            defaultValue=""
                            value={formData.apt}
                            onChange={(e) => {
                                setFormData({ ...formData, apt: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="outlined-required"
                            label="City"
                            variant="outlined"
                            value={formData.City}
                            onChange={(e) => {
                                setFormData({ ...formData, City: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="outlined-required"
                            label="State"
                            variant="outlined"
                            value={formData.State}
                            onChange={(e) => {
                                setFormData({ ...formData, State: e.target.value });
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
                            value={formData.Phone}
                            onChange={(e) => {
                                setFormData({ ...formData, Phone: e.target.value });
                            }}
                        /></Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="outlined-required"
                            label="DOB"
                            type="date"
                            variant="outlined"
                            value={formData.DOB}
                            onChange={(e) => {
                                setFormData({ ...formData, DOB: e.target.value });
                            }}
                        /></Grid>
                </Grid>
            </div>
            <FormControl fullWidth>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"

                >
                    <FormControlLabel style={{ border: '1px solid #f5f5f5', 'borderRadius': '4px', width: '100%' }} value="female" control={<Radio />} label="yes" />
                    <FormControlLabel value="male" control={<Radio />} label="no" />
                </RadioGroup>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                // value={age}
                //label="Age"
                // onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
            </FormControl>
            <FormControl fullWidth>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
            </FormControl>
            <FormControl fullWidth>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Yes, i have" />
                    <FormControlLabel value="male" control={<Radio />} label="Yes, i take" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>


            <div style={{ height: 300, width: '100%' }}>

                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={3}
                    rowsPerPageOptions={[3]}
                    editMode="cell"
                    hideFooterPagination
                //onCellEditCommit={handleCommit}
                />
            </div>
            <h1>{JSON.stringify(state)}</h1>
        </Box>
    );
}