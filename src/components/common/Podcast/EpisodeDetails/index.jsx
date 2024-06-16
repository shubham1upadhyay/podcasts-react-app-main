import React from "react";
import Button from "../../Button";

function EpisodeDetails({ index, title, description, audioFile, onClick }) {
  return (
    <div style={{width: "100%", marginBottom: "6.5rem"}}>
      <h1 style={{ textAlign: "left", marginBottom: 0 }}>{index}. {title}</h1>
      <p style={{marginLeft: "1.5rem"}} className="podcast-description">{description}</p>
      <Button text={"Play"} 
      onClick={() => onClick(audioFile)} 
      style={{width: "100px"}} />
    </div>
  );
}

export default EpisodeDetails;
