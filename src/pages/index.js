import React from "react";
import { Box } from "../components";
const Index = () => {
  return (
    <Box
      width={1}
      height="100%"
      height="100vh"
      css={`
        background-image: url("/images/image.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      `}
    ></Box>
  );
};
export default Index;
