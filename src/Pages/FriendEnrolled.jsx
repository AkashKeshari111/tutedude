import { Box } from "@chakra-ui/react";
import React from "react";

const FriendEnrolled = () => {
  return (
    <Box
      position="absolute"
      width="168px"
      height="24p"
      left="187px"
      top="799px"
      fontFamily="Poppins"
      fontStyle="normal"
      fontWeight="500"
      fontSize="16px"
      lineHeight="24px"
      color="#800080"
      sx={{
        "@media screen and (max-width: 450px)": {
          left: "37px",
          top: "1156px",
          
        },
      }}
    >
      Friends Who Enrolled
    </Box>
  );
};

export default FriendEnrolled;
