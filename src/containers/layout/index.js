import React from "react";
import { Header, Box } from "../../components";
const Layout = ({ children }) => {
  return (
    <>
      <Box position="relative">
        <Header position="absolute" width={1} />
        {children}
      </Box>
    </>
  );
};
export default Layout;
