"use client"; // Đảm bảo đây là Client Component

import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegisterPage = () => {
  const router = useRouter();

  const handleSubmit = (values: {
    firstName: string;
    email: string;
    password: string;
    username: string;
    lastName: string;
    dob: string;
    rePassword: string;
  }) => {
    console.log(values);
  };

  return (
    <div className="flex justify-center items-center" style={{ width: "100%" }}>
      <Formik
        initialValues={{
          firstName: "",
          email: "",
          password: "",
          username: "",
          lastName: "",
          dob: "",
          rePassword: "",
        }}
        onSubmit={handleSubmit} // xử lý submit form
      >
        {({ handleChange, handleBlur, values }) => (
          <Form>
            <div className="mb-3">
              <Field
                name="username"
                as={TextField}
                label="Username"
                type="text"
                fullWidth
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                required
              />
            </div>
            <div className="mb-3">
              <Field
                name="dob"
                as={TextField}
                label="Day of birth"
                type="date"
                fullWidth
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dob}
                required
                InputLabelProps={{
                  shrink: true, 
                }}
              />
            </div>
            <div className="mb-3 row">
              <div className="col pr-1">
                <Field
                  name="firstName"
                  as={TextField}
                  label="First name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  required
                />
              </div>
              <div className="col pl-1">
                <Field
                  name="lastName"
                  as={TextField}
                  label="Last name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <Field
                name="email"
                as={TextField}
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                required
              />
            </div>
            <div className="mb-3">
              <Field
                name="password"
                as={TextField}
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                required
              />
            </div>
            <div className="mb-3">
              <Field
                name="rePassword"
                as={TextField}
                label="Re password"
                type="password"
                fullWidth
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.rePassword}
                required
              />
            </div>
            <div className="mb-3">
              <Button type="submit" size="large" variant="contained" fullWidth>
                Register
              </Button>
            </div>
            <div>
              <Button
                onClick={() => router.push("/auth/login")}
                size="large"
                variant="outlined"
                fullWidth
              >
                Login
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterPage;
