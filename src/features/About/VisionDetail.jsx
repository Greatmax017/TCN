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


function VisionDetail({ vision }) {


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
                <SimpleGrid
                 w="full"
                 columns={[1, 1, 1, 12]}
                 gap="40px"
                >
                    <VStack
                     w="full"
                     justify="start"
                     align="start"
                     gap="40px"
                     gridColumn={["span 1", "span 1", "span 1", "span 7"]}
                    >
                        <MiniHeading
                         miniTitle={vision?.title}
                         title={vision?.content}
                        />

                        <Text
                            fontSize={[16, 16, 18]}
                            fontWeight={400}
                            color="brand.900"
                            lineHeight="25px"
                        >
                            Our vision and mission reflect our commitment to transforming lives and glorifying God.
                        </Text>


                        <Text
                            fontSize={[16, 16, 18]}
                            fontWeight={400}
                            color="brand.900"
                            lineHeight="25px"
                        >
                            {vision?.description}
                        </Text>

                        {vision?.details && (
                            <>
                                <Heading
                                    fontSize={[20, 20, 24]}
                                    fontWeight={600}
                                    color="black"
                                    lineHeight="25px"
                                    mb="6px"
                                >
                                 Steps to Take: 
                                </Heading>
                            
                                <VStack
                                    w="full"
                                    justify="start"
                                    align="start"
                                    gap="15px"
                                >

                                    {vision?.details.map((item, i) => (
                                        <HStack
                                            key={i}
                                            w="full"
                                            justify="start"
                                            align="center"
                                            gap="6px"
                                        >
                                            <Icon as={IoIosCheckmarkCircle} fontSize="24px" color="brand.100"/>
                                            <Text
                                                fontSize={16}
                                                fontWeight={400}
                                                color="brand.600"
                                                lineHeight="24px"
                                            >
                                                {item}   
                                            </Text>
        
                                        </HStack>
                                    ))}

                                </VStack>
                            </>
                        )}

                    </VStack>


                    <VStack
                        w="full"
                        justify="center"
                        align="center"
                        minH="500px"
                        bgImage="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/TCN/u3fmmopqouii4vp9gvq1"
                        bgSize="cover"
                        bgRepeat="no-repeat"
                        bgPos="center"
                        position="relative"
                        roundedBottomRight="200px"
                        overflow="hidden"
                        data-aos="slide-left"
                        data-aos-duration="1000"
                        gridColumn={["span 1", "span 1", "span 1", "span 5"]}
                        _before={{
                        content: "''",
                        position: "absolute",
                        w: "full",
                        h: "full",
                        inset: 0,
                        bgColor: "rgba(0,0,0,0.5)",
                        zIndex: 1
                        }}
                    />

                </SimpleGrid>

            </VStack>
        </ContainerLayout>

    </Stack>
  )
}

export default VisionDetail
