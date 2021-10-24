import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";

const CenterWrapper = styled(Box, {
  shouldForwardProp: () => true,
})(() => ({
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export default CenterWrapper;
