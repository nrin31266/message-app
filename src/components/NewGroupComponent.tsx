"use client";

import React, { useState } from "react";
import { Box, Button, Input, TextField } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import EditIcon from "@mui/icons-material/Edit";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface Props {
  onClose: () => void;
}

const NewGroupComponent = ({ onClose }: Props) => {
  const [stepNumber, setStepNumber] = useState(1);
  const [isCreating, setIsCreating] = useState(false);
  const [nameGroup, setNameGroup] = useState("");

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
      }}
    >
      <div className="sitting-title">
        <Button
          sx={{ minWidth: "0" }}
          onClick={() => {
            if (stepNumber > 1) {
              setStepNumber((prev) => prev - 1);
            } else {
              onClose();
            }
          }}
        >
          <ArrowBackRoundedIcon sx={{ fontSize: "2rem" }} />
        </Button>
      </div>
      <div role="tabpanel" hidden={stepNumber !== 1}>
        1
      </div>
      <div role="tabpanel" hidden={stepNumber !== 2}>
        <div className="d-flex mb-4" style={{ justifyContent: "center" }}>
          <img
            src="https://www.nme.com/wp-content/uploads/2024/01/iu-2024-h-e-r-world-tour-getty.jpg"
            alt=""
            style={{
              height: "100px",
              borderRadius: 50,
              width: "100px",
              objectFit: "cover",
            }}
          />
        </div>
        <TextField onChange={(e) => setNameGroup(e.target.value)} value={nameGroup} className="ml-2 mr-2" sx={{width: '100%'}} id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
      <Button
        sx={{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
          minWidth: "0",
          borderRadius: "50%",
          padding: "1rem",
        }}
        variant="contained"
        id="composition-button"
        aria-haspopup="true"
        hidden={(stepNumber === 2 && nameGroup.length < 1)}
        onClick={() => {
          if (stepNumber !== 2) {
            setStepNumber((pre) => pre + 1);
          }
        }}
      >
        <ArrowForwardIcon />
      </Button>
    </div>
  );
};

export default NewGroupComponent;
