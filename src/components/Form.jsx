import React, { useState } from "react";
import Video from "./Video";
import Intro from './Intro'
import Rate from './Rate';
import BasicInfo from "./BasicForm";
import Bio from "./Bio";
import Welcome from "./Welcome";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import { Grid } from "@mui/material";

import Container from '@mui/material/Container';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#fff'),
  backgroundColor: '#77c977',
  '&:hover': {
    backgroundColor: '#71bd71',
  },
}));
function Form() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());


  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);

    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    console.log(formData);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    City: "",
    baseAddress: "",
    baseApt: "",
    baseCity: "",
    baseState: "",
    basePhone: '',
    baseDOB: '',
    question_1: '',
    question_2: '',
    question_3: '',
    question_4: '',
    question_5: '',
    question_6: '',
    workAvailability: []
  });

  const FormTitles = ["intro", "rates", "basic inform", "your bio", "video interview", "Welcome video"];

  const PageDisplay = () => {
    if (activeStep === 0) {
      return <Intro formData={formData} setFormData={setFormData} />;
    } else if (activeStep === 1) {
      return <Rate formData={formData} setFormData={setFormData} />;
    }
    else if (activeStep === 2) {
      return <BasicInfo formData={formData} setFormData={setFormData} />;
    }
    else if (activeStep === 3) {
      return <Bio formData={formData} setFormData={setFormData} />;
    }
    else if (activeStep === 4) {
      return <Video formData={formData} setFormData={setFormData} />;
    }
    else {
      return <Welcome formData={formData} setFormData={setFormData} />;
    }
  };
  if (activeStep === 0) return (
    <Box>
      <Container maxWidth="sm" sx={{ bgcolor: '#fff', borderRadius: '4px', py: 5 }} >
        <div>{PageDisplay()}</div>
        <div>
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', py: 3, width: '100%' }}>
              <ColorButton variant="contained" fullWidth sx={{ p: 2 }} onClick={handleNext}>
                {activeStep === FormTitles.length - 1
                  ? 'Finish' : 'Next'}
              </ColorButton>
            </Box>
          </React.Fragment>
        </div>
      </Container>
    </Box>
  )
  return (
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={2} sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        p: '30px'
      }}>
        <Grid item xs={3} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Container maxWidth="sm" sx={{ bgcolor: '#fff', borderRadius: '4px', py: 5 }} >
            <Typography fullWidth sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1} of {FormTitles.length}</Typography>
            <MobileStepper variant="progress"
              steps={6}
              position="static"
              activeStep={activeStep}
              sx={{
                maxWidth: 400, flexGrow: 1,
                "& .MuiMobileStepper-progress": { width: "100%", bgcolor: '#dfdfdf', height: 10 },
                "& .MuiLinearProgress-bar	": { bgcolor: '#71bd71' }
              }}
            />
            <Stepper activeStep={activeStep} orientation="vertical" sx={{
              "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line": { minHeight: "0px", color: '#77c977' },
              "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": { minHeight: "0px", },
              "& .MuiStepConnector-root.Mui-disabled .MuiStepConnector-line": { minHeight: "0px", },
              "& .MuiStepIcon-root.Mui-active": { color: "#71bd71", },
              "& .MuiStepIcon-root.Mui-completed": { color: "#71bd71", },
              "& .MuiStepIcon-root": { color: "#fff" }
            }} >
              {FormTitles.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps} >
                    <StepLabel {...labelProps} >{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Container>
        </Grid>
        <Grid item xs={7}>
          <Container maxWidth="sm" sx={{ bgcolor: '#fff', borderRadius: '4px', py: 5 }} >
            <div>{PageDisplay()}</div>
            <div>
              {activeStep === FormTitles.length ? (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    All FormTitles completed - you&apos;re finished
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleReset} >Reset</Button>
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Box sx={{ display: 'flex', flexDirection: 'row', py: 3, width: '100%' }}>

                    <ColorButton variant="contained" fullWidth sx={{ p: 2 }} onClick={handleNext}>

                      {activeStep === FormTitles.length - 1 ? 'Finish' : activeStep === 1
                        ? 'Get My First Job in 24 Hours!' : 'Next'}

                    </ColorButton>
                  </Box>
                </React.Fragment>
              )}
            </div>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Form;
