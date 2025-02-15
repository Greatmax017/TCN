import React from "react";
import {
  VStack,
  useBreakpointValue,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import ContainerLayout from "../../ui/layouts/ContainerLayout";
import MiniHeading from "../../ui/MiniHeading";
import { eventsData } from "../../data/EventsData";
import EventCard from "./EventCard";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Parallax, Pagination, Navigation } from 'swiper/modules';


function Events() {

  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Stack
     w="full"
     justify="start"
     align="start"
     py={["2rem", "4rem", "6rem"]}
    >
        <ContainerLayout>
            <VStack
             w="full"
             justify="center"
             align="center"
             gap="40px"
            >
                <MiniHeading
                 miniTitle="Events"
                 title="Don't Miss Life-Changing Events!"
                 isCenter={true}
                />

                {isDesktop ?
                    <>
                        <SimpleGrid
                            w="full"
                            columns={[1, 1, 2, 2]}
                            gap="40px"
                            py="4rem"
                        >
                            {eventsData?.map((event, i) => (
                                <EventCard
                                    key={i}
                                    {...event}
                                />
                            ))}

                        </SimpleGrid>
                    
                    </>

                    :

                    <>
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

                        {eventsData?.slice(0, 3).map((event, i) => (
                            <SwiperSlide 
                                key={i} 
                                style={{ 
                                    width: "100%",
                                    height: "100%",
                                    display: "flex", 
                                    alignItems: "stretch",
                                    flexDirection: "column",
                                    paddingTop: "4rem" 
                                }}
                            >
                                <EventCard
                                    {...event}
                                />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                    
                    </>
                }



            </VStack>
        </ContainerLayout>
    </Stack>
  )
}

export default Events
