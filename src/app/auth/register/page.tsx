"use client"; // Đảm bảo đây là Client Component

import NotificationComponent from "@/components/NotificationComponent";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import handleApi from "@/config/handleApi";
import { setCookie } from "cookies-next";
import { GLOBAL_API } from "@/config/config";

const RegisterPage = () => {
  const router = useRouter();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarContent, setSnackbarContent] = useState<{
    message: string;
    severity: "success" | "error";
  }>({ message: "", severity: "success" });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (snackbarContent.message) {
      setSnackbarOpen(true);
    }
  }, [snackbarContent]);

  const handleSubmit = async (values: {
    gender: string;
    firstName: string;
    email: string;
    password: string;
    username: string;
    lastName: string;
    dob: string;
    rePassword: string;
  }) => {
    console.log(values);
    if (values.password !== values.rePassword) {
      setSnackbarContent({
        message: "The password must be the same",
        severity: "error",
      });
      return;
    }
    setIsLoading(true);
    try {
      const resRegister = await handleApi(`${GLOBAL_API.USER}`, values, 'post');
      const resLogin:any = await handleApi(`${GLOBAL_API.AUTHENTICATION}/login`, {usernameOrEmail: values.username, password: values.password}, 'post');
      setCookie("token", resLogin.result.token);
      router.push("/");
    } catch (error: any) {
      console.log(error);
      setSnackbarContent({ message: error.message, severity: "error" });
    } finally {
      // setIsLoading(false);
    }
  };

  // Hàm chặn nhập khoảng trắng
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === " ") {
      e.preventDefault(); // Ngăn chặn ký tự khoảng trắng
    }
  };
  const handleClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <NotificationComponent
        open={snackbarOpen}
        message={snackbarContent.message}
        severity={snackbarContent.severity}
        onClose={handleClose}
      />
      <div
        className="flex justify-center items-center"
        style={{ width: "100%" }}
      >
        <Formik
          initialValues={{
            firstName: "",
            email: "",
            password: "",
            username: "",
            lastName: "",
            dob: "",
            rePassword: "",
            gender: "male",
          }}
          onSubmit={handleSubmit} // xử lý submit form
        >
          {({ handleChange, handleBlur, values }) => (
            <fieldset disabled={isLoading}>
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
                      <div className="d-flex" style={{ alignItems: "center" }}>
                        <h6
                          className="mr-2"
                          style={{ opacity: 0.7, fontSize: "0.9rem" }}
                        >
                          Gender:
                        </h6>
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio />}
                          label="Other"
                        />
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
                  <LoadingButton
                    loading={isLoading}
                    type="submit"
                    size="large"
                    variant="contained"
                    fullWidth
                    loadingPosition="end"
                  >
                    Register
                  </LoadingButton>
                </div>
                <div>
                  <Button
                    onClick={() => router.push("/auth/login")}
                    size="large"
                    variant="outlined"
                    fullWidth
                    disabled={isLoading}
                  >
                    Login
                  </Button>
                </div>
              </Form>
            </fieldset>
          )}
        </Formik>
      </div>
    </>
  );
};

export default RegisterPage;
