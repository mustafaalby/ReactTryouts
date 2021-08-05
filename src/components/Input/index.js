import React from "react";
import Box from "../Box";
import { css } from "styled-components";

const Input = ({ ...props }) => {
  const style = css`
    min-height: 2em;
    background: rgba(0, 0, 0, 0.1);
    border: none;
    border-bottom: 2px solid #379683;
    border-radius: 5px 5px 0px 0px;
    &:focus {
      outline: none;
    }
  `;
  return (
    <Box>
      <Box
        {...props}
        css={`
          ${style}
        `}
      />
    </Box>
  );
};
Input.defaultProps = { as: "input" };
export default Input;
