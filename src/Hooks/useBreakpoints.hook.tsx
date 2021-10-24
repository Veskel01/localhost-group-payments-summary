import { useTheme, useMediaQuery } from "@mui/material";

const useBreakpoints = () => {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  return {
    isXs,
  };
};

export default useBreakpoints;
