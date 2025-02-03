import React from "react";
import {
  VStack,
  Skeleton,
  SkeletonText,
  HStack,
  Icon,
  Button,
} from "@chakra-ui/react";
import { FaArrowRightLong, FaRegCalendar } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";

function SermonCardLoader() {
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
      {/* Image Placeholder */}
      <Skeleton w="full" h="220px" />
      
      {/* Content Placeholder */}
      <VStack w="full" justify="space-between" align="start" p="20px" flexGrow={1}>
        {/* Date & Time Skeleton */}
        <HStack w="full" justify="start" align="center" gap="20px">
          {[FaRegCalendar, IoTimerOutline].map((IconComp, i) => (
            <HStack key={i} w="full" justify="start" align="center" gap="6px">
              <Icon as={IconComp} w={5} h={5} color="brand.100" />
              <Skeleton height="20px" width="80px" />
            </HStack>
          ))}
        </HStack>

        {/* Title Placeholder */}
        <Skeleton height="24px" width="70%" />

        {/* Content Placeholder */}
        <SkeletonText noOfLines={3} spacing="4" skeletonHeight="16px" w="full" />

        {/* Button Placeholder */}
        <Skeleton height="40px" width="120px" borderRadius="10px" />
      </VStack>
    </VStack>
  );
}

export default SermonCardLoader;
