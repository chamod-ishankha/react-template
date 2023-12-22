import React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box, Typography } from "@mui/material";
import { tokens } from "../../../theme";
import * as yup from "yup";
import Header from "../../../components/header";
import TopBar from "../../global/TopBar";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "test@gmail.com",
  password: "test123",
};

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:700px)");
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log(values);
    navigate("/admin");
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
          <Box display={"flex"} justifyContent={"space-between"}>
            <Header title={"LOGIN"} subtitle={"Log in to your account."} />
            <Box display={"flex"} justifyContent={"end"} mt={"10px"}>
              <Typography>Don't have an account?</Typography>
              <Typography
                onClick={() => {
                  navigate("/auth/register");
                }}
                sx={{
                  color: colors.greenAccent[400],
                  fontWeight: "bold",
                  cursor: "pointer",
                  textDecoration: "underline",
                  ml: "3px",
                }}
              >
                Register
              </Typography>
            </Box>
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
                    Login
                  </Button>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  mt={"20px"}
                >
                  <FormControlLabel
                    value="end"
                    control={<Checkbox color="secondary" />}
                    label="Keep me signed in"
                    labelPlacement="end"
                  />
                  <Typography
                    pt={0.8}
                    onClick={() => {
                      navigate("/auth/forgot-password");
                    }}
                    sx={{
                      color: colors.greenAccent[400],
                      fontWeight: "bold",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Forgot Password?
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

export default Login;
