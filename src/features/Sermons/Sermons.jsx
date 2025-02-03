import React from "react";
import {
  VStack,
  useBreakpointValue,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import ContainerLayout from "../../ui/layouts/ContainerLayout";
import MiniHeading from "../../ui/MiniHeading";
import { sermonsData } from "../../data/SermonData";
import SermonCard from "./SermonCard";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Parallax, Pagination, Navigation } from 'swiper/modules';
import { useGetSermons } from "./useGetSermons";
import SermonCardLoader from "../../ui/SermonCardLoader";



function Sermons() {

  const { isLoadingSermons, sermons } = useGetSermons();  

  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Stack
     w="full"
     justify="start"
     align="start"
     py={["2rem", "4rem", "6rem"]}
     position="relative"
    >
        <ContainerLayout>
            <VStack
             w="full"
             justify="center"
             align="center"
             gap="40px"
            >
                <MiniHeading
                 miniTitle="Sermons"
                 title="Transforming Lives Through the Word"
                 isCenter={true}
                />

                {isDesktop ?
                    <>
                    {isLoadingSermons ?
                        <>
                            <SimpleGrid
                                w="full"
                                columns={[1, 1, 1, 3]}
                                gap="40px"
                                py="2rem"
                            >
                                {[...Array(6)].map((item) => (
                                    <SermonCardLoader
                                     key={item}
                                    />
                                ))}

                            </SimpleGrid>
                        </>
                        :
                        
                        <>
                        {sermons?.length > 0 ? 

                            <SimpleGrid
                                w="full"
                                columns={[1, 1, 1, 3]}
                                gap="40px"
                                py="2rem"
                            >
                                {sermons?.slice(0, 3).map((sermon, i) => (
                                    <SermonCard
                                        key={i}
                                        image={sermon?.images[0]?.url}
                                        title={sermon?.name}
                                        content={sermon?.description}
                                        date={sermon?.release_date}
                                        author="TCN"
                                        externalUrl={sermon?.external_urls?.spotify}
                                    />
                                ))}

                            </SimpleGrid>

                            :

                            <Text
                                fontSize={14}
                                fontWeight={500}
                                color="brand.900"
                                lineHeight="24px"
                                textAlign="center"
                            >
                                No Sermons Available
                            </Text>
                        
                        }
                        </>
                    }
                    
                    </>

                    :

                    <>

                    {isLoadingSermons ?
                        <>
                            <SimpleGrid
                                w="full"
                                columns={[1, 1, 1, 3]}
                                gap="40px"
                                py="2rem"
                            >
                                {[...Array(6)].map((item) => (
                                    <SermonCardLoader
                                     key={item}
                                    />
                                ))}

                            </SimpleGrid>
                        
                        </>

                        :

                        <>

                        {sermons?.length > 0 ?

                            <Swiper
                                style={{ width: "100%", height: "100%" }}
                                speed={1500}
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

                                navigation={false}

                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        navigation: false,
                                    },
                                    768: {
                                        slidesPerView: 1,
                                        navigation: false,
                                    },
                                    1024: {
                                        slidesPerView: 1,
                                    },
                                }}
                            >

                                {sermons?.slice(0, 3).map((sermon, i) => (
                                    <SwiperSlide 
                                        key={i} 
                                        style={{ 
                                            width: "100%",
                                            height: "100%",
                                            display: "flex", 
                                            alignItems: "stretch",
                                            flexDirection: "column", 
                                        }}
                                    >
                                        <SermonCard
                                            image={sermon?.images[0]?.url}
                                            title={sermon?.name}
                                            content={sermon?.description}
                                            date={sermon?.release_date}
                                            author="TCN"
                                            externalUrl={sermon?.external_urls?.spotify}
                                        />
                                    </SwiperSlide>
                                ))}

                            </Swiper>

                            :

                            <Text
                                fontSize={14}
                                fontWeight={500}
                                color="brand.900"
                                lineHeight="24px"
                                textAlign="center"
                            >
                                No Sermons Available
                            </Text>
                        
                        }
                        
                        </>
                
                    }
            
                    </>
                }


            </VStack>
        </ContainerLayout>

        
    </Stack>
  )
}

export default Sermons
