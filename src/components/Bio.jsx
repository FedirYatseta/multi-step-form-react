import React, { useEffect, useState } from "react";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useDropzone } from "react-dropzone"
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#fff'),
  backgroundColor: '#77c977',
  '&:hover': {
    backgroundColor: '#71bd71',
  },
}));
function Bio({ formData, setFormData }) {
  const [files, setFiles] = useState([])
  const [isLoading, setLoading] = useState(false)
  console.log(files)

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    }
  })
  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "100%" }} alt="preview" />
      </div>
    </div>
  ))

  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    setLoading(true)
    setFormData({ ...formData, basePhone: setValue });
  };

  // useEffect(() => { setFiles() }, [])

  return (
    <Box component="form">
      <h1>Upload Your Photo</h1>
      <ColorButton fullWidth sx={{ p: 2 }}
        {...getRootProps()}
        variant="contained"
        color="primary"
      > Select Photo
        <input {...getInputProps()} />
      </ColorButton>
      <br />
      <Stack spacing={1} sx={{ py: 1 }}>
        {
          isLoading ? (<div>images</div>
          ) :
            (<Skeleton height={300} />
            )
        }
      </Stack>
      <div >
        <FormLabel id="demo-simple-select-label" required>Tell us  few words about your amazing self</FormLabel>
        <TextField fullWidth sx={{ pb: 3 }}
          required
          id="filled-multiline-flexible"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
        />
      </div>
    </Box>
  );

}

export default Bio;
