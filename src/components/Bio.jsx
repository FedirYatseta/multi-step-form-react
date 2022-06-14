import React, { useState } from "react";

function Bio({ formData, setFormData }) {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div>
      <h1>Upload and Display Image usign React Hook's</h1>

      <br />

      <br />
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
      <br />
      {selectedImage && (
        <div>

          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
          <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        </div>
      )}

      <div>
        <h5>Tell us  few words about your amazing self </h5>
        <textarea>

        </textarea>
      </div>
    </div>
  );

}

export default Bio;
