import React from "react";
import { Box } from "..";
const ConfirmationBox = ({ isActive, children, ...props }) => {
  return (
    <Box
      display={isActive ? "block" : "none"}
      css={`
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 99;
      `}
      {...props}
    >
      {children}
    </Box>
  );
};

export default ConfirmationBox;
