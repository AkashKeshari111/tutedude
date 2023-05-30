import { Box } from "@chakra-ui/react";
import React from "react";

const TermAndCodition = () => {
  return (
    <>
      <Box
        position="absolute"
        width="159px"
        height="24px"
        left="187px"
        top="843px"
        fontFamily="Poppins"
        fontStyle="normal"
        fontWeight="500"
        fontSize="16px"
        lineHeight="24px"
        color="#800080"
        sx={{
          "@media screen and (max-width: 450px)": {
            left: "37px",
            top: "1200px",
          },
        }}
      >
        Terms & Conditions
      </Box>
      <Box
        position="absolute"
        width="100%"
        height="80px"
        top="923px"
        sx={{
          "@media screen and (max-width: 450px)": {
            height: "36px",
            top: "1200px",
          },
        }}
      ></Box>
    </>
  );
};

export default TermAndCodition;
