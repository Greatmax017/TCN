import React, { useRef, useState } from "react";
import {
  Flex,
  Button,
  Image,
  IconButton,
  VStack,
  Icon,
  Stack,
} from "@chakra-ui/react";
import ContainerLayout from "../../ui/layouts/ContainerLayout";
import MiniHeading from "../../ui/MiniHeading";
import { images } from "../../data/GalleryData";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Gallery as GridGallery } from "react-grid-gallery";



function Gallery() {


  const slides = images.map(({ original, width, height }) => ({
    src: original,
    width: "100%",
    height: "100%",
  }));


  const [index, setIndex] = useState(-1);
  const handleClick = (index, item) => setIndex(index);
  

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


                  <div style={{ width: "100%", cursor: "pointer" }}>
                        <GridGallery
                            images={images}
                            onClick={handleClick}
                            enableImageSelection={true}
                            
                        />
                        <Lightbox
                            slides={slides}
                            open={index >= 0}
                            index={index}
                            close={() => setIndex(-1)}
                        />

                </div>

            </VStack>
        </ContainerLayout>


    </Stack>
  )
}

export default Gallery
