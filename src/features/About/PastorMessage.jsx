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
import CtaButton from "../../ui/CtaButton";

function PastorMessage() {



  return (
    <Stack
     w="full"
     justify="start"
     align="start"
     py={["4rem", "4rem", "6rem"]}
     bgColor="alt.600"
    >
        <ContainerLayout>
            <VStack
             w="full"
             justify="center"
             align="center"
             gap="40px"
            >
                <SimpleGrid
                 w="full"
                 columns={[1, 1, 1, 12]}
                 gap="40px"
                >

                    <VStack
                     w="full"
                     justify="center"
                     align="center"
                     minH="600px"
                     bgImage="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/TCN/ticveeot2izz7q19szlj"
                     bgSize="cover"
                     bgRepeat="no-repeat"
                     bgPos="center"
                     position="relative"
                     roundedBottomLeft="200px"
                     overflow="hidden"
                     data-aos="slide-right"
                     data-aos-duration="1000"
                     gridColumn={["span 1", "span 1", "span 1", "span 5"]}
                     _before={{
                       content: "''",
                       position: "absolute",
                       w: "full",
                       h: "full",
                       inset: 0,
                       bgColor: "rgba(0,0,0,0.3)",
                       zIndex: 1
                     }}
                    />

                    <VStack
                        w="full"
                        justify="start"
                        align="start"
                        gap="40px"
                        gridColumn={["span 1", "span 1", "span 1", "span 7"]}
                    >
                        <MiniHeading
                            miniTitle="Pastor's Message"
                            title="Words of Hope and Faith from Our Pastor"
                        />

                        <VStack
                         w="full"
                         justify="start"
                         align="start"
                         gap="20px"
                         bgColor="white"
                         borderLeft="4px solid"
                         borderLeftColor="brand.100"
                         p="20px"
                        >

                            <Text
                                fontSize={16}
                                fontWeight={400}
                                color="brand.900"
                                lineHeight="25px"
                                fontStyle="italic"
                            >
                                "To live a supernatural life you have to start today planting seeds of faith into the soil of your heart. Planting involves speaking the word of God, His promises to you as the present realities of your life.".
                            </Text>

                        </VStack>

                        <VStack
                         w="full"
                         justify="start"
                         align="start"
                         gap="4px"
                        >
                            <Text
                                fontSize={16}
                                fontWeight={500}
                                color="black"
                                lineHeight="25px"
                                fontStyle="italic"
                            >
                                Pastor Poju Oyemade
                            </Text>

                            <Heading
                                fontSize={18}
                                fontWeight={700}
                                color="black"
                                lineHeight="25px"
                                textTransform="uppercase"
                            >
                               Senior Pastor
                            </Heading>

                        </VStack>


                        <CtaButton
                          url="/contact-us"
                          content="Join Us In Person"
                          type="primary"
                        />


                    </VStack>

                </SimpleGrid>

            </VStack>
        </ContainerLayout>

    </Stack>
  )
}

export default PastorMessage
