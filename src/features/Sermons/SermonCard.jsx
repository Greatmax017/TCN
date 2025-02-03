import React from "react";
import {
  Button,
  Image,
  VStack,
  Text,
  HStack,
  Icon,
  Heading,
} from "@chakra-ui/react";
import { FaArrowRightLong, FaRegCalendar } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";
import { Link } from "react-router-dom";



function SermonCard({ title, image, date, content, author, externalUrl }) {

 
  const sermonDetail = [
    {
        icon: FaRegCalendar,
        display: date,
    },
    {
        icon: IoTimerOutline,
        display: "12:50 PM",
    },
  ]  

  return (
    <VStack
        w="full"
        justify="space-between"
        align="stretch"
        minH="432px"
        bgColor="white"
        overflow="hidden"
        border="1px solid"
        borderColor="brand.100"
        rounded="20px"
        cursor="pointer"
        role="group"
        boxShadow="0 0 8px rgba(0,0,0,0.4)"
        spacing={0}
    >
        <VStack
            w="full"
            h="220px"
            justify="center"
            align="center"
            flexShrink={0} 
        >
            <Image
                src={image}
                alt={`${title.toLowerCase()}-image`}
                w="full"
                h="full"
                objectFit="cover"
                transition="all 1s ease-in-out"
                _groupHover={{
                    transform: "scale(1.05)",
                }}
            />
        </VStack>

        <VStack
            w="full"
            justify="space-between" 
            align="start"
            p="20px"
            flexGrow={1}
        >
            <HStack
             w="full"
             justify="start"
             align="center"
             gap="20px"
            >
                {sermonDetail.map((detail, i) => (
                    <HStack
                        key={i}
                        w="full"
                        justify="start"
                        align="center"
                        gap="6px"
                    >
                        <Icon as={detail.icon} w={5} h={5} color="brand.100"/>
                        <Text
                            fontSize={14}
                            fontWeight={500}
                            color="brand.900"
                            lineHeight="24px"
                            whiteSpace="nowrap"
                        >
                            {detail.display}
                        </Text>

                    </HStack>
                ))}

            </HStack>

            <VStack
             w="full"
             justify="start"
             align="start"
             gap="10px"
            >
                <Link target="_blank" to={externalUrl}>
                    <Heading
                        fontSize={20}
                        fontWeight={700}
                        color="alt.200"
                        lineHeight="28px"
                        _groupHover={{
                            color: "brand.100",
                        }}
                    >
                        {title}
                    </Heading>
                </Link>

                <Text
                    fontSize={16}
                    fontWeight={500}
                    color="brand.900"
                    lineHeight="24px"
                    noOfLines={3} 
                >
                    {content?.slice(0, 100)}...
                </Text>

            </VStack>

            <VStack
             w="full"
             justify="start"
             align="start"
            >
                <Link target="_blank" to={externalUrl}>
                    <Button
                        variant="link"
                        bgColor="brand.100"
                        color="white"
                        fontSize={16}
                        fontWeight={500}
                        rounded="10px"
                        py="12px"
                        px="20px"
                        rightIcon={<Icon as={FaArrowRightLong} size="24px"/>}
                        transition="all 0.3s ease-in-out"
                        _groupHover={{
                            bgColor: "alt.600",
                            color: "brand.100",
                            textDecoration: "none",
                            mx: "10px"
                        }}
                    >
                        Read More
                    </Button>
                
                </Link>
            </VStack>

        </VStack>

    </VStack>
  )
}

export default SermonCard
