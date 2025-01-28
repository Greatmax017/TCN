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
import { WorshipData } from "../../data/AboutData";
import CtaButton from "../../ui/CtaButton";


function Worship() {

  const [service, setService] = useState(WorshipData[0]);

  const filteredRestServices = () => {
    return WorshipData?.filter(worship => worship?.title !== service?.title);
  }

  const filteredServices = filteredRestServices();


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
                <MiniHeading
                 miniTitle="Worship With Us"
                 title="Experience Spirit-Filled Worship"
                 isCenter={true}
                />

                <SimpleGrid
                  w="full"
                  columns={[1, 1, 12]}
                  gap="40px"
                  py="2rem"
                >
                    <VStack
                     w="full"
                     justify="end"
                     align="end"
                     minH="300px"
                     bgImage={service?.image}
                     bgSize="cover"
                     bgRepeat="no-repeat"
                     bgPos="center"
                     position="relative"
                     overflow="hidden"
                     roundedBottomRight="80px"
                     data-aos="slide-right"
                     data-aos-duration="1000"
                     p="20px"
                     _before={{
                       content: "''",
                       position: "absolute",
                       w: "full",
                       h: "full",
                       inset: 0,
                       bgColor: "rgba(0,0,0,0.5)",
                       zIndex: 1
                     }}
                     gridColumn={["span 1", "span 1", "span 1", "span 7"]}
                    >
                        <VStack
                            w="full"
                            justify="start"
                            align="start"
                            bgColor="white"
                            p="20px"
                            roundedBottomRight="80px"
                            zIndex={4}
                            borderBottom="6px solid"
                            borderBottomColor="brand.100"
                            gap="20px"
                        >
                            <Heading
                             fontSize={[20, 20, 24]}
                             fontWeight={600}
                             color="black"
                             lineHeight="25px"
                            >
                                {service?.title}
                            </Heading>

                            <Text
                             fontSize={16}
                             fontWeight={400}
                             color="brand.900"
                             lineHeight="25px"
                            >
                                {service?.content}
                            </Text>

                            <CtaButton
                                url="/about-us"
                                content="Read More About Us"
                                type="primary"
                            />
                        </VStack>
                        
                    </VStack>


                    <VStack
                        w="full"
                        justify="start"
                        align="start"
                        gap="20px"
                        gridColumn={["span 1", "span 1", "span 1", "span 5"]}
                    >
                        {filteredServices?.map((item, i) => (
                            <VStack
                             key={i}
                             w="full"
                             justify="end"
                             align="end"
                             bgColor="white"
                             p="20px"
                             minH="200px"
                             roundedBottomRight="80px"
                             zIndex={4}
                             data-aos="zoom-in"
                             data-aos-duration="1000"
                             bgImage={item?.image}
                             bgSize="cover"
                             bgRepeat="no-repeat"
                             bgPos="center"
                             position="relative"
                             overflow="hidden"
                             cursor="pointer"
                             _before={{
                               content: "''",
                               position: "absolute",
                               w: "full",
                               h: "full",
                               inset: 0,
                               bgColor: "rgba(0,0,0,0.7)",
                               zIndex: 1
                             }}
                             onClick={() => setService(item)}
                            >
                                <VStack
                                    w="full"
                                    justify="start"
                                    align="start"
                                    bgColor="white"
                                    p="20px"
                                    roundedBottomRight="80px"
                                    zIndex={4}
                                    borderBottom="6px solid"
                                    borderBottomColor="brand.100"
                                    gap="10px"
                                >
                                    <Heading
                                        fontSize={18}
                                        fontWeight={600}
                                        color="black"
                                        lineHeight="25px"
                                    >
                                        {item?.title}
                                    </Heading>

                                    <Text
                                        fontSize={16}
                                        fontWeight={400}
                                        color="brand.900"
                                        lineHeight="25px"
                                    >
                                        {item?.content}
                                    </Text>

                                </VStack>
                            </VStack>
                        ))}

                    </VStack>




                </SimpleGrid>

            </VStack>
        </ContainerLayout>

    </Stack>
  )
}

export default Worship
