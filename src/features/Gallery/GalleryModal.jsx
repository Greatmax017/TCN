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
  Center,
  Spinner,
} from "@chakra-ui/react";

import { IoClose } from "react-icons/io5";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Parallax, Pagination, Navigation } from 'swiper/modules';


function GalleryModal({ images, handleOpen, handleClose, selectedImage }) {

  const prevRef = useRef(null);
  const nextRef = useRef(null);


  return (
    <Drawer
        isOpen={handleOpen}
        placement="bottom"
        size="full"
        closeOnOverlayClick={false} 
>
    <DrawerOverlay
        sx={{
            backdropFilter: "blur(4px)",
            bg: "rgba(0, 0, 0, 0.5)",
        }}
    />
    <DrawerContent bg="transparent" shadow="none">
        <DrawerBody bg="transparent" p={["0", "0", "20px"]} scrollPadding={0}>
            <VStack
                w="full"
                justify="start"
                align="start"
                bg="white"
                roundedTop="36px"
                minH={["600px", "600px", "800px"]}
                py={["30px", "30px", "60px"]}
                px="40px"
                gap="20px"
                mt={["12rem", "12rem", "initial"]}
                position="relative"
            >
                <VStack
                    w="full"
                    justify="end"
                    align="end"
                >
                    <VStack
                        w="48px"
                        h="48px"
                        justify="center"
                        align="center"
                        rounded="full"
                        border="1px solid"
                        borderColor="alt.200"
                    >
                        <Icon 
                            w={8}
                            h={8} 
                            as={IoClose}
                            color="alt.400"
                            onClick={handleClose}
                            cursor="pointer"
                        />
                    </VStack>
                </VStack>

                <VStack
                    w="full"
                    justify="start"
                    align="start"
                    gap="2px"
                >
                    <Heading
                        fontSize={[24, 28, 30]}
                        fontWeight={700}
                        lineHeight="38px"
                        color="black"
                    >
                       Our Cherished Moments
                    </Heading>
                </VStack>

                    <>
                        <VStack
                            as={Swiper}
                            w="full"
                            justify="start"
                            align="start"
                            slidesPerView={'auto'}
                            spaceBetween={30}
                            pagination={false}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            modules={[Pagination, Navigation]}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            initialSlide={selectedImage}
                            onBeforeInit={(swiper) => {
                                // Bind swiper navigation to custom buttons
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.update();
                            }}
                        >
                            {images.map((image, i) => (
                                <SwiperSlide key={i}>
                                    <Image
                                        w="full"
                                        h="400px"
                                        src={image}
                                        alt="gallery-images"
                                        objectFit="cover"
                                        rounded="20px"
                                    />

                                </SwiperSlide>
                            ))}
                        </VStack>

                        {/*  navigation buttons */}
                        <Flex 
                            w="full"
                            justify="space-between" 
                            align="center"
                            position="absolute"
                            top={["60%", "60%", "50%"]}   
                            left={0}  
                            transform="translateY(-50%)"
                            px={[2, 4, 6]} 
                            zIndex={10} 
                        >
                            <IconButton
                                ref={prevRef}
                                icon={<Icon as={FaArrowLeftLong} w={8} h={8} />}
                                bg="white"
                                boxShadow="0 0 6px 2px rgba(0,0,0,0.2)"
                                rounded="full"
                                py="30px"
                                px="15px"
                                aria-label="Previous"
                                _hover={{
                                    bgColor: "white",
                                }}
                            />
                            <IconButton
                                ref={nextRef}
                                icon={<Icon as={FaArrowRightLong} w={8} h={8} />}
                                bg="white"
                                boxShadow="0 0 6px 2px rgba(0,0,0,0.2)"
                                rounded="full"
                                py="30px"
                                px="15px"
                                aria-label="Next"
                                _hover={{
                                    bgColor: "white",
                                }}
                            />
                        </Flex>
                    </>

            </VStack>
        </DrawerBody>
    </DrawerContent>
</Drawer>
  )
}

export default GalleryModal
