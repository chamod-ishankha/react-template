import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import Header from "../../components/header";

const Settings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box className="page">
      <Box display={"flex"} justifyContent={"center"} mb={6}>
        <Box width={"70%"}>
          <Box>
            <Header
              title={"SETTINGS"}
              subtitle={"Manage your passwords and settings"}
            />
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Notifications
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "thin" }}>
              Manage the notifications
            </Typography>
          </Box>
          <Divider sx={{ width: "100%", mt: 1.5, mb: 2 }} />
          <Box display={"flex"} flexDirection={isNonMobile ? "row" : "column"}>
            <Box
              width={isNonMobile ? "40%" : "100%"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Notifications
              </Typography>
              <FormControlLabel
                value="end"
                control={<Checkbox color="secondary" />}
                label="Email"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox color="secondary" />}
                label="Push Notifications"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox color="secondary" />}
                label="Text Messages"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox color="secondary" />}
                label="Phone Calls"
                labelPlacement="end"
              />
            </Box>
            <Box
              mt={isNonMobile ? undefined : 5}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"flex-start"}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Messages
              </Typography>
              <FormControlLabel
                value="end"
                control={<Checkbox color="secondary" />}
                label="Email"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox color="secondary" />}
                label="Push Notifications"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox color="secondary" />}
                label="Text Messages"
                labelPlacement="end"
              />
            </Box>
          </Box>
          <Box width={"100%"} display={"flex"} justifyContent={"flex-end"}>
            <Button
              variant={"contained"}
              color="secondary"
              sx={{
                color: colors.primary[400],
                fontWeight: "bold",
                width: isNonMobile ? undefined : "100%",
                mt: isNonMobile ? undefined : 2
              }}
            >
              Save
            </Button>
          </Box>
          <Box mt={8}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Password
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "thin" }}>
                Update Password
              </Typography>
            </Box>
            <Divider sx={{ width: "100%", mt: 1.5, mb: 2 }} />
            <Box display={"flex"} flexDirection={"column"}>
              <TextField
                label={"Old Password"}
                variant={"outlined"}
                margin={"normal"}
                type={"password"}
                color="secondary"
                sx={{ width: isNonMobile ? "50%" : "100%" }}
              />
              <TextField
                label={"New Password"}
                variant={"outlined"}
                margin={"normal"}
                type={"password"}
                color="secondary"
                sx={{ width: isNonMobile ? "50%" : "100%" }}
              />
              <TextField
                label={"Confirm Password"}
                variant={"outlined"}
                margin={"normal"}
                type={"password"}
                color="secondary"
                sx={{ width: isNonMobile ? "50%" : "100%" }}
              />
              <Box width={"100%"} display={"flex"} justifyContent={"flex-end"}>
                <Button
                  variant={"contained"}
                  color="secondary"
                  sx={{
                    color: colors.primary[400],
                    fontWeight: "bold",
                    width: isNonMobile ? undefined : "100%",
                    mt: isNonMobile ? undefined : 2
                  }}
                >
                  Update
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;
