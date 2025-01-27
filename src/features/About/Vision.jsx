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
import MiniHeading from "../../ui/MiniHeading";
import { visionAndMission, visionStatements } from "../../data/AboutData";
import VisionDetail from "./VisionDetail";


function Vision() {
 const [selectedTab, setSelectedTab] = useState("Our Vision");

 const filteredStatement = visionAndMission?.find(item => item?.title === selectedTab);

  return (
    <Stack
        w="full"
        justify="start"
        align="start"
        py={["4rem", "4rem", "6rem"]}
        bgColor="brand.500"
    >
        <ContainerLayout>
            <VStack
             w="full"
             justify="center"
             align="center"
             gap="60px"
            >
                <MiniHeading
                 miniTitle="Our Vision & Mission"
                 title="Guided by Purpose, Driven by Faith"
                 isCenter={true}
                />

                <HStack
                    w={["full", "full", "full", "50%"]}
                    mx={["initial", "initial", "initial", "auto"]}
                    justify="center"
                    align="center"
                    rounded="full"
                    py="20px"
                    px="30px"
                    border={["none", "none", "none", "1px solid"]}
                    borderColor={["none", "none", "none", "brand.100"]}
                    wrap={["wrap", "wrap", "wrap", "initial"]}
                    bgColor="white"
                >
                    {visionStatements.map((category, i) => (
                        <Button
                         w="full"
                         rounded="full"
                         bgColor={selectedTab === category ? "brand.100" : "transparent"}
                         border="1px solid"
                         borderColor="brand.100"
                         fontSize={[16, 16, 18]}
                         fontWeight={500}
                         h="initial"
                         py="20px"
                         px="30px"
                         color={selectedTab === category ? "white" : "brand.100"}
                         textAlign="center"
                         _hover={{
                            bgColor: "brand.100",
                            color: "white",
                         }}
                         onClick={() =>  setSelectedTab(category)}
                        >
                            {category}
                        </Button>
                    ))}

                </HStack>

                <VisionDetail vision={filteredStatement}/>

            </VStack>
        </ContainerLayout>
        
    </Stack>
      
  
  )
}

export default Vision
