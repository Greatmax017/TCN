import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
  Text,
  HStack,
  useBreakpointValue,
  SimpleGrid,
  Icon,
  Heading,
  Stack,
} from "@chakra-ui/react";
import ContainerLayout from "../../ui/layouts/ContainerLayout";
import Navbar from "../../ui/layouts/Navbar";

function HeroInner({ image, subtitle, title }) {
  return (
    <Stack
      w="full"
      justify="center"
      align="center"
      minH={["320px", "320px", "320px", "420px"]}
      bgImage={image}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="center"
      bgAttachment="fixed"
      position="relative"
      _before={{
        content: "''",
        position: "absolute",
        w: "full",
        h: "full",
        inset: 0,
        bgColor: "rgba(0,0,0,0.6)",
        zIndex: 1
      }}

    >
        <Navbar/>
        <ContainerLayout>
            <VStack
                w={["full", "full", "full", "60%"]}
                mx={["initial", "initial", "initial", "auto"]}
                justify="center"
                align="center"
                zIndex={2}
                gap="20px"
                pt="4rem"
            >
                <Heading
                    fontSize={[40, 42, 44, 56]}
                    fontWeight={900}
                    lineHeight={["44px", "44px", "48px"]}
                    color="white"
                    textAlign="center"
                >
                    {title}
                </Heading>

                <Text
                 fontSize={16}
                 fontWeight={500}
                 lineHeight="24px"
                 color="brand.100"
                 textAlign="center"
                 bgColor="white"
                 py="10px"
                 px="20px"
                 roundedTopRight="20px"
                 borderBottom="4px solid"
                 borderBottomColor="brand.100"
                >
                    Home / <Text as="span" color="black">{subtitle ? `${subtitle} / ${title}` : title}</Text>
                </Text>


            </VStack>
        </ContainerLayout>

    </Stack>
  )
}

export default HeroInner
