import React from "react";
import { Box, InputGroup, InputLeftElement, Select } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  return (
    <Box
      w="100%"
      // border={"1px solid black"}
      height="73.03px"
      left={0}
      top={0}
      position={"absolute"}
      boxShadow="0px 1px 4px rgba(0, 0, 0, 0.1)"
      fontFamily="Poppins"
      fontStyle="normal"
      sx={{
        "@media screen and (max-width: 450px)": {
          width: "428px",
          height: "200px",
          left: "0px",
          top: "0px",
          background: "#FFFFFF",
        },
      }}
    >
      <Box
        // border="1px solid blue"
        position="absolute"
        width="160px"
        height="63px"
        left="74px"
        top="6px"
        backgroundImage="url(tutedudeLogo.png)"
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"contain"}
        sx={{
          "@media screen and (max-width: 450px)": {
            position: "absolute",
            width: "160px",
            height: "45px",
            left: "3px",
            top: "62px",
          },
        }}
      ></Box>

      <Box
        // border="1px solid red"
        display={"flex"}
        flexDirection={"row"}
        alignItems={"flex-start"}
        p={0}
        gap={"28px"}
        position="absolute"
        width="519px"
        height="24px"
        left="758px"
        top="25px"
        fontWeight="500"
        fontSize="18px"
        sx={{
          "@media screen and (max-width: 450px)": {
            alignItems: "center",
            justifyContent: "center",
            padding: "12px 25px",
            gap: "10px",
            width: "165px",
            height: "48px",
            left: "228px",
            top: "59px",
            borderRadius: "10px",
            bg: "#800080",
          },
        }}
      >
        <Box
          width="140px"
          height="22px"
          lineHeight="123.5%"
          textAlign="center"
          color="rgba(128, 0, 128, 0.25)"
          flex="none"
          order={0}
          flexGrow={0}
          sx={{
            "@media screen and (max-width: 450px)": {
              display: "none",
            },
          }}
        >
          My Assignment
        </Box>
        <Box
          width="156px"
          height="22px"
          lineHeight="123.5%"
          textAlign="center"
          color="rgba(128, 0, 128, 0.25)"
          flex="none"
          order={1}
          flexGrow={0}
          sx={{
            "@media screen and (max-width: 450px)": {
              display: "none",
            },
          }}
        >
          Chat with Mentor
        </Box>

        <Box
          // border="1px solid black"
          display="flex"
          flexDirection="row"
          alignItems="flex-end"
          padding="0px"
          // gap="4px"
          width="167px"
          height="24px"
          flex="none"
          order="2"
          flexGrow="0"
          color="#800080"
          sx={{
            "@media screen and (max-width: 450px)": {
              alignItems:"center",
              justifyContent:"center",
              color:"white",
              // background: "#800080",
              borderRadius: "10px",
            },
          }}
        >
          <Box
            // border="1px solid red"
            width="24px"
            height="24px"
            flex="none"
            order="0"
            flexGrow="0"
            sx={{
              "@media screen and (max-width: 450px)": {
                
            display:"none"
              },
            }}
          >
            <CgProfile />
          </Box>
          <Box
            // border="1px solid red"
            width="117px"
            height="24px"
            fontWeight={500}
            fontSize="18px"
            lineHeight="123.5%"
            textAlign="center"
            flex="none"
            order={1}
            flexGrow={0}
          >
            ProfileName
          </Box>
          <Box
            // border="1px solid red"
            width="24px"
            height="24px"
            flex="none"
            order="2"
            flexGrow="0"
          >
            <BiChevronDown />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
