import { Box } from "@chakra-ui/react";
import React from "react";

const ReferEarn = () => {
  return (
    <Box
      // border="1px solid red"
      position="absolute"
      width="358px"
      height="105px"
      top="179px"
      left="766px"
      sx={{
        "@media screen and (max-width: 450px)": {
          left: "35px",
          top: "458px",
          display: "flex",
          flexDirection: "column",
          // justifyContent:"center",
          alignItems: "left",
        },
      }}
    >
      <Box
        // border="1px solid green"
        position="absolute"
        height="36px"
        fontFamily="Poppins"
        fontStyle="normal"
        fontWeight={600}
        fontSize="24px"
        lineHeight="36px"
        color="#800080"
        sx={{
          "@media screen and (max-width: 450px)": {
            width: "100%",
            top: "0px",
          },
        }}
      >
        Your Referral Code
      </Box>
      <Box
        border="1.5px solid #800080"
        borderImageSource="linear-gradient(270deg, #800080 0%, #FF864C 100%)"
        borderImageSlice={1}
        boxSizing="border-box"
        position="absolute"
        width="100%"
        height="60px"
        borderRadius="10px"
        top="45px"
        sx={{
          "@media screen and (max-width: 450px)": {
            boxSizing: "border-box",
            width: "358px",
            top: "45px",
          },
        }}
      >
        <Box
          position="absolute"
          width="64.24%"
          height="30px"
          left="64px"
          top="15px"
          fontFamily="Poppins"
          fontStyle="normal"
          fontWeight={500}
          fontSize="20px"
          lineHeight="30px"
          letterSpacing="1.5rem"
          color="#800080"
          sx={{
            "@media screen and (max-width: 450px)": {
              width: "230px",
              left: "64px",
              top: "15px",
            },
          }}
        >
          EDCH54
        </Box>
      </Box>
    </Box>
  );
};

export default ReferEarn;
