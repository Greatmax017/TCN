import React from "react";
import {
  Box,
  VStack,
  Text,
  HStack,
  SimpleGrid,
  Icon,
  Stack,
  Link,
} from "@chakra-ui/react";
import ContainerLayout from "../../ui/layouts/ContainerLayout";
import MiniHeading from "../../ui/MiniHeading";
import { contactLinks } from "../../data/ContactData";
import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <Stack
        w="full"
        justify="start"
        align="start"
        bgColor="brand.500"
    >
        <ContainerLayout>
            <SimpleGrid
             w="full"
             columns={[1, 1, 1, 12]}
             gap="40px"
             py={["2rem", "2rem", "4rem"]}
            >
                <VStack
                    w="full"
                    justify="start"
                    align="start"
                    gridColumn={["span 1", "span 1", "span 1", "span 5"]}
                    gap="40px"
                >
                    <VStack
                     w="full"
                     justify="start"
                     align="start"
                     gap="10px"
                    >
                        <MiniHeading
                            miniTitle="Get In Touch"
                            title="Reach Out to Our Church Support"
                        />
                        <Text
                            fontSize={16}
                            fontWeight={400}
                            color="brand.900"
                            lineHeight="25px"
                        >
                            We’re always ready to help your from you.
                        </Text>

                    </VStack>

                        <VStack
                            w="full"
                            justify="start"
                            align="start"
                            gap="30px"
                        >
                            {contactLinks.map((item, i) => (
                                <HStack
                                    key={i}
                                    w="full"
                                    justify="start"
                                    align="start"
                                    gap="20px"
                                    wrap={["wrap", "wrap", "nowrap"]}
                                >
                                    <Link
                                        href={item.path}
                                        _hover={{
                                            textDecoration: "none"
                                        }}
                                        role="group"
                                    >
                                        <Box
                                            w="50px"
                                            h="50px"
                                            bg="brand.100"
                                            py="10px"
                                            px="10px"
                                            rounded="full"
                                            display="flex"
                                            justifyContent="center"
                                            alignItems="center"
                                            flexDirection="column"
                                            _groupHover={{
                                                bg: "white",
                                            }}
                                        >
                                        <Icon
                                            as={item.icon}
                                            w={6}
                                            h={6}
                                            color="white"
                                            _groupHover={{
                                            color: "brand.200",
                                            }}
                                        />
                                        </Box>
                                    
                                    </Link>

                                    <VStack
                                        w="full"
                                        justify="start"
                                        align="start"
                                        gap="6px"
                                    >
                                        <Text
                                            fontSize={[18, 18, 20]}
                                            fontWeight={700}
                                            lineHeight="24.59px"
                                            color="brand.300"
                                        >
                                            {item.display}
                                        </Text>

                                        <Text
                                            fontSize={[16, 16, 18]}
                                            fontWeight={400}
                                            lineHeight="24.59px"
                                            color="brand.900"
                                            whiteSpace={item.display.includes("Business") ? "pre-wrap" : "initial"}
                                        >
                                            {item.content}
                                        </Text>

                                    </VStack>

                                </HStack>
                            ))}
                            
                        </VStack>

                </VStack>

                <VStack
                    w="full"
                    justify="start"
                    align="start"
                    gridColumn={["span 1", "span 1", "span 1", "span 7"]}
                >
                    <ContactForm/>

                </VStack>

            </SimpleGrid>
        </ContainerLayout>

        <ContactMap/>

    </Stack>
  )
}

export default Contact
