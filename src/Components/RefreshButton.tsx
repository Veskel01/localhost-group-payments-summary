import React from "react";

// mui
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import RefreshIcon from "@mui/icons-material/Refresh";

// utils
import { useAppContext } from "AppContext/ContextProvider";

const RefreshButton = () => {
  const { refetch } = useAppContext();

  return (
    <Tooltip title="Odśwież" arrow placement="top">
      <IconButton
        size="small"
        color="inherit"
        onClick={() => {
          refetch();
        }}
      >
        <RefreshIcon />
      </IconButton>
    </Tooltip>
  );
};

export default RefreshButton;
