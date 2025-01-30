import React from "react";
import {
  VStack,
  Text,
  Heading,
  Stack,
} from "@chakra-ui/react";
import ContainerLayout from "../../ui/layouts/ContainerLayout";
import Navbar from "../../ui/layouts/Navbar";

function HeroInner({ image, subtitle, title }) {
  return (
    <Stack
      w="full"
      justify="center"
      align="center"
      minH={["320px", "320px", "320px", "420px"]}
      bgImage={image}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="center"
      bgAttachment={["static", "static", "fixed", "fixed"]}
      position="relative"
      _before={{
        content: "''",
        position: "absolute",
        w: "full",
        h: "full",
        inset: 0,
        bgColor: "rgba(0,0,0,0.5)",
        zIndex: 1
      }}

    >
        <Navbar/>
        <ContainerLayout>
            <VStack
                w={["full", "full", "full", "60%"]}
                mx={["initial", "initial", "initial", "auto"]}
                justify="center"
                align="center"
                zIndex={2}
                gap="20px"
                pt="4rem"
            >
                <Heading
                    fontSize={[40, 42, 44, 56]}
                    fontWeight={900}
                    lineHeight={["44px", "44px", "48px"]}
                    color="white"
                    textAlign="center"
                >
                    {title}
                </Heading>

                <Text
                 fontSize={16}
                 fontWeight={500}
                 lineHeight="24px"
                 color="brand.100"
                 textAlign="center"
                 bgColor="white"
                 py="10px"
                 px="20px"
                 roundedTopRight="20px"
                 borderBottom="4px solid"
                 borderBottomColor="brand.100"
                >
                    Home / <Text as="span" color="black">{subtitle ? `${subtitle} / ${title}` : title}</Text>
                </Text>


            </VStack>
        </ContainerLayout>

    </Stack>
  )
}

export default HeroInner
