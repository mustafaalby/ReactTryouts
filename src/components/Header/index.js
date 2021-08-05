import React from "react";
import { Box, Text } from "..";
const Header = ({ ...props }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      px={{ _: "unset", lg: "400px" }}
      {...props}
    >
      <Box
        width={1 / 2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="60px"
        bg="secondary"
        borderRadius="0px 0px 0px 100%"
        as="a"
        href="/algorithm"
        css={`
          &:hover {
            background-color: #5cdb95;
            box-shadow: 5px 5px 15px 5px rgba(255, 255, 255, 0.5);
          }
          text-decoration: none;
        `}
      >
        <Text
          variant="p2"
          color="primary"
          textAlign="center"
          width="fit-content"
        >
          Algorithm
        </Text>
      </Box>
      <Box
        width={1 / 2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="60px"
        bg="secondary"
        borderRadius="0px 0px 100% 0px"
        as="a"
        href="/home"
        css={`
          &:hover {
            background-color: #5cdb95;
            box-shadow: 5px 5px 15px 5px rgba(255, 255, 255, 0.5);
          }
          text-decoration: none;
        `}
      >
        <Text
          variant="p2"
          color="primary"
          textAlign="center"
          width="fit-content"
        >
          Home
        </Text>
      </Box>
    </Box>
  );
};
export default Header;
