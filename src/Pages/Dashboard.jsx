import { Box, Button } from "@chakra-ui/react";
import React from "react";

const Dashboard = () => {
  return (
    <Box
      // border={"1px solid red"}
      position="absolute"
      width="486px"
      height="188px"
      left="187px"
      top="179px"
      background="#FFFFFF"
      boxShadow="0px 3px 100px rgba(0, 0, 0, 0.1)"
      borderRadius="20px"
      fontFamily="Poppins"
      fontStyle="normal"
      sx={{
        "@media screen and (max-width: 450px)": {
          width: "358px",
          height: "198px",
          left: "35px",
          top: "230px",
        },
      }}
    >
      <Box
        // border="1px solid black"
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding="0px"
        position="absolute"
        width="116px"
        height="69px"
        left="20px"
        top="20px"
        sx={{
          "@media screen and (max-width: 450px)": {
            width: "116px",
            height: "69px",
            left: "20px",
            top: "20px",
          },
        }}
      >
        <Box
          width="111px"
          height="21px"
          fontWeight="400"
          fontSize="14px"
          lineHeight="21px"
          color="#800080"
          flex="none"
          order={0}
          flexGrow={0}
        >
          Referral Earning
        </Box>
        <Box
          width="116px"
          height="48px"
          fontWeight="500"
          fontSize="32px"
          lineHeight="48px"
          color="#000000"
          flex="none"
          order={1}
          flexGrow={0}
        >
          ₹ 2,500
        </Box>
      </Box>
      <Box
        // border="1px solid black"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        padding="0px"
        position="absolute"
        width="100px"
        height="69px"
        left="198px"
        top="20px"
        sx={{
          "@media screen and (max-width: 450px)": {
            left: "238px",
            top: "20px",
          },
        }}
      >
        <Box
          width="100px"
          height="21px"
          fontWeight={400}
          fontSize="14px"
          lineHeight="21px"
          color="#800080"
          flex="none"
          order={0}
          flexGrow={0}
        >
          Total Referrals
        </Box>
        <Box
          width="18px"
          height="48px"
          flex="none"
          order={1}
          flexGrow={0}
          fontWeight={500}
          fontSize={"32px"}
          lineHeight={"48px"}
          color="#000000"
        >
          7
        </Box>
      </Box>
      <Box
        // border="1px solid black"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        padding="0px"
        position="absolute"
        width="105px"
        height="69px"
        left="361px"
        top="20px"
        sx={{
          "@media screen and (max-width: 450px)": {
            left: "20px",
            top: "109px",
          },
        }}
      >
        <Box
          width="105px"
          height="21px"
          fontWeight="400"
          fontSize="14px"
          lineHeight="21px"
          color="#800080"
          flex="none"
          order={0}
          flexGrow={0}
        >
          Wallet Balance
        </Box>
        <Box
          width="90px"
          height="48px"
          fontWeight="500"
          fontSize="32px"
          lineHeight="48px"
          color="#000000"
          flex="none"
          order={1}
          flexGrow={0}
        >
          ₹ 500
        </Box>
      </Box>

      <Button
        variant="unstyled"
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        padding="8px 16px"
        gap="10px"
        position="absolute"
        width="180px"
        height="40px"
        left="153px"
        top="119px"
        background="#800080"
        borderRadius="20px"
        fontWeight="500"
        fontSize="16px"
        color="#FFFFFF"
        lineHeight={"24px"}
        sx={{
          "@media screen and (max-width: 450px)": {
            left: "158px",
            top: "133px",
          },
        }}
      >
        Withdraw Balance
      </Button>
    </Box>
  );
};

export default Dashboard;
