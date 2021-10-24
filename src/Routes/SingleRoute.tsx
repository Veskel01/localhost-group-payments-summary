import React from "react";

import { Helmet, HelmetProps } from "react-helmet";

import Box from "@mui/material/Box";

// components
import Navigation from "Components/Navigation";
import Loading from "Components/Loading";
import BottomNav from "Components/BottomNav";

// utils
import { useAppContext } from "AppContext/ContextProvider";
import useBreakpoints from "Hooks/useBreakpoints.hook";
import { navLinks } from "Components/Navigation";

type Props = {
  view: React.ComponentType;
  helmetProps?: HelmetProps;
};

const SingleRoute: React.FC<Props> = ({ view: View, helmetProps }) => {
  const { isLoading, isRefetching } = useAppContext();

  const { isXs } = useBreakpoints();

  if (isLoading || isRefetching) {
    return <Loading />;
  }

  return (
    <>
      <Navigation />
      <Helmet {...helmetProps} />
      <View />
      <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}>
        {isXs && <BottomNav links={navLinks} />}
      </Box>
    </>
  );
};

export default SingleRoute;
