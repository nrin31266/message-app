"use client";

import { Card } from "@mui/material";
import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div
      className="d-flex"
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card className="col-md-6 col-lg-4 col-10 d-block">
        <div className="d-flex justify-content-center mb-3">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kanban-ac9c5.appspot.com/o/message%2Fmessenger-icon-1024x1024-wsuio165.png?alt=media&token=134e3696-1054-419a-9b53-ec51c0df5c73"
            alt=""
            width={100}
          />
        </div>
        <h4 className="mb-4 justify-content-center d-flex">Connect with your favourite people</h4>
        <div
        className="d-flex justify-content-center mb-3"
        style={{}}
        >{children}</div>

      </Card>
    </div>
  );
};

export default AuthLayout;
