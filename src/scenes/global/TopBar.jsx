import React, { useContext } from "react";
import {
  Box,
  IconButton,
  useTheme,
  InputBase,
  Menu,
  MenuItem,
  Avatar,
  Divider,
} from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

// Import necessary components and icons

const TopBar = ({ layout }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();

  // MENU CONTROL
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [navigateTo, setNavigateTo] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    setIsMenuOpen(false);

    switch (event) {
      case "profile":
        setNavigateTo("/admin/profile");
        break;
      case "logout":
        setNavigateTo("/auth/login");
        break;
      case "settings":
        setNavigateTo("/admin/settings");
        break;
      default:
        break;
    }
  };

  // Use useEffect to navigate after the state has been updated
  React.useEffect(() => {
    if (navigateTo) {
      navigate(navigateTo);
      setNavigateTo(null);
    }
  }, [navigateTo, navigate]);

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      p={2}
      alignItems={"center"}
    >
      {/* SEARCH BAR */}
      <Box
        display={"flex"}
        backgroundColor={colors.primary[400]}
        borderRadius={"3px"}
        sx={{ height: 45 }}
      >
        {layout !== "auth" && (
          <>
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
          </>
        )}
      </Box>

      {/* ICONS */}
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"row"}
        alignItems={"center"}
      >
        <IconButton
          onClick={colorMode.toggleColorMode}
          sx={{ width: 45, height: 45 }}
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon sx={{ width: 24, height: 24 }} />
          ) : (
            <LightModeOutlinedIcon sx={{ width: 24, height: 24 }} />
          )}
        </IconButton>
        {layout !== "auth" && (
          <>
            <IconButton sx={{ width: 45, height: 45 }}>
              <NotificationsOutlinedIcon sx={{ width: 24, height: 24 }} />
            </IconButton>
            <IconButton
              id="basic-button"
              aria-controls={isMenuOpen ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={isMenuOpen ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar
                alt="user"
                src={`../../assets/user.png`}
                sx={{ width: 45, height: 45 }}
              />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={() => handleClose("any")}
              PaperProps={{
                style: {
                  borderRadius: "3px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  width: "200px",
                  backgroundColor: colors.primary[400],
                  marginTop: "5px",
                },
              }}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => handleClose("profile")}>
                Account
              </MenuItem>
              <MenuItem onClick={() => handleClose("settings")}>
                Settings
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => handleClose("logout")}
                sx={{
                  color: colors.redAccent[400],
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </>
        )}
      </Box>
    </Box>
  );
};

export default TopBar;
