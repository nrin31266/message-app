'use client'; // Đảm bảo đây là Client Component

import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import NotificationComponent from "@/components/NotificationComponent";
import { GLOBAL_API } from "@/config/config";
import handleApi from "@/config/handleApi";
import { setCookie, getCookie } from 'cookies-next';

const LoginPage = () => {
  const router = useRouter();
   const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarContent, setSnackbarContent] = useState<{message: string, severity: "success" | "error"}>({message: "", severity: "success"});

    useEffect(() => {
      if(snackbarContent.message){
        setSnackbarOpen(true);
      }
    }, [snackbarContent]);

  const handleSubmit = async (values: { usernameOrEmail: string; password: string }) => {
    console.log(values);
    try {
      const res:any = await handleApi(`${GLOBAL_API.AUTHENTICATION}/login`, values, 'post');
      setCookie("token", res.result.token);
      router.push("/");
    } catch (error: any) {
      console.log(error)
      setSnackbarContent({message: error.message, severity: "error"});
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
    </>
  );
};

export default LoginPage;
