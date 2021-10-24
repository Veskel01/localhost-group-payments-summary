import React from "react";

// types
import { ILinks } from "Types/Navigation.types";

// utils
import { Link, useLocation } from "react-router-dom";

// mui
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

type Props = {
  links: ILinks[];
};

const BottomNav: React.FC<Props> = ({ links }) => {
  const { pathname } = useLocation();

  const detectCurrentValue = () => {
    if (pathname === "/") return 0;
    if (pathname === "/students") return 1;
    if (pathname === "/mentors") return 2;
    return 0;
  };

  return (
    <BottomNavigation
      sx={{ position: "fixed", bottom: 0, width: "100%" }}
      value={detectCurrentValue()}
      showLabels
    >
      {links.map(({ name, to, icon: Icon }) => (
        <BottomNavigationAction component={Link} to={to} label={name} key={name} icon={<Icon />} />
      ))}
    </BottomNavigation>
  );
};

export default BottomNav;
