import React, { useRef } from "react";
import {
  Box,
  Flex,
  IconButton,
  VStack,
  Text,
  HStack,
  Icon,
  Heading,
  Stack,
} from "@chakra-ui/react";
import ContainerLayout from "../../ui/layouts/ContainerLayout";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Parallax, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Navbar from "../../ui/layouts/Navbar";
import CtaButton from "../../ui/CtaButton";

const sliders = [
  {
    title: "Welcome to The Covenation Nation (TCN)",
    content: "We are a faith-driven, prayer-centered, community-focused, and love-based church.",
    detail:
      "Since 1994, The Covenant Nation has been dedicated to fostering a personal relationship with Christ, teaching practical insights to grow in faith, and making a difference in the world.",
    image:
      "https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/TCN/mwjulgua35xn54kkhu2l",
  },

  {
    title: "Discover a Deeper Connection",
    content: "Communion with Christ Through the Word.",
    detail:
      "At TCN, we place strong emphasis on engaging with the Bible, gaining practical insights to thrive in daily life, and sharing the transformative love of Christ with others.",
    image:
      "https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/TCN/g5yrxiafzocenkggjwu7",
  },

  {
    title: "Join Us in the Journey",
    content: "Experience Faith, Community, and Purpose.",
    detail:
      "Be part of a growing family where lives are transformed through inspiring worship, impactful teachings, and meaningful connections. Together, let’s make an eternal impact.",
    image:
      "https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/TCN/kwqyznrzd6dgggqkyxdo",
  },
];

function HeroHome() {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Stack w="full" justify="center" align="center" position="relative">
      <Navbar />

      <Swiper
        style={{ width: "100%", height: "100%", marginTop: "-8px" }}
        speed={2000}
        parallax={true}
        pagination={false}
        centeredSlides={true}
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
        onBeforeInit={(swiper) => {
          // Bind swiper navigation to custom buttons
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.update();
        }}
      >
        {sliders.map((slider, i) => (
          <SwiperSlide key={i}>
            <Box
              position="relative"
              minH={["650px", "500px", "550px", "700px"]}
              w="full"
              display="flex"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
              _after={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                w: "100%",
                h: "100%",
                bgColor: "rgba(0,0,0,0.4)",
              }}
            >
              {/* Background image */}
              <Box
                position="absolute"
                top={0}
                left={0}
                w="full"
                h="full"
                bgImage={slider.image}
                bgPos="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                zIndex={-2}
              />

              <Box
                position="absolute"
                inset={0}
                w="full"
                h="full"
                bgColor="rgba(0,0,0,0.5)"
                zIndex={-2}
              />

              {/* Content */}
              <VStack
                w="full"
                justify="start"
                align="center"
                gap="20px"
                zIndex={2}
                position="relative"
                pt={["8rem", "6rem", "6rem", "6rem"]}
              >
                <ContainerLayout>
                  <VStack
                    w={["full", "full", "full", "70%"]}
                    mx={["initial", "initial", "auto"]}
                    justify="center"
                    align="center"
                    gap="20px"
                  >
                    <Text
                      fontSize={16}
                      fontWeight={500}
                      color="brand.700"
                      textTransform="uppercase"
                      letterSpacing="2px"
                      borderBottom="10px"
                      borderBottomColor="brand.100"
                      textAlign="center"
                    >
                      {slider.title}
                    </Text>
                    <Heading
                      fontSize={[30, 30, 52]}
                      fontWeight={900}
                      color="white"
                      lineHeight={["28px", "28px", "50px"]}
                      textAlign="center"
                    >
                      {slider.content}
                    </Heading>

                    {/* <Text
                      fontSize={[16, 16, 18]}
                      fontWeight={500}
                      color="brand.700"
                      textAlign="center"
                    >
                      {slider.detail}
                    </Text> */}

                    <HStack
                      w="full"
                      justify="center"
                      align="center"
                      mt={["1rem", "1rem", "2rem"]}
                      gap="20px"
                      wrap={["wrap", "wrap", "wrap", "nowrap"]}
                    >
                      {/* <CtaButton url="/contact-us" type="secondary" content="Join Us This Sunday" /> */}

                      <CtaButton
                        url="/sermons"
                        type="primary"
                        content="Get Connected"
                      />
                    </HStack>
                  </VStack>
                </ContainerLayout>
              </VStack>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/*  navigation buttons */}
      <Flex
        w="full"
        justify="space-between"
        align="center"
        position="absolute"
        top="50%"
        left={0}
        transform="translateY(-50%)"
        px={[2, 4, 6]}
        zIndex={10}
        gap="20px"
      >
        <IconButton
          ref={prevRef}
          icon={<Icon as={FaArrowLeftLong} w={6} h={6} color="brand.100" />}
          bg="rgba(0,0,0,0.6)"
          boxShadow="0 0 6px 2px rgba(0,0,0,0.2)"
          rounded="full"
          py="25px"
          px="15px"
          aria-label="Previous"
          _hover={{
            bgColor: "white",
          }}
        />
        <IconButton
          ref={nextRef}
          icon={<Icon as={FaArrowRightLong} w={6} h={6} color="brand.100" />}
          bg="rgba(0,0,0,0.6)"
          boxShadow="0 0 6px 2px rgba(0,0,0,0.2)"
          rounded="full"
          py="25px"
          px="15px"
          aria-label="Next"
          _hover={{
            bgColor: "white",
          }}
        />
      </Flex>
    </Stack>
  );
}

export default HeroHome;
