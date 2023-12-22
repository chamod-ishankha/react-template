import React, { lazy } from "react";

// Icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

// Lazy load all the views
const Dashboard = lazy(() => import("./scenes/dashboard"));
const Team = lazy(() => import("./scenes/team"));
const Invoices = lazy(() => import("./scenes/invoices"));
const Contacts = lazy(() => import("./scenes/contacts"));
const Form = lazy(() => import("./scenes/form"));
const Calendar = lazy(() => import("./scenes/calendar"));
const Login = lazy(() => import("./scenes/auth/login"));
const Signup = lazy(() => import("./scenes/auth/signup"));
const ForgotPassword = lazy(() => import("./scenes/auth/forgotPassword"));
const ResetPassword = lazy(() => import("./scenes/auth/resetPassword"));
const NotFound = lazy(() => import("./scenes/global/NotFound"));
const InternalError = lazy(() => import("./scenes/global/InternalError"));
const Profile = lazy(() => import("./scenes/profile"));
const Settings = lazy(() => import("./scenes/settings"));

export const authComponents = [
  {
    name: "Login",
    path: "/login",
    component: <Login />,
    layout: "/auth",
  },
  {
    name: "Sign Up",
    path: "/register",
    component: <Signup />,
    layout: "/auth",
  },
  {
    name: "Forgot Password",
    path: "/forgot-password",
    component: <ForgotPassword />,
    layout: "/auth",
  },
  {
    name: "Reset Password",
    path: "/reset-password",
    component: <ResetPassword />,
    layout: "/auth",
  },
  {
    name: "404 Not Found",
    path: "/404",
    component: <NotFound />,
    layout: "/auth",
  },
  {
    name: "500 Internal Error",
    path: "/500",
    component: <InternalError />,
    layout: "/auth",
  },
];

export const adminComponents = [
  {
    name: "Dashboard",
    path: "/",
    icon: <HomeOutlinedIcon />,
    component: <Dashboard />,
    layout: "/admin",
    ignore: false,
    collapse: false,
  },
  {
    name: "Team",
    cat: "Data",
    path: "/team",
    icon: <PeopleOutlinedIcon />,
    component: <Team />,
    layout: "/admin",
    ignore: false,
    collapse: false,
  },
  {
    name: "Contacts",
    path: "/contacts",
    icon: <ContactsOutlinedIcon />,
    component: <Contacts />,
    layout: "/admin",
    ignore: false,
    collapse: false,
  },
  {
    name: "Invoices",
    path: "/invoices",
    icon: <ReceiptOutlinedIcon />,
    component: <Invoices />,
    layout: "/admin",
    ignore: false,
    collapse: false,
  },
  {
    name: "Form",
    cat: "Pages",
    path: "/form",
    icon: <PersonOutlinedIcon />,
    component: <Form />,
    layout: "/admin",
    ignore: false,
    collapse: false,
  },
  {
    name: "Calendar",
    path: "/calendar",
    icon: <CalendarTodayOutlinedIcon />,
    component: <Calendar />,
    layout: "/admin",
    ignore: false,
    collapse: false,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <PersonOutlinedIcon />,
    component: <Profile />,
    layout: "/admin",
    ignore: true,
    collapse: false,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <PersonOutlinedIcon />,
    component: <Settings />,
    layout: "/admin",
    ignore: true,
    collapse: false,
  },
];
