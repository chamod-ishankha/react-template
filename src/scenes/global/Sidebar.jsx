import React, { useEffect, useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  Box,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const navigate = useNavigate();
  return (
    <MenuItem
      active={window.location.pathname === to}
      onClick={() => {
        setSelected(title);
        navigate(to);
      }}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = ({ routes }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const isMobile = useMediaQuery("(min-width:888px)");

  useEffect(() => {
    if (!isMobile) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  }, [isMobile]);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        minHeight: "400px",
      }}
    >
      <ProSidebar
        collapsed={isCollapsed}
        rootStyles={{
          "& .ps-sidebar-container": {
            backgroundColor: `${colors.primary[400]} !important`,
            overflow: "hidden",
          },
        }}
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              return {
                color: active ? "#6870fa" : colors.grey[100],
                "&:hover": {
                  background: "transparent",
                  color: "#868dfb !important",
                },
              };
            },
          }}
        >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            icon={
              isCollapsed ? (
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              ) : undefined
            }
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                ml={"15px"}
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box mb={"25px"}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img
                  alt="profile-user"
                  width={"100px"}
                  height={"100px"}
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>

              <Box textAlign={"center"}>
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight={"bold"}
                  sx={{ m: "10px 0 0 0" }}
                >
                  Ed Roh
                </Typography>
                <Typography variant={"h5"} color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Divider />

          {/* MENU ITEMS */}
          <Box
            style={{
              maxHeight: `${
                !isCollapsed ? "calc(100vh - 285px)" : "calc(100vh - 230px)"
              }`,
              width: "100%",
              overflowY: "auto",
            }}
          >
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              {routes.map((route, index) => (
                <>
                  {route?.cat !== undefined && (
                    <Typography
                      key={index}
                      variant="h6"
                      color={colors.grey[300]}
                      sx={{ m: "15px 0 5px 20px" }}
                    >
                      {route.cat}
                    </Typography>
                  )}

                  {!route.ignore && (
                    <Item
                      key={index}
                      title={route.name}
                      to={route.layout + route.path}
                      icon={route.icon}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  )}
                </>
              ))}
            </Box>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
