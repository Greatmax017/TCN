import React, { useEffect, useRef, useState } from "react"
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
} from "@chakra-ui/react"
import { teamSocialsLinks } from "../../data/TeamsData"
import { Link } from "react-router-dom"
import { FaShareAlt } from "react-icons/fa";



function TeamCard({ image, name, position }) {
    return (
      <VStack
        w="full"
        justify="start"
        align="start"
        position="relative"
        minH="400px"
        gap="30px"
        bgColor="white"
        cursor="pointer"
        border="1px solid"
        borderColor="brand.100"
        boxShadow="22px 27px 1px -3px rgba(215, 113, 20, 1)"
        data-aos="slide-up"
        data-aos-duration="1000"
        roundedTopRight="20px"
        p="20px"
      >
        <VStack
          w="full"
          h="full"
          justify="start"
          align="start"
          position="relative"
          rounded="20px"
          bgColor="white"
          zIndex={1}
          _hover={{
            _after: {
              borderColor: "brand.100",
            },
            "& .overlay": {
              backgroundColor: "rgba(17, 29, 50, 0.5)",
              transform: "perspective(400px) rotateX(0deg) scaleY(1)",
            },
            "& .share-icon": {
              roundedTop: "0px",
              p: "20px 17.5px",
              w: "initial",
              h: "initial",
              transform: "scaleY(1)",
              transitionDelay: "500ms",
            },
            "& .social-icons": {
                transform: "scaleY(1)",
                transitionDelay: "500ms",
              },
          }}
        >
          <VStack
            w="full"
            h="full"
            justify="center"
            align="center"
            position="relative"
            overflow="hidden"
            rounded="20px"
            zIndex={1}
          >
            {/* Overlay div */}
            <Box
              position="absolute"
              w="full"
              h="full"
              top={0}
              left={0}
              backgroundColor="transparent"
              transition="all 0.5s ease-in-out"
              zIndex={1}
              className="overlay"
            />
  
            <Image
              w="full"
              h="full"
              src={image}
              alt={`${name.toLowerCase()}-image`}
            />
          </VStack>
  
         
          <VStack
            position="absolute"
            textAlign="center"
            right="20px"
            bottom="-20px"
            p="20px"
            zIndex="2"
            w="50px"
            h="50px"  
            justify="center"
            align="center"
            rounded="full"
            className="share-icon"
            bgColor="#00000033"
            backdropFilter="blur(30.094066619873047px)"
            boxShadow="0px 10.03px 30.09px -9.03px #00000033" 
          >
              <Icon as={FaShareAlt} w={4} h={4} color="white" />
          </VStack>
  
          
          <VStack
            position="absolute"
            right="20px"
            bottom="20px" 
            bg="brand.100"
            textAlign="center"
            p="20px 17.5px"
            borderTopLeftRadius="10px"
            borderTopRightRadius="10px"
            transform="scaleY(0)"
            transformOrigin="bottom center"
            transformStyle="preserve-3d"
            transition="all 0.4s linear"
            zIndex="2"
            className="social-icons"
            bgColor="#00000033"
            backdropFilter="blur(30.094066619873047px)"
            boxShadow="0px 10.03px 30.09px -9.03px #00000033"
          >
            {teamSocialsLinks.map((social, i) => (
              <Link key={i} to={social.link}>
                <Icon as={social.icon} w={4} h={4} color="white"/>
              </Link>
            ))}
          </VStack>
        </VStack>
  
        <VStack
          w="full"
          justify="start"
          align="start"
          gap="2px"
        >
          <Text
            fontSize={16}
            fontWeight={500}
            color="brand.100"
            lineHeight="24px"
            textTransform="uppercase"
          >
            {position}
          </Text>
  
          <Heading
            fontSize={[20, 20, 24]}
            fontWeight={600}
            color="brand.300"
            lineHeight="24px"
          >
            {name}
          </Heading>
        </VStack>
      </VStack>
    )
  }

export default TeamCard
