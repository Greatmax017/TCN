import React from "react";
import {
  Button,
  IconButton,
  VStack,
  Text,
  HStack,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { FaRegCalendar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { convertTo12HourFormat, createGoogleCalendarLink } from "../../util/helper";

function EventCard({ title, date, time, location, description }) {

  const handleAddToCalendar = () => {
    const event = { title, date, time, location, description };
    const googleCalendarUrl = createGoogleCalendarLink(event);
    window.open(googleCalendarUrl, "_blank");
  };

  const convertedTime = convertTo12HourFormat(time);

  return (
    <VStack
      w="full"
      justify="start"
      align="stretch"
      position="relative"
      mb="40px"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >

      <VStack
        w={["25%", "20%", "16%", "16%"]}
        h="100px"
        justify="center"
        align="center"
        bgColor="alt.600"
        gap="2px"
        flexShrink={0}
        roundedTop="full"
        borderBottom="6px solid"
        borderBottomColor="brand.100"
        px="20px"
        pt="1rem"
        position="absolute"
        left="20px"
        top="-50px"
        mb={20}
        boxShadow="0 0 8px rgba(0,0,0,0.3)"
      >
        <Text
          fontSize={12}
          fontWeight={600}
          color="brand.900"
          lineHeight="20px"
          textAlign="center"
          whiteSpace="nowrap"
        >
          {date}
        </Text>
        <Heading
          fontSize={16}
          fontWeight={700}
          color="black"
          lineHeight="25px"
          textAlign="center"
          whiteSpace="nowrap"
        >
          {convertedTime}
        </Heading>

      </VStack>

      <VStack
        w="full"
        justify="space-between" 
        align="start"
        gap="20px"
        flexGrow={1}
        bgColor="white"
        boxShadow="0 0 8px rgba(0,0,0,0.4)"
        rounded="20px"
        spacing={0}
        px="20px"
        pt="4rem"
        pb="20px"
      >
        
        <VStack 
            w="full" 
            justify="start" 
            align="start" 
            gap="6px"
        >
          <Heading
            fontSize={18}
            fontWeight={600}
            color="black"
            lineHeight="25px"
          >
            {title}
          </Heading>

          <Text
            fontSize={16}
            fontWeight={400}
            color="brand.900"
            lineHeight="25px"
            noOfLines={3} 
          >
            {description}
          </Text>
        </VStack>

        <HStack
         w="full"
         justify="space-between"
         align="center"
         gap="10px"
         wrap={["wrap", "wrap", "wrap", "nowrap"]}
        >
          <HStack 
              w="full" 
              justify="start" 
              align="center" 
              gap="10px"
          >
            <IconButton
              icon={<Icon as={FaLocationDot} color="black" fontSize="20px" />}
              bgColor="brand.500"
              rounded="full"
              py="20px"
              px="10px"
            />

            <Text
              fontSize={14}
              fontWeight={600}
              color="brand.900"
              lineHeight="25px"
            >
              {location}
            </Text>
          </HStack>

          <Button
            leftIcon={<Icon as={FaRegCalendar} />}
            bgColor="black"
            color="white"
            onClick={handleAddToCalendar}
            h="initial"
            py="15px"
            px="40px"
            _hover={{
              bgColor: "brand.100",
              color: "white"
            }}
          >
            Add to Schedule
          </Button>
          
        </HStack>

      </VStack>
    </VStack>
  );
}

export default EventCard;