import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
  Text,
  HStack,
  useBreakpointValue,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { useLocation, Link, NavLink } from "react-router-dom";
import ContainerLayout from "./ContainerLayout";
import { NavbarData } from "../../data/NavbarData";
import { IoMenu } from "react-icons/io5";
import CtaButton from "../CtaButton";
import ModalDialog from "../ModalDialog";



function Navbar() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const location = useLocation();
    const id = location.pathname.split("/")[1];
    const isDesktop = useBreakpointValue({ base: false, lg: true });


    const [isScrolled, setIsScrolled] = useState(false);
    const [isGiving, setIsGiving] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const toast = useToast();

    const handleCopyToClipboard = (content, title) => {
      navigator.clipboard.writeText(content).then(() => {
        toast({
          title: "Copied to clipboard",
          description: `${title} content has been copied.`,
          status: "info",
          duration: 2000,
          isClosable: true,
          position: "bottom-right"
        });
      });
    };



    const givingData = [
        {
            title: "Interac e-Transfer",
            content: "giving@thecovenantnation.ca",
            handleCopy: handleCopyToClipboard
        },

        {
            title: "Paypal",
            content: "toronto@thecovenantnation.ca",
            handleCopy: handleCopyToClipboard
        },
    ]
    


  return (
    <>
    {isDesktop ?
        <ContainerLayout>    
         <HStack
            w="full"
            justify="space-between"
            align="center"
            py="4px"
            px="40px"
            bgColor="transparent"
            borderBottom="1px"
            borderBottomColor="rgba(255, 255, 255, 0.1)"
            position="absolute"
            top="3%"
            mb="10px"
            left={0}
            right={0}
            zIndex={9999}
         >
                <Link to="/">
                    <Image
                     src="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/TCN/b8rnymx5vt0j1mpdp5ly"
                     alt="tcn-logo"
                     w="100px"
                     h="100px"
                     objectFit="contain"
                    />
                </Link>


                <HStack
                    justify="center"
                    align="center"
                    gap="20px"
                    bgColor="transparent"
                    overflow="hidden"
                >

                    <HStack 
                        w="full"
                        gap="30px" 
                        justify="start" 
                        align="center"
                    >
                        {NavbarData.map((item, i) => ((
                                <NavLink key={i} to={item.path}>
                                    <Text
                                        fontSize={16}
                                        fontWeight={400}
                                        color={item.id === id ? "brand.100" : "white"}
                                        _hover={{ color: "brand.100" }}
                                    >
                                        {item.display}
                                    </Text>
                                </NavLink>
                            )
                        ))}
                    </HStack>

                </HStack>

                <CtaButton
                    url="/contact-us"
                    type="primary"
                    content="Giving"
                    handleClick={() => setIsGiving(true)}
                />

         </HStack>

        </ContainerLayout>

        :

        <>


            <HStack
                w="full"
                justify="space-between"
                align="center"
                py="4px"
                px="10px"
                bgColor="transparent"
                borderBottom="1px"
                borderBottomColor="rgba(255, 255, 255, 0.1)"
                position="absolute"
                top="3%"
                mb="10px"
                left={0}
                right={0}
                zIndex={999}
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


                <VStack>
                    <Box
                        w="40px"
                        h="40px"
                        p="4px"
                        rounded="8px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        bg="brand.100"
                        cursor="pointer"
                    >
                        <Icon 
                            as={IoMenu} 
                            w={6}
                            h={6}
                            color="white" 
                            onClick={onOpen} 
                        />
                    </Box>
                </VStack>    

            </HStack>

        <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody bgColor="white">
                        <VStack 
                            mt="40px" 
                            w="full" 
                            gap="25px" 
                            justify="start" 
                            align="start"
                            bgColor="white"
                        >
                            {NavbarData.map((item) => ((
                                <NavLink key={item.id} to={item.path}>
                                    <Text
                                        fontSize={16}
                                        fontWeight={500}
                                        color={item.id === id ? "brand.100" : "brand.600"}
                                        _hover={{ color: "brand.100" }}
                                        onClick={onClose}
                                    >
                                        {item.display}
                                    </Text>
                                </NavLink>
                            )
                        ))}
                        

                        <CtaButton
                            url="/contact-us"
                            type="primary"
                            content="Support the Mission"
                            handleClick={() => setIsGiving(true)}
                        />


                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        
        
        </>

    }
    
    <ModalDialog
     isDialog={isGiving}
     dialogTitle="To Support the Mission"
     dialogBody="Give and be part of what God is doing"
     closeDialog={() => setIsGiving(false)}
     handleConfirm={() =>  setIsGiving(false)}
     confirmText="Done"
     dialogData={givingData}
    />
    
    </>
  )
}

export default Navbar
