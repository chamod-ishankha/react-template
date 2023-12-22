import React from "react";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { tokens } from "../../theme";
import TopBar from "./TopBar";

const InternalError = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box className="page">
      <TopBar layout="auth" />
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        height={"calc(100vh - 200px)"}
      >
        <Typography sx={{
            fontSize: "12rem",
            fontWeight: "bold",
            color: colors.blueAccent[300],
        }}>500</Typography>
        <Typography variant="h1" sx={{color: colors.blueAccent[300]}}>Internal Server Error</Typography>
        <Typography variant="h5" sx={{color: colors.blueAccent[300], mt: 2}}>Sorry, something went wrong :(</Typography>
      </Box>
    </Box>
  );
};

export default InternalError;
