import React from "react";
import { Chart } from "react-charts";

import useDemoConfig from "./config/useDemoConfig";
//import useLagRadar from "./useLagRadar";
import ResizableBox from "./config/ResizableBox";
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
    <>
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />
      <ResizableBox>
        <Chart data={data} series={series} axes={axes} tooltip />
      </ResizableBox>
    </>
  )
}

export default Rates;
