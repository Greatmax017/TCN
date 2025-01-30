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
import ContainerLayout from "../../ui/layouts/ContainerLayout";
import MiniHeading from "../../ui/MiniHeading";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { galleryData } from "../../data/GalleryData";
import GalleryModal from "./GalleryModal";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Parallax, Pagination, Navigation } from 'swiper/modules';

function Gallery() {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (index) => {
    setOpenModal(true);
    setSelectedImage(index);

  }

  const handleClose = () => {
    setOpenModal(false);
    setSelectedImage(null);
  }


  return (
    <Stack
     w="full"
     justify="start"
     align="start"
     py={["4rem", "4rem", "6rem"]}
     position="relative"
    >
        <ContainerLayout>
            <VStack
             w="full"
             justify="center"
             align="center"
             gap="80px"
            >
                <MiniHeading
                    miniTitle="Faith in Focus"
                    title="Captured Moments of Faith and Fellowship"
                    isCenter={true}
                />

                    <Swiper
                        style={{ width: "100%", height: "100%" }}
                        speed={2000}
                        loop={true}
                        parallax={true}
                        pagination={false}
                        centeredSlides={true}
                        spaceBetween={40}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        modules={[Autoplay, Parallax, Pagination, Navigation]}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}

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
                        initialSlide={2}
                        onBeforeInit={(swiper) => {
                            // Bind swiper navigation to custom buttons
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.update();
                        }}
                    >
                        {galleryData.map((image, i) => (
                            <SwiperSlide key={i}>
                              <VStack
                                w="full"
                                justify="center"
                                align="center"
                                maxH="300px"
                                borderWidth="1px"
                                borderRadius="lg"
                                overflow="hidden"
                                cursor="pointer"
                                transition="all 1s ease-in-out"
                                role="group"
                                position="relative"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                              >
                                <Image 
                                  src={image} 
                                  alt={`image-${i}`}
                                  w="full"
                                  h="auto"
                                  objectFit="cover"
                                  loading="lazy"
                                />

                                <VStack
                                 display="none"
                                 w="full"
                                 h="full"
                                 justify="center"
                                 align="center"
                                 position="absolute"
                                 inset={0}
                                 bgColor="rgba(0,0,0,0.5)"
                                 _groupHover={{
                                  display: "flex",
                                 }}
                                 onClick={() => handleOpen(i)}
                                >
                                  <Button
                                      bgColor="white"
                                      color="brand.100"
                                      border="1px solid"
                                      borderColor="brand.100"
                                      rounded="full"
                                      _hover={{
                                          bgColor: "brand.100",
                                          color: "white"
                                      }}
                                  >
                                    View
                                  </Button>

                                </VStack>

                              </VStack>

                            </SwiperSlide>
                        ))}
                    </Swiper>
            </VStack>
        </ContainerLayout>

      {/*  navigation buttons */}
      <Flex 
          w="full"
          justify="space-between" 
          align="center"
          position="absolute"
          top={"67%"}   
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


        {/* ==== Gallery Modal ==== */}
        <GalleryModal
          handleOpen={openModal}
          handleClose={handleClose}
          images={galleryData}
          selectedImage={selectedImage}
        />
    </Stack>
  )
}

export default Gallery
