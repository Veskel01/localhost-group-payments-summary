import React from "react";

// mui
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MuiLink from "@mui/material/Link";
import Box from "@mui/material/Box";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonIcon from "@mui/icons-material/Person";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

// components
import RefreshButton from "Components/RefreshButton";
import SearchInput from "./SearchInput";

// utils
import { Link, useLocation } from "react-router-dom";
import { ILinks } from "Types/Navigation.types";
import useBreakpoints from "Hooks/useBreakpoints.hook";

export const navLinks: ILinks[] = [
  {
    name: "Płatności",
    to: "/",
    icon: AttachMoneyIcon,
  },
  {
    name: "Studenci",
    to: "/students",
    icon: PersonIcon,
  },
  {
    name: "Mentorzy",
    to: "/mentors",
    icon: SupervisorAccountIcon,
  },
];

const Navigation = () => {
  const { pathname } = useLocation();

  const { isXs } = useBreakpoints();

  const isStudentsView = pathname === "/students";

  return (
    <AppBar position="static" color="primary">
      <Toolbar
        sx={isXs ? { display: "flex", alignItems: "center", justifyContent: "space-between" } : {}}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <RefreshButton />
        </Box>
        <Box sx={{ ml: 5, flexGrow: 1, display: isXs ? "none" : "block" }}>
          {navLinks.map(({ name, to }) => (
            <MuiLink
              key={name}
              underline="hover"
              color="white"
              component={Link}
              to={to}
              sx={{ mr: 3 }}
            >
              {name}
            </MuiLink>
          ))}
        </Box>
        <Box sx={{ display: isStudentsView ? "block" : "none" }}>
          <SearchInput />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
