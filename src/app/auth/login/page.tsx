"use client"; // Đảm bảo đây là Client Component

import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import NotificationComponent from "@/components/NotificationComponent";
import { GLOBAL_API } from "@/config/config";
import handleApi from "@/config/handleApi";
import { setCookie, getCookie } from "cookies-next";
import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/userSlice";

const LoginPage = () => {
  const router = useRouter();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarContent, setSnackbarContent] = useState<{
    message: string;
    severity: "success" | "error";
  }>({ message: "", severity: "success" });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (snackbarContent.message) {
      setSnackbarOpen(true);
    }
  }, [snackbarContent]);

  const handleSubmit = async (values: {
    usernameOrEmail: string;
    password: string;
  }) => {
    console.log(values);
    setIsLoading(true);
    try {
      const res: any = await handleApi(
        `${GLOBAL_API.AUTHENTICATION}/login`,
        values,
        "post"
      );
      setCookie("token", res.result.token);
      const resInfo: any = await handleApi(`${GLOBAL_API.PROFILE}/my-info`);
      console.log(resInfo);
      dispatch(setUser(resInfo.result));
      router.push("/");
    } catch (error: any) {
      console.log(error);
      setSnackbarContent({ message: error.message, severity: "error" });
    }finally{
      setIsLoading(false);
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
          initialValues={{ usernameOrEmail: "", password: "" }} // giá trị khởi tạo
          onSubmit={handleSubmit} // xử lý submit form
        >
          {({ handleChange, handleBlur, values }) => (
            <fieldset disabled={isLoading}>
              <Form className="rounded shadow-lg" style={{ width: "100%" }}>
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
                  <LoadingButton
                    type="submit"
                    size="large"
                    variant="contained"
                    fullWidth
                    loading={isLoading}
                    loadingPosition="end"
                  >
                    Login
                  </LoadingButton>
                </div>
                <div>
                  <Button
                    onClick={() => router.push("/auth/register")}
                    size="large"
                    variant="outlined"
                    fullWidth
                    disabled={isLoading}
                  >
                    Register
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

export default LoginPage;
