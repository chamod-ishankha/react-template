import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import Header from "../../components/header";
import * as yup from "yup";
import { Formik } from "formik";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
  address3: "",
};

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup.string().required("required"),
  address1: yup.string().required("required"),
});

const Profile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box className="page">
      <Header
        title={"ACCOUNT"}
        subtitle={"Here you can manage your profile information."}
      />
      <Box display={"flex"} flexDirection={isNonMobile ? "row" : "column"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          bgcolor={colors.primary[400]}
          borderRadius={"5px"}
          p={2}
          m={isNonMobile ? 0.5 : 0}
          width={isNonMobile ? "35%" : "100%"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            ml={4}
            mr={4}
          >
            <img
              alt="User"
              src="../../assets/user.png"
              style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            />
            <Typography variant="h2" sx={{ mt: 1, fontWeight: "bold" }}>
              Ed Roh
            </Typography>
            <Typography
              variant="h4"
              color={colors.greenAccent[500]}
              sx={{ mt: 1 }}
            >
              Admin
            </Typography>
          </Box>
          <Divider sx={{ width: "100%", mt: 3, mb: 3 }} />
          <Button
            fullWidth={isNonMobile ? false : true}
            variant="contained"
            color="secondary"
            sx={{ fontWeight: "bold", color: colors.primary[400] }}
          >
            Upload Picture
          </Button>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          bgcolor={colors.primary[400]}
          borderRadius={"5px"}
          p={2}
          m={isNonMobile ? 0.5 : 0}
          mt={isNonMobile ? undefined : 0.5}
          width={"100%"}
        >
          <Box>
            <Typography variant="h4">Profile</Typography>
            <Typography variant="h6">The information can be edited</Typography>
          </Box>
          <Formik
            initialValues={initialValues}
            validationSchema={userSchema}
            onSubmit={handleFormSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
                <Box
                  display={"grid"}
                  gap={"15px"}
                  gridTemplateColumns={"repeat(4, minmax(0, 1fr))"}
                  sx={{
                    "& > div": {
                      gridColumn: isNonMobile ? undefined : "span 4",
                    },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="First Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="firstName"
                    error={!!touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    sx={{ gridColumn: "span 2" }}
                    color="secondary"
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="Last Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    name="lastName"
                    error={!!touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                    sx={{ gridColumn: "span 2" }}
                    color="secondary"
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="Email Address"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 2" }}
                    color="secondary"
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="Phone Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.contact}
                    name="contact"
                    error={!!touched.contact && !!errors.contact}
                    helperText={touched.contact && errors.contact}
                    sx={{ gridColumn: "span 2" }}
                    color="secondary"
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="Address Line 1"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address1}
                    name="address1"
                    error={!!touched.address1 && !!errors.address1}
                    helperText={touched.address1 && errors.address1}
                    sx={{ gridColumn: "span 2" }}
                    color="secondary"
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="Address Line 2"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address2}
                    name="address2"
                    error={!!touched.address2 && !!errors.address2}
                    helperText={touched.address2 && errors.address2}
                    sx={{ gridColumn: "span 2" }}
                    color="secondary"
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="Address Line 3"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address3}
                    name="address3"
                    error={!!touched.address3 && !!errors.address3}
                    helperText={touched.address3 && errors.address3}
                    sx={{ gridColumn: "span 2" }}
                    color="secondary"
                  />
                </Box>
                <Box display={"flex"} justifyContent={"end"} mt={"20px"}>
                  <Button
                    fullWidth={isNonMobile ? false : true}
                    type="submit"
                    variant="contained"
                    color="secondary"
                    sx={{ fontWeight: "bold", color: colors.primary[400] }}
                  >
                    Save Details
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
