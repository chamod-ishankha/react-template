import React from "react";
import { Button, TextField, useMediaQuery, useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { tokens } from "../../../theme";
import * as yup from "yup";
import Header from "../../../components/header";
import TopBar from "../../global/TopBar";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
};

const signupSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  password: yup.string().required("required"),
});

const Signup = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:700px)");

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box className="page">
      <TopBar layout="auth" />
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"calc(100vh - 130px)"}
      >
        <Box
          borderRadius={"15px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          width={isNonMobile ? "30%" : "90"}
          pt={3}
          pl={isNonMobile ? 5 : 3}
          pr={isNonMobile ? 5 : 3}
          pb={5}
          backgroundColor={colors.primary[400]}
        >
          <Header
            title={"CREATE AN ACCOUNT"}
            subtitle={
              "Join us and experience the convenience of a personalized account."
            }
          />

          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={signupSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form
                onSubmit={handleSubmit}
                style={{
                  width: "100%",
                }}
              >
                <TextField
                  fullWidth
                  variant="standard"
                  type="text"
                  label="Email Address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  color="secondary"
                />
                <TextField
                  fullWidth
                  variant="standard"
                  type="text"
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  color="secondary"
                  sx={{
                    mt: "15px",
                  }}
                />
                <TextField
                  fullWidth
                  variant="standard"
                  type="text"
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  color="secondary"
                  sx={{
                    mt: "15px",
                  }}
                />
                <TextField
                  fullWidth
                  variant="standard"
                  type="password"
                  label="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  color="secondary"
                  sx={{
                    // "& label": {
                    //   color: `${colors.primary[100]}`,
                    // },
                    // "& label.Mui-focused": {
                    //   color: `${colors.primary[100]}`,
                    // },
                    // "& .MuiInput-underline:before": {
                    //   borderBottomColor: `${colors.primary[100]}`,
                    // },
                    // "& .MuiInput-underline:after": {
                    //   borderBottomColor: `${colors.primary[100]}`,
                    // },
                    mt: "15px",
                  }}
                />
                <Box display={"flex"} justifyContent={"center"} mt={"20px"}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    sx={{ fontWeight: "bold", width: "100%" }}
                  >
                    Sign Up
                  </Button>
                </Box>
                <Box display={"flex"} justifyContent={"end"} mt={"20px"}>
                  <Typography>
                    Already have an account?{" "}
                  </Typography>
                  <Typography
                    onClick={() => {
                      navigate("/auth/login");
                    }}
                    sx={{
                      color: colors.greenAccent[400],
                      fontWeight: "bold",
                      cursor: "pointer",
                      textDecoration: "underline",
                      ml: "3px"
                    }}
                  >
                    Login
                  </Typography>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
