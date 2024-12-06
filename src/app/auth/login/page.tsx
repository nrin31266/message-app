'use client'; // Đảm bảo đây là Client Component

import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Ngăn không cho form tự động reload trang
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <TextField
            required
            id="outlined-required"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "300px" }}
          />
        </div>
        <div className="mb-3">
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "300px" }}
            required
          />
        </div>
        <div className="mb-4">
          <Button
            size="large"
            type="submit"
            style={{ width: "300px" }}
            variant="contained"
          >
            Login
          </Button>
        </div>
        <div>
          <Button
            onClick={() => router.push('/auth/register')}
            size="large"
            style={{ width: "300px" }}
            variant="outlined"
          >
            Register
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
