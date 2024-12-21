"use client";

import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

interface Props {
  onClose: () => void;
}

const NewGroupComponent = ({ onClose }: Props) => {
  const [stepNumber, setStepNumber] = useState(1);



  return (
    <div
        style={{
            
        }}
    >
      <div className="sitting-title">
        <Button sx={{ minWidth: "0" }} onClick={
            ()=>{
                if(stepNumber > 1) {
                    setStepNumber((prev)=>prev-1);
                }else{
                    onClose();
                }
            }
        }>
          <ArrowBackRoundedIcon sx={{ fontSize: "2rem" }} />
        </Button>
      </div>
      <div 
        role="tabpanel"
        hidden={stepNumber !== 1} 
      >
        1
      </div>
      <div 
        role="tabpanel"
        hidden={stepNumber !== 2} 
      >
        2
      </div>
    </div>
  );
};

export default NewGroupComponent;
