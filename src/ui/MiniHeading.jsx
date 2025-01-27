import { Box, Heading, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react';
import { FaChurch } from "react-icons/fa6";

function MiniHeading({ isCenter, miniTitle, title, color }) {
  return (
    <VStack
        w={isCenter ? ["full", "full", "full", "50%"] : "full"}
        mx={isCenter ? ["initial", "initial", "initial", "auto"] : "initial"}
        justify={isCenter ? "center" : "start"}
        align={isCenter ? "center" : "start"}
        gap="24px"
    >

        <HStack
            justify="space-between"
            align="center"
            gap="10px"
            border="1px solid"
            borderColor="brand.100"
            py="12px"
            px="20px"
            rounded="full"
        >
            <Icon as={FaChurch} color="brand.100" fontSize="24px"/>

            <Text
                fontSize={14}
                fontWeight={600}
                color="brand.100"
                lineHeight="24px"
                textAlign="center"
                textTransform="uppercase"
            >
                {miniTitle}
            </Text>

            <Icon as={FaChurch} color="brand.100" fontSize="24px"/>


        </HStack>

        <Heading
            fontSize={[30, 36, 40, 44]}
            fontWeight={900}
            color={color ? color : "black"}
            lineHeight={["40px", "40px", "44px"]}
            textAlign={isCenter ? "center" : "start"}
        >
            {title}
        </Heading>



    </VStack>
  )
}

export default MiniHeading
