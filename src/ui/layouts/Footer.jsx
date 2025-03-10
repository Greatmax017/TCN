import React from "react";
import {
  Flex,
  Image,
  IconButton,
  VStack,
  Text,
  HStack,
  SimpleGrid,
  Icon,
  Heading,
  Stack,
  Input,
} from "@chakra-ui/react";
import ContainerLayout from "./ContainerLayout";
import { Link } from "react-router-dom";
import { NavbarData, socialsLinks } from "../../data/NavbarData";
import { servicesLinks } from "../../data/FooterData";
import { BsFillSendFill } from "react-icons/bs";



function Footer() {
  return (
    <Stack
     w="full"
     justify="start"
     align="start"
     bgColor="black"
    >
      <ContainerLayout>

        <SimpleGrid
          w="full"
          columns={[1, 1, 1, 3]}
          gap="60px"
          pt="4rem"
        >
          <VStack
            w="full"
            justify="start"
            align="start"
            gap="20px"
          >
                <Link to="/">
                    <Image
                     src="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/TCN/b8rnymx5vt0j1mpdp5ly"
                     alt="tcn-toronto-logo"
                     w="100px"
                     h="100px"
                     objectFit="contain"
                    />
                </Link>

              <Text
                fontSize={16}
                fontWeight={400}
                color="white"
                lineHeight="24px"
              >
                  The Covenant Nation was dedicated in 1994 as Covenant Christian Centre and has flourished and grown into a church without walls.

              </Text>

              <HStack
                  w="full"
                  justify="start"
                  align="center"
                  gap="10px"
              >
                  {socialsLinks.map((social, i) => (
                      <Link
                          key={i}
                          to={social.link}
                          title={social.display.toLowerCase()}
                          target="_blank"
                      >
                        <VStack
                            w="40px"
                            h="40px"
                            justify="center"
                            align="center"
                            bgColor="brand.100"
                            rounded="full"
                            role="group"
                            _hover={{
                              bgColor: "white"
                            }}
                            title={social.display.toLowerCase()}
                        >
                          <Icon 
                              as={social.icon} 
                              size="20px" 
                              color="white"
                              _groupHover={{
                                  color: "brand.100",
                              }}
                          />

                        </VStack>
                      
                      </Link>
                  ))}

              </HStack>
          </VStack>

          <HStack
            w="full"
            justify="space-between"
            align="start"
            gap="60px"
          >


            <VStack
              w="full"
              justify="start"
              align="start"
              gap="20px"
            >
              <Heading
                  fontSize={18}
                  fontWeight={500}
                  color="white"
                  lineHeight="24px"
              >
                 Quick Links
              </Heading>

              <VStack
                  w="full"
                  justify="start"
                  align="start"
                  gap="10px"
              >
                {NavbarData.map((link, i) => (
                  <Link
                    key={i}
                    to={link.path}
                  >
                    <Text
                      fontSize={16}
                      fontWeight={400}
                      color="brand.900"
                      lineHeight="24px"
                      _hover={{
                          color: "brand.100"
                      }}
                    >
                      {link.display}
                    </Text>
                  
                  </Link>
                ))}

              </VStack>

            </VStack>

            <VStack
              w="full"
              justify="start"
              align="start"
              gap="20px"
            >
              <Heading
                  fontSize={18}
                  fontWeight={500}
                  color="white"
                  lineHeight="24px"
              >
                  Our Services
              </Heading>

              <VStack
                w="full"
                justify="start"
                align="start"
                gap="10px"
              >
                {servicesLinks.map((service, i) => (
                  <Link
                    key={i}
                    target="_blank"
                    to={service.path}
                  >
                    <Text
                      fontSize={16}
                      fontWeight={400}
                      color="brand.900"
                      lineHeight="24px"
                      _hover={{
                          color: "brand.100"
                      }}
                    >
                      {service.display}
                    </Text>
                  
                  </Link>
                ))}

              </VStack>

            </VStack>

          </HStack>

          <VStack
            w="full"
            justify="start"
            align="start"
            gap="20px"
          >
              <Text
                  fontSize={16}
                  fontWeight={600}
                  color="white"
                  lineHeight="28px"
              >
                Newsletter <Text  w="40px" h="4px" bg="brand.100"/>
              </Text>

              <Text
                  fontSize={16}
                  fontWeight={400}
                  color="brand.900"
                  lineHeight="25px"
              >
                Subscribe our newsletter to get our latest update & news.
              </Text>

              <HStack
               w="full"
               justify="space-between"
               align="center"
               bgColor="white"
               border="1px solid"
               borderColor="brand.400"
               rounded="20px"
               py="6px"
               px="12px"
              >
                <Input
                    type="email"
                    placeholder="Email Address"
                    fontWeight={400}
                    fontSize={16}
                    size="lg"
                    bg="transparent"
                    border="none"
                    outline="none"
                    color="black"
                    w="full"
                    p="initial"
                />

                <IconButton
                 icon={
                  <Icon 
                    as={BsFillSendFill} 
                    color="white"
                    w={6}
                    h={6} 
                  />}
                  bgColor="brand.100"
                  rounded="full"
                  py="20px"
                  px="15px"
                />

              </HStack>

          </VStack>


          
        </SimpleGrid>


        <Flex
              w="full"
              justify="space-between" 
              align={["center", "center", "start"]}
              direction={["column", "column", "row"]}
              wrap={["wrap", "wrap", "nowrap"]}
              bgColor="transparent"
              py="20px"
              mt={["2rem", "2rem", "4rem"]}
              borderTop="1px solid"
              borderTopColor="rgba(255, 255, 255, 0.1)"
      >
                <Text 
                  fontSize={16}
                  fontWeight={500}
                  lineHeight="24.59px" 
                  color="brand.900" 
                  textAlign="center"
                >
                Powered by TCN Toronto
              </Text>

              <Text 
                  fontSize={16}
                  fontWeight={500}
                  lineHeight="24.59px" 
                  color="brand.900" 
                  textAlign="center"
              >
                &copy; {new Date().getFullYear()} TCN Toronto | All Rights Reserved
              </Text>

            </Flex>

      </ContainerLayout>

    </Stack>
  )
}

export default Footer
