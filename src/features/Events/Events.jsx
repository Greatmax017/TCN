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
import { eventsData } from "../../data/EventsData";
import EventCard from "./EventCard";

function Events() {
    
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
                 miniTitle="Events"
                 title="Don't Miss Life-Changing Events!"
                 isCenter={true}
                />

                <SimpleGrid
                    w="full"
                    columns={[1, 1, 2, 2]}
                    gap="40px"
                    py="4rem"
                >
                    {eventsData?.map((event, i) => (
                        <EventCard
                            key={i}
                            {...event}
                        />
                    ))}

                </SimpleGrid>

            </VStack>
        </ContainerLayout>
    </Stack>
  )
}

export default Events
