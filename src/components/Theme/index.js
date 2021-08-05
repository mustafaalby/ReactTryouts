const breakpoints = ["40em", "64em"];

breakpoints.sm = breakpoints[0];
breakpoints.lg = breakpoints[1];

const colors = {
  white: "#ffffff",
  black: "#000000",
  blue: "#0000ff",
  green: "#00FF00",
  red: "#FF0000",
  orange: "#FF8200",
  yellow: "#FFFF00",
  turquoise: "#00FFFF",
  primary: "#05386B",
  secondary: "#379683",
  lightGreen: "#5CDB95",
  lightGreen2: "#8EE4AF",
  cream: "#EDF5E1",
};

const buttons = {
  primary: {
    color: "primary",
    bg: "lightGreen",
  },
};

const buttonSizes = {
  sm: {
    padding: "6px 12px",
    fontSize: 10,
  },
  md: {
    padding: "8px 24px",
    fontSize: 18,
  },
  lg: {
    padding: "12px 36px",
    fontSize: 24,
  },
};

const textStyles = {
  h1: {
    fontSize: 76,
    fontWeight: 100,
  },
  h2: {
    fontSize: 39,
    fontWeight: 300,
  },
  p1: { fontSize: 12, fontWeight: 100 },
  p2: {
    fontSize: 24,
    fontWeight: 300,
  },
};

export default { colors, buttons, buttonSizes, breakpoints, textStyles };
