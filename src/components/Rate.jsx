import React from "react";
import { Chart } from "react-charts";
import { Box } from "@mui/material";
import { Image } from 'mui-image'
import useDemoConfig from "./config/useDemoConfig";
//import useLagRadar from "./useLagRadar";
import ResizableBox from "./config/ResizableBox";
import logo from '../img/Graph.jpg'
import { Typography } from '@mui/material';

function Rates({ formData, setFormData }) {

  const { data, randomizeData } = useDemoConfig({
    series: 1,
    dataType: "ordinal"
  });
  const series = React.useMemo(
    () => ({
      type: "bar"
    }),
    []
  );
  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "left" },
      { position: "bottom", type: "linear" }
    ],
    []
  );
  return (
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" component="div" gutterBottom sx={{ textAlign: 'center', pb: 2 }}>
        Top earners May 23-29
      </Typography>
      <Typography variant="body2" component="div" gutterBottom sx={{ textAlign: 'center' }}>
        TOP EARNERS IN LAS VEGAS EARNED $987 LAST WEEK!
      </Typography>
      <Image src={logo} />
      {/* <ResizableBox>
        <Chart data={data} series={series} axes={axes} tooltip />
      </ResizableBox> */}
    </Box>
  )
}

export default Rates;
