import React from "react";

// mui
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

// components
import CenterWrapper from "Components/Styled/CenterWrapper";

// utils
import { useAppContext } from "AppContext/ContextProvider";

const LoadingWithLabel: React.FC = () => {
  const { isLoading } = useAppContext();

  return (
    <CenterWrapper sx={{ height: "100vh" }}>
      <Box
        height={110}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <CircularProgress size={45} thickness={2.8} />
        <Typography variant="button" color="prmiary" sx={{ fontSize: 16 }}>
          {isLoading ? "Ładowanie..." : "Odświeżanie..."}
        </Typography>
      </Box>
    </CenterWrapper>
  );
};

export default LoadingWithLabel;
