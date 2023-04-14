import './PrimaryButton.css';
import React from "react";

function PrimaryButton({button}) {
  const {name, icon, link} = button;
  
  return (
    <a href={link} className="primary-button__wrapper">
      {name}
      {icon()}
    </a>
  );
}

export default PrimaryButton;