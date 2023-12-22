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
};

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
});

const ForgotPassword = () => {
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
          <Header title={"Forgot your password?"} subtitle={"Please enter the email you use to sign in."}/>
          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={loginSchema}
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
                <Box display={"flex"} justifyContent={"center"} mt={"20px"}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    sx={{ fontWeight: "bold", width: "100%" }}
                  >
                    Request password reset
                  </Button>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  mt={"20px"}
                >
                  <Typography
                    pt={0.8}
                    onClick={() => {
                      navigate("/auth/login");
                    }}
                    sx={{
                      color: colors.greenAccent[400],
                      fontWeight: "bold",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Know your password?
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

export default ForgotPassword;
