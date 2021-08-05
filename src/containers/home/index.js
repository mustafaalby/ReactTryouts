import React, { useEffect, useState } from "react";
import { Box, Button, Input, Text, ConfirmationBox } from "../../components";
import DatePicker from "react-datepicker";
import Select from "react-select";

const Home = () => {
  const [goal, setGoal] = useState("");
  const [finishDate, setFinishDate] = useState(new Date());
  const [goalPrice, setGoalPrice] = useState("");
  const [dayDifference, setDayDifference] = useState("");
  const [supervisorMail, setSuperVisorMail] = useState("");
  const [userMail, setUserMail] = useState("");
  const [isConfirmationBoxActive, setConfirmationBoxActive] = useState(false);
  const [isSuccessfullyAgreed, setSuccessfullyAgreed] = useState(false);
  const today = new Date();
  useEffect(() => {
    let dateDifferenceInTime = finishDate.getTime() - today.getTime();
    setDayDifference(Math.round(dateDifferenceInTime / (1000 * 3600 * 24)));
  }, [finishDate]);

  const renderConfirmationBox = () => {
    return (
      <ConfirmationBox isActive={isConfirmationBoxActive}>
        <Box
          minWidth="400px"
          minHeight="450px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          bg="lightGreen2"
          mt="120px"
        >
          <Box
            p={{ _: "16px", lg: "120px" }}
            css={`
              p {
                padding-bottom: 8px;
              }
            `}
          >
            <Text variant="p2" color="primary">
              {`The goal is ${goal} and it needs to be reached in ${dayDifference} days. (End date is:${`${
                finishDate.getMonth() + 1
              }/${finishDate.getDay() + 1}/${finishDate.getFullYear()}`}).`}
            </Text>
            <Text variant="p2" color="primary">
              If you can not accomplish your goal in time you will lose the
              money.
            </Text>
            <Text variant="p2" color="primary">
              Otherwise if you reach you goal successfully, you are going to win
              {goalPrice.label}
            </Text>
            <Text variant="p2" color="primary">
              Our Supervisor will concact you via: {supervisorMail}.
            </Text>
            <Text variant="p2" color="primary">
              You can concact us via: {userMail}.
            </Text>
          </Box>
          <Button
            maxWidth="250px"
            variant="primary"
            buttonSize="lg"
            my="16px"
            onClick={() => {
              setConfirmationBoxActive(false);
              setSuccessfullyAgreed(true);
            }}
          >
            Agree the terms
          </Button>
        </Box>
      </ConfirmationBox>
    );
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
        px={{ _: "unset", lg: "400px" }}
        py={{ _: "60px", lg: "60px" }}
        height="100vh"
        css={`
          background-color: rgba(0, 0, 0, 0.4);
        `}
      >
        <Box
          pb={{ _: "8px", lg: "16px" }}
          display="flex"
          flexWrap="wrap"
          width={1}
          justifyContent={{ _: "center", lg: "space-between" }}
          alignItems="baseline"
        >
          <Box width={{ _: 1, lg: 1 / 2 }} py={{ _: "8px", lg: "16px" }}>
            <Text
              variant="p2"
              color="cream"
              textAlign={{ _: "center", lg: "left" }}
            >
              Your Goal:
            </Text>
          </Box>
          <Box
            width={{ _: 1, lg: 1 / 2 }}
            py={{ _: "8px", lg: "16px" }}
            px="16px"
          >
            <Input
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Your Goal"
              width={1}
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
        <Box
          pb={{ _: "8px", lg: "16px" }}
          display="flex"
          flexWrap="wrap"
          width={1}
          justifyContent={{ _: "center", lg: "space-between" }}
          alignItems="baseline"
        >
          <Box width={{ _: 1, lg: 1 / 2 }} py={{ _: "8px", lg: "16px" }}>
            <Text
              variant="p2"
              color="cream"
              textAlign={{ _: "center", lg: "left" }}
            >
              End Date:
            </Text>
          </Box>
          <Box
            width={{ _: 1, lg: 1 / 2 }}
            py={{ _: "8px", lg: "16px" }}
            px="16px"
          >
            <DatePicker
              width={1}
              selected={finishDate}
              onChange={(date) => setFinishDate(date)}
              css={`
                border-radius: 4px;
                font-size: 24px;
                &:focus {
                  box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.2);
                  outline: none;
                }
              `}
            />
          </Box>
        </Box>
        {dayDifference != 0 && (
          <>
            <Text
              variant="p2"
              color="lightGreen2"
              textAlign="center"
              py={{ _: "8px" }}
            >
              {`Today: ${today.getMonth() + 1}/${
                today.getDay() + 1
              }/${today.getFullYear()}`}
            </Text>
            <Text
              variant="p2"
              color="lightGreen2"
              textAlign="center"
              py={{ _: "8px" }}
            >
              {`Selected Date: ${finishDate.getMonth() + 1}/${
                finishDate.getDay() + 1
              }/${finishDate.getFullYear()}`}
            </Text>
            <Text
              variant="p2"
              color="lightGreen2"
              textAlign="center"
              py={{ _: "8px" }}
            >
              {`That's ${dayDifference} days from now`}
            </Text>
          </>
        )}
        <Box
          pb={{ _: "8px", lg: "16px" }}
          display="flex"
          flexWrap="wrap"
          width={1}
          justifyContent={{ _: "center", lg: "space-between" }}
          alignItems="baseline"
        >
          <Box
            width={{ _: 1, lg: 1 / 2 }}
            py={{ _: "8px", lg: "16px" }}
            textAlign={{ _: "center", lg: "left" }}
          >
            <Text variant="p2" color="cream">
              Select Goal:
            </Text>
          </Box>
          <Box
            width={{ _: 1, lg: 1 / 2 }}
            px="16px"
            py={{ _: "8px", lg: "16px" }}
          >
            <Select
              instanceId="select"
              options={[
                { label: "25₺", value: 25 },
                { label: "50₺", value: 50 },
                { label: "75₺", value: 75 },
                { label: "100₺", value: 100 },
              ]}
              onChange={(value) => setGoalPrice(value)}
            />
          </Box>
        </Box>
        {goalPrice && (
          <Text
            variant="p2"
            color="lightGreen2"
            textAlign="center"
            py={{ _: "8px", lg: "16px" }}
          >
            You pay if you fail.
          </Text>
        )}
        <Box
          pb={{ _: "8px", lg: "16px" }}
          display="flex"
          flexWrap="wrap"
          width={1}
          justifyContent={{ _: "center", lg: "space-between" }}
          alignItems="baseline"
        >
          <Box width={{ _: 1, lg: 1 / 2 }} py={{ _: "8px", lg: "16px" }}>
            <Text
              variant="p2"
              color="cream"
              textAlign={{ _: "center", lg: "left" }}
            >
              Your Mail Address:
            </Text>
          </Box>
          <Box
            width={{ _: 1, lg: 1 / 2 }}
            px="16px"
            py={{ _: "8px", lg: "16px" }}
          >
            <Input
              type="email"
              placeholder="Your Email"
              value={userMail}
              onChange={(e) => setUserMail(e.target.value)}
              width={1}
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
        <Box
          pb={{ _: "32px", lg: "64px" }}
          display="flex"
          flexWrap="wrap"
          width={1}
          justifyContent={{ _: "center", lg: "space-between" }}
          alignItems="baseline"
        >
          <Box width={{ _: 1, lg: 1 / 2 }} py={{ _: "8px", lg: "16px" }}>
            <Text
              variant="p2"
              color="cream"
              textAlign={{ _: "center", lg: "left" }}
            >
              Your Mail Address:
            </Text>
          </Box>
          <Box
            width={{ _: 1, lg: 1 / 2 }}
            px="16px"
            py={{ _: "8px", lg: "16px" }}
          >
            <Input
              type="email"
              placeholder="Supervisor Email"
              value={supervisorMail}
              onChange={(e) => setSuperVisorMail(e.target.value)}
              width={1}
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
        <Box
          width={1}
          display="flex"
          justifyContent="center"
          py={{ _: "8px", lg: "16px" }}
        >
          <Button
            variant="primary"
            buttonSize="lg"
            onClick={() => setConfirmationBoxActive(true)}
            disabled={
              !goal ||
              !finishDate ||
              !goalPrice ||
              !dayDifference ||
              !supervisorMail ||
              !userMail
            }
            css={`
              &:disabled {
                cursor: not-allowed;
              }
            `}
          >
            Save Goal
          </Button>
        </Box>
        {isSuccessfullyAgreed && (
          <Text
            variant="p2"
            color="lightGreen2"
            textAlign="center"
            py={{ _: "8px", lg: "16px" }}
          >
            DONE! I saved your goal. Time to get cracking!
          </Text>
        )}
      </Box>
      {renderConfirmationBox()}
    </Box>
  );
};

export default Home;
