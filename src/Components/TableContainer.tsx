import React from "react";

// mui
import MuiTableContainer, { TableContainerProps } from "@mui/material/TableContainer";
import useBreakpoints from "Hooks/useBreakpoints.hook";

const TableContainer: React.FC<TableContainerProps> = ({ children, ...props }) => {
  const { isXs } = useBreakpoints();

  return (
    <MuiTableContainer sx={isXs ? { maxHeight: 640 } : { height: "100%" }} {...props}>
      {children}
    </MuiTableContainer>
  );
};

export default TableContainer;
