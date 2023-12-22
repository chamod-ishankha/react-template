import React from "react";
import Header from "../../components/header";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Box className={"page"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title="DASHBOARD" subtitle="Welcome to the dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;
