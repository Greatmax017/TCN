import React from "react";
import {
  Image,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  VStack,
  Icon,
  Heading,
} from "@chakra-ui/react";

import { IoClose } from "react-icons/io5";

function GalleryModal({ handleOpen, handleClose, selectedImage }) {

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

                        <VStack
                            w="full"
                            justify="center"
                            align="center"
                        >
                            <Image
                                w="full"
                                h="full"
                                src={selectedImage}
                                alt="gallery-image"
                                objectFit="cover"
                                rounded="20px"
                            />

                        </VStack>
            </VStack>
        </DrawerBody>
    </DrawerContent>
</Drawer>
  )
}

export default GalleryModal
