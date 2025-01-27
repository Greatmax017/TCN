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
  Link,
} from "@chakra-ui/react";
import ContainerLayout from "../../ui/layouts/ContainerLayout";
import MiniHeading from "../../ui/MiniHeading";
import { sermonsData } from "../../data/SermonData";
import SermonCard from "./SermonCard";

function Sermons() {
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
             justify="center"
             align="center"
             gap="40px"
            >
                <MiniHeading
                 miniTitle="Sermons"
                 title="Transforming Lives Through the Word"
                 isCenter={true}
                />

                <SimpleGrid
                    w="full"
                    columns={[1, 1, 1, 3]}
                    gap="40px"
                    py="2rem"
                >
                    {sermonsData?.slice(0, 3).map((sermon, i) => (
                        <SermonCard
                            key={i}
                            {...sermon}
                        />
                    ))}

                </SimpleGrid>

            </VStack>
        </ContainerLayout>
    </Stack>
  )
}

export default Sermons
