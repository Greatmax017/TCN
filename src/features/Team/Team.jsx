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
import { teamsData } from "../../data/TeamsData";
import TeamCard from "./TeamCard";


function Team() {
  return (
    <Stack
        w="full"
        justify="start"
        align="start"
        py={["4rem", "4rem", "6rem"]}
    >
        <ContainerLayout>
            <VStack
                w="full"
                justify="start"
                align="start"
                gap="40px"
            >
                <MiniHeading
                    miniTitle="Our Pastors"
                    title="Meet Our Dedicated Ministers and Pastors"
                    isCenter={true}
                />

                <VStack
                  w={["full", "full", "full", "85%"]}
                  mx={["initial", "initial", "initial", "auto"]}
                  justify="center"
                  align="center"
                  py="4rem"
                >
                  <SimpleGrid
                    w="full"
                    columns={[1, 1, 2, 3]}
                    gap="60px"
                  >
                    {teamsData.map((team, i) => (
                        <TeamCard
                        key={i}
                        {...team}
                        />
                    ))}
                    
                  </SimpleGrid>  

                </VStack>


            </VStack>
        </ContainerLayout>

    </Stack>
  )
}

export default Team
