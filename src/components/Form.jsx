import React, { useState } from "react";
import OtherInfo from "./Welcome";
import FormPropsTextFields from './BasicForm'
import { Box } from "@mui/system";
import Video from "./Video";
import Intro from './Intro'
import Rate from './Rate';
import BasicInfo from "./BasicForm";
import Bio from "./Bio";
import Welcome from "./Welcome";

function Form() {
  const [page, setPage] = useState(0);
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
    State: '',
    Phone: '',
    DOB: '',
    workAvailability: []
  });

  const FormTitles = ["", "intro", "rates", "basic inform", "your bio", "video interview", "Welcome video"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Intro formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Rate formData={formData} setFormData={setFormData} />;
    }
    else if (page === 2) {
      return <BasicInfo formData={formData} setFormData={setFormData} />;
    }
    else if (page === 3) {
      return <Bio formData={formData} setFormData={setFormData} />;
    }
    else if (page === 4) {
      return <Video formData={formData} setFormData={setFormData} />;
    }
    else if (page === 5) {
      return <Welcome formData={formData} setFormData={setFormData} />;
    }
    else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };
  if (page === 0) return (
    <Box >
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">

          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "NEXT STEP AND SEE RATES"}
          </button>
        </div>
      </div>
    </Box>
  )
  return (
    <div className="form">
      <div className="form-container-step">
        <h1>Step {page + 1} of 6 </h1>
        <div className="progressbar">
          <div
            style={{
              width: page === 1 ? "20%"
                : page === 2 ? "40%"
                  : page === 3 ? "60%"
                    : page === 4 ? "80%"
                      : page === 5 ? "100%" : "100%"
            }}
          >  </div>

        </div>
        <div className="header">
          <div className='step-by-step'>
            <div >
              <button
                onClick={() => {
                  setPage((currPage) => currPage - currPage);
                }}
              ><span className="material-symbols-outlined" style={{ color: page === 0 ? "#77c977" : '', display: page === 0 ? "flex" : 'flex' }}>check_circle</span>1 {FormTitles[1]}</button>
              <button onClick={() => {
                setPage((currPage) => currPage - currPage + 1);
              }}><span className="material-symbols-outlined" style={{ color: page === 1 ? "#77c977" : '', display: page === 1 ? "flex" : 'flex' }}>check_circle</span>2 {FormTitles[2]}</button>
              <button
                onClick={() => {
                  setPage((currPage) => currPage - currPage + 2);
                }}><span className="material-symbols-outlined" style={{ color: page === 2 ? "#77c977" : '', display: page === 2 ? "flex" : 'flex' }}>check_circle</span>3 {FormTitles[3]}</button>
              <button
                onClick={() => {
                  setPage((currPage) => currPage - currPage + 3);
                }}><span className="material-symbols-outlined" style={{ color: page === 3 ? "#77c977" : '', display: page === 3 ? "flex" : 'flex' }}>check_circle</span>4 {FormTitles[4]}</button>
              <button
                onClick={() => {
                  setPage((currPage) => currPage - currPage + 4);
                }}><span className="material-symbols-outlined" style={{ color: page === 4 ? "#77c977" : '', display: page === 4 ? "flex" : 'flex' }}>check_circle</span>5 {FormTitles[5]}</button>
              <button
                onClick={() => {
                  setPage((currPage) => currPage - currPage + 5);
                }}><span className="material-symbols-outlined" style={{ color: page === 5 ? "#77c977" : '', display: page === 5 ? "flex" : 'flex' }}>check_circle</span>6 {FormTitles[6]}</button>

            </div>
          </div>
        </div>
      </div>
      <div className="form-container">

        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          {/* <button
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button> */}
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "NEXT STEP AND SEE RATES"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
