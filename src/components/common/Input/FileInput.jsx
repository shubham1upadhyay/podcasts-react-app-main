import React, { useState } from "react";
import "./styles.css";

function FileInput({ accept, id, fileHandleFnc, text }) {
  const [fileSelected, setfileSelected] = useState("");
  const onChange = (e) => {
    console.log(e.target.files);
    setfileSelected(e.target.files[0].name);
    fileHandleFnc(e.target.files[0]);
  };
  return (
    <>
      <label
        htmlFor={id}
        className={`custom-input ${!fileSelected ?  "label-input" : "active"}`}>
        {fileSelected ? `The File ${fileSelected} was Selected` : text}
      </label>
      <input
        type="file"
        accept={accept}
        id={id}
        style={{ display: "none" }}
        onChange={onChange}
      />
    </>
  );
}

export default FileInput;
