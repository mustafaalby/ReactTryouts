import React from "react";
import { Box } from "../index";
import { css } from "styled-components";
import { compose, variant } from "styled-system";
import { Theme } from "../";

const buttonVar = variant({
  scale: "buttons",
  variants: { ...Theme.buttons },
});

const buttonSizeVar = variant({
  prop: "buttonSize",
  scale: "buttonSizeVar",
  variants: { ...Theme.buttonSizes },
});
const styles = css`
  ${compose(buttonVar, buttonSizeVar)}
  color: ${(props) => Theme.colors[`${props.color}`]};
  background-color: ${(props) => Theme.colors[`${props.bg}`]};
  border-radius: 24px;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;
const Button = ({ ...props }) => {
  return <Box variant="secondary" css={styles} {...props}></Box>;
};

Button.defaultProps = {
  as: "button",
};

export default Button;
