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
  password: "",
  confirmPassword: "",
};

const loginSchema = yup.object().shape({
  password: yup.string().required("required"),
  confirmPassword: yup.string().required("required"),
});

const ResetPassword = () => {
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
          <Header title={"NEW PASSWORD"} />
          <Box
            display={"flex"}
            justifyContent={"center"}
            backgroundColor={colors.blueAccent[900]}
            color={colors.blueAccent[200]}
            p={"15px 0 15px 0"}
            borderRadius={"10px"}
          >
            <Typography width={"90%"} variant="h5">
              Please create a new password that you dont't use on any other
              site.
            </Typography>
          </Box>
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
                  label="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  color="secondary"
                  sx={{ mt: "15px" }}
                />
                <TextField
                  fullWidth
                  variant="standard"
                  type="text"
                  label="Confirm Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirmPassword}
                  name="confirmPassword"
                  error={!!touched.confirmPassword && !!errors.confirmPassword}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  color="secondary"
                  sx={{ mt: "15px" }}
                />
                <Box display={"flex"} justifyContent={"center"} mt={"20px"}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    sx={{ fontWeight: "bold", width: "100%" }}
                  >
                    Change
                  </Button>
                </Box>
                <Box display={"flex"} justifyContent={"center"} mt={"20px"}>
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
                    pt={0.8}
                  >
                    Back to login
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

export default ResetPassword;
