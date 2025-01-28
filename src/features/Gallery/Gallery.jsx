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


function Gallery() {
 

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
                    miniTitle="Faith in Focus"
                    title="Captured Moments of Faith and Fellowship"
                    isCenter={true}
                />

                <Box p={4} w="full">
                <ResponsiveMasonry
              columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
              style={{ width: "100%" }}
            >
              <Masonry gutter="20px">
                {galleryData.map((image, i) => (
                  <Box
                    key={i}
                    w="full"
                    maxH="300px"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    cursor="pointer"
                    transition="all 1s ease-in-out"
                    _hover={{
                      transform: "scale(1.05)"
                    }}
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
                  </Box>
                ))}
              </Masonry>
            </ResponsiveMasonry>
                </Box>



            </VStack>
        </ContainerLayout>
    </Stack>
  )
}

export default Gallery
