import React from "react";
import {
  Box,
  Image,
  VStack,
  Text,
  HStack,
  SimpleGrid,
  Icon,
  Heading,
  Stack,
} from "@chakra-ui/react";
import ContainerLayout from "../../ui/layouts/ContainerLayout";
import MiniHeading from "../../ui/MiniHeading";
import CtaButton from "../../ui/CtaButton";



function JoinMeeting() {
  return (
    <Stack
        w="full"
        justify="start"
        align="start"
        py={["6rem", "6rem", "8rem"]}
        bgColor="brand.500"
    >
        <ContainerLayout>
            <VStack
                w="full"
                justify="center"
                align="center"
                gap="40px"
            >
                <MiniHeading
                    miniTitle="Join Us Every Weekends"
                    title="Sunday mornings"
                    isCenter={true}
                />

                <VStack
                    w={["full", "full", "full", "65%"]}
                    mx={["initial", "initial", "initial", "auto"]}
                    justify="start"
                    align="start"
                    gap="30px"
                >
                    <Text
                        fontSize={[16, 16, 18]}
                        fontWeight={400}
                        color="brand.900"
                        lineHeight="26px"
                        textAlign="center"
                    >
                        At The Covenant Nation, we gather every weekend to worship, grow in faith, and experience God’s presence together. Whether you join us in-person or online, you are welcome to be part of our vibrant community of believers.
                    </Text>


                    <VStack
                        w="full"
                        justify="center"
                        align="center"
                        spacing={0}
                    >
                        <Heading
                            fontSize={[20, 20, 24]}
                            fontWeight={700}
                            color="black"
                            lineHeight="26px"
                            textAlign="center"
                            textTransform="uppercase"
                        >
                            In Person & Online
                        </Heading>

                        <Heading
                            fontSize={[20, 20, 24]}
                            fontWeight={700}
                            color="black"
                            lineHeight="26px"
                            textAlign="center"
                            textTransform="uppercase"
                        >
                           10:00AM | 08:00PM (ET)
                        </Heading>

                    </VStack>


                    <Text
                        fontSize={[16, 16, 18]}
                        fontWeight={400}
                        color="brand.900"
                        lineHeight="26px"
                        textAlign="center"
                    >
                        Come expectant, be inspired, and deepen your walk with God as we fellowship together. We look forward to worshiping with you!
                    </Text>

                    <HStack
                      w="full"
                      justify="center"
                      align="center"
                      mt={["1rem", "1rem", "2rem"]}
                      gap="20px"
                      wrap={["wrap", "wrap", "wrap", "nowrap"]}
                    >
                      <CtaButton 
                        url="/about" 
                        type="primary" 
                        content="Learn More" 
                      />

                      <CtaButton
                        url="/sermons"
                        type="primary"
                        content="Watch Us Live"
                      />
                    </HStack>

                </VStack>


            </VStack>       

        </ContainerLayout>

    </Stack>
  )
}

export default JoinMeeting
