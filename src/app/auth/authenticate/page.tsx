"use client";
import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Authenticate = () => {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: 'center'}}>
        <CircularProgress />
      </Box>
    </div>
  );
};

export default Authenticate;
