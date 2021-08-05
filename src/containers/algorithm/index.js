import React, { useState } from "react";
import { Box, Button, Input, Text } from "../../components";
const Algorithm = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [result, setResult] = useState(0);
  const [total, setTotal] = useState(0);
  const onSubmit = () => {
    let carry = 0;
    let totalCarry = 0;
    let a = Array.from(String(min), Number).reverse();
    let b = Array.from(String(max), Number).reverse();
    let maxLength = a.length > b.length ? a.length : b.length;

    for (let i = 0; i <= maxLength; i++) {
      let sum = a[i] + b[i] + carry;
      if (carry) {
        carry = 0;
      }
      if (Math.floor(sum / 10)) {
        totalCarry++;
        carry++;
      }
    }
    setResult(totalCarry);
  };
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
    >
      <Box
        width={1}
        px={{ _: "18px", lg: "400px" }}
        py={{ _: "60px", lg: "120px" }}
        height="100vh"
        css={`
          background-color: rgba(0, 0, 0, 0.4);
        `}
      >
        <Box display="flex" flexWrap="wrap" alignItems="baseline">
          <Box width={{ _: 1, lg: 1 / 2 }} py="8px">
            <Text
              variant="p2"
              color="cream"
              textAlign={{ _: "center", lg: "left" }}
            >
              A:
            </Text>
          </Box>
          <Box width={{ _: 1, lg: 1 / 2 }} py="8px">
            <Input
              value={min}
              onChange={(e) => setMin(e.target.value)}
              width={1}
              type="number"
              min={0}
              max={1000000000}
              color="cream"
              css={`
                font-size: 24px;
                &::placeholder {
                  color: #edf5e1;
                }
              `}
            />
          </Box>
        </Box>
        <Box display="flex" flexWrap="wrap" alignItems="baseline">
          <Box width={{ _: 1, lg: 1 / 2 }} py="8px">
            <Text
              variant="p2"
              color="cream"
              textAlign={{ _: "center", lg: "left" }}
            >
              B:
            </Text>
          </Box>
          <Box width={{ _: 1, lg: 1 / 2 }} py="8px">
            <Input
              value={max}
              onChange={(e) => setMax(e.target.value)}
              width={1}
              type="number"
              color="cream"
              min={0}
              max={1000000000}
              css={`
                font-size: 24px;
                &::placeholder {
                  color: #edf5e1;
                }
              `}
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" py="16px">
          <Button variant="primary" onClick={() => onSubmit()} buttonSize="lg">
            Calculate
          </Button>
        </Box>
        <Text
          variant="p2"
          color="cream"
          textAlign="center"
          py="24px"
        >{`Total Carry Result: ${result}`}</Text>
      </Box>
    </Box>
  );
};
export default Algorithm;
