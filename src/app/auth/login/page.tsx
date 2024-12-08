'use client'; // Đảm bảo đây là Client Component

import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginPage = () => {
  const router = useRouter();

  const handleSubmit = (values: { usernameOrEmail: string; password: string }) => {
    console.log(values);

  };

  return (
    <div className="flex justify-center items-center" style={{width: '100%'}}>
      <Formik
        initialValues={{ usernameOrEmail: "", password: "" }} // giá trị khởi tạo
        onSubmit={handleSubmit} // xử lý submit form
      >
        {({ handleChange, handleBlur, values }) => (
          <Form className="rounded shadow-lg" style={{width: '100%'}}>
            <div className="mb-3">
              <Field
                name="usernameOrEmail"
                as={TextField}
                label="Username or Email"
                fullWidth
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.usernameOrEmail}
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
            <div className="mb-4">
              <Button
                type="submit"
                size="large"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </div>
            <div>
              <Button
                onClick={() => router.push("/auth/register")}
                size="large"
                variant="outlined"
                fullWidth
              >
                Register
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
