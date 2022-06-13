import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import FormPropsTextFields from './basicform'
import { Box } from "@mui/system";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
    Address: "",
    apt: '',
    City: '',
    State: '',
    Phone: '',
    DOB: '',
    workAvailability: []
  });

  const FormTitles = ["1", "intro", "rates", "basic inform", "upload your photo", "video interview", "Thank you"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    }
    else if (page === 2) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    }
    else if (page === 3) {
      return <FormPropsTextFields formData={formData} setFormData={setFormData} />;
    }
    else if (page === 4) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    }
    else if (page === 5) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    }
    else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <h1>Step {page} of 6 </h1>
      <div className="progressbar">

        <div
          style={{
            width: page === 0 ? "0%"
              : page === 1 ? "16.66%"
                : page === 2 ? "33.32%"
                  : page === 3 ? "49.99%"
                    : page === 4 ? "66.66%"
                      : page === 5 ? "80.32%" : "100%"
          }}
        >  </div>

      </div>
      <Box >
        <div className="form-container">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">{PageDisplay()}</div>
          <div className="footer">
            <button
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
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
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Form;
