"use client"; // Đảm bảo đây là Client Component

import { Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

const RegisterPage = () => {
  const router = useRouter();

  const handleSubmit = (values: {
    gender: string,
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

  // Hàm chặn nhập khoảng trắng
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === ' ') {
      e.preventDefault(); // Ngăn chặn ký tự khoảng trắng
    }
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
          gender: "male"
        }}
        onSubmit={handleSubmit} // xử lý submit form
      >
        {({ handleChange, handleBlur, values }) => (
          <Form>
            <div className="mb-2">
              <Field
                name="username"
                as={TextField}
                label="Username"
                type="text"
                fullWidth
                variant="outlined"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange(e);
                }}
                onKeyPress={handleKeyPress} // Ngăn không cho nhập khoảng trắng
                onBlur={handleBlur}
                value={values.username}
                required
              />
            </div>
            <div className="mb-2">
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
            <div className="mb-2 row">
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
            <div className="mb-1">
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                  row
                >
                  <div className="d-flex" style={{alignItems: 'center'}}>
                  <h6 className="mr-2" style={{opacity: 0.7, fontSize: '0.9rem'}}>Gender:</h6>
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </div>
                </RadioGroup>
              </FormControl>
            </div>
            <div className="mb-2">
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
            <div className="mb-2">
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
            <div className="mb-2">
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
