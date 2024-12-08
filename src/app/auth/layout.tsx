"use client";

import { colors } from "@/constant/globleConstant";
import { Card } from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const path = usePathname();

  return (
    <div
      className="d-flex"
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card style={{ width: "500px" }} className="p-4">
        <div className="d-flex justify-content-center">
          <img src="/assets/logo.png" alt="logo" width={300} />
        </div>
        <div className="mb-4 justify-content-center d-flex flex-column">
          <h2 style={{textAlign: 'center', color: colors.PRIMARY}}>{path.startsWith("/auth/login") ? "Login" : "Register"}</h2>
          <h4 style={{ opacity: "0.5", textAlign: 'center' }}>Connect with your favourite people</h4>
        </div>
        <div className="" style={{}}>
          {children}
        </div>
      </Card>
    </div>
  );
};

export default AuthLayout;
