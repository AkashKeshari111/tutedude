import { Box } from "@chakra-ui/react";
import React from "react";
import Dashboard from "./Dashboard";
import ReferEarn from "./ReferEarn";
import WorkingProcess from "./WorkingProcess";
import FriendEnrolled from "./FriendEnrolled";
import TermAndCodition from "./TermAndCodition";

const Main = () => {
  return (
    <Box>
      <Dashboard />
      <ReferEarn />
      <WorkingProcess />
      <FriendEnrolled />
      <TermAndCodition />
    </Box>
  );
};

export default Main;
