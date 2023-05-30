import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import React from "react";
import { TbMathGreater } from "react-icons/tb";

const Frame = () => {
  return (
    <Box
      //   border="1px solid red"
      position="absolute"
      width="100%"
      height="76px"
      left="0px"
      top="73px"
      background="#FFFFFF"
      fontFamily="Poppins"
      fontStyle="normal"
      sx={{
        "@media screen and (max-width: 450px)": {
          width: "100%",
          height: "21px",
          left: "35px",
          top: "158px",
        },
      }}
    >
      <Breadcrumb
        position="absolute"
        height="21px"
        left="187px"
        top="30px"
        fontWeight={400}
        fontSize="14px"
        lineHeight="21px"
        color="#000000"
        spacing="8px"
        sx={{
          "@media screen and (max-width: 450px)": {
            left: "0px",
            top: "0px",
          },
        }}
        separator={<TbMathGreater color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="#">UI/UX</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Refer & Earn</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
};

export default Frame;
