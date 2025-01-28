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
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { benefits } from "../../data/AboutData";
import CtaButton from "../../ui/CtaButton";



function AboutSection() {

  return (
    <Stack
        w="full"
        justify="start"
        align="start"
        pt={["6rem", "6rem", "8rem"]}
        pb={["14rem", "14rem", "12rem"]}
    >
        <ContainerLayout>
            <SimpleGrid
                w="full"
                columns={[1, 1, 1, 2]}
                gap="80px"
            >

                <VStack
                 w="full"
                 justify="center"
                 align="center"
                 gap="20px"
                 position="relative"
                 data-aos="slide-right"
                 data-aos-duration="1000"
                >
                    <Box
                     w="200px"
                     h="200px"
                     bgColor="brand.100"
                     rounded="full"
                     position="absolute"
                     left="-60px"
                     top="-30px"
                    />
                    <Image
                        w="full"
                        h="500px"
                        src="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/TCN/qkzs8uasuwinum7iefps"
                        alt="about-image"
                        objectFit="cover"
                        rounded="initial"
                        roundedBottomRight="60px"
                        loading="lazy"
                        decoding="async"
                        border="10px solid"
                        borderColor="white"
                        zIndex={20}
                    />
                    

                    <VStack
                     w="400px"
                     h="300px"
                     justify="start"
                     align="center"
                     rounded="initial"
                     overflow="hidden"
                     roundedBottomRight="60px"
                     position="absolute"
                     top={["20%", "20%", "20%", "70%"]}
                     left="60px"
                     bg="white"
                     p="10px"
                     data-aos="slide-up"
                     data-aos-duration="1000"
                     boxShadow="0 0 8px rgba(0,0,0,0.5)"
                     zIndex={40}
                    >
                    <Image
                        w="full"
                        h="500px"
                        src="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/TCN/fzetmsqow8rheww8nggf"
                        alt="about-image"
                        objectFit="cover"
                        loading="lazy"
                        decoding="async"
                        zIndex={20}
                        roundedBottomRight="60px"
                    />

                    </VStack>

                    <Box
                     w="200px"
                     h="200px"
                     bgColor="brand.100"
                     rounded="full"
                     position="absolute"
                     right="-60px"
                     bottom="-30px"
                    />


                </VStack>

                <VStack
                    w="full"
                    justify="start"
                    align="start"
                    gap="30px"
                >
                    <MiniHeading
                     miniTitle="About Us"
                     title="Rooted in Christ, Growing Together"
                    />

                    <VStack
                        w="full"
                        justify="start"
                        align="start"
                        gap="30px"
                    >

                        <Text
                          fontSize={16}
                          fontWeight={400}
                          color="brand.900"
                          lineHeight="26px"
                        >
                            The Covenant Nation was dedicated in 1994 as Covenant Christian Centre and has flourished and grown into a church without walls.

                            Embracing the next phase of the work of the ministry, saw the change in the name and logo of this assembly in January 2020 by the Senior pastor and founder, Pastor ‘Poju Oyemade.
                        </Text>

                        <SimpleGrid
                            w="full"
                            columns={[1, 1, 2]}
                            gap="20px"
                        >
                            {benefits.map((benefit, i) => (
                                <HStack
                                 key={i}
                                 w="full"
                                 justify="start"
                                 align="center"
                                 gap="6px"
                                >
                                    <Icon as={IoIosCheckmarkCircle} fontSize="24px" color="brand.100"/>
                                    <Text
                                        fontSize={[16, 16, 18]}
                                        fontWeight={600}
                                        color="brand.600"
                                        lineHeight="24px"
                                    >
                                        {benefit}   
                                    </Text>

                                </HStack>
                            ))}

                        </SimpleGrid>


                        <CtaButton
                          url="/about-us"
                          content="Read More About Us"
                          type="primary"
                        />

                    </VStack>

                </VStack>



            </SimpleGrid>
        </ContainerLayout>

    </Stack>
  )
}

export default AboutSection