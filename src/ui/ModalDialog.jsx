import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    VStack,
    Heading, 
    Text,
    Button,
    Spinner,
    Divider,
    HStack,
    IconButton,
    Icon,
  } from '@chakra-ui/react';

  import React from 'react';
  import { IoClose } from "react-icons/io5";
  import { IoCopyOutline } from "react-icons/io5";
  
  function ModalDialog({ 
    
    isDialog, 
    closeDialog, 
    handleConfirm, 
    dialogTitle, 
    dialogBody, 
    isLoading, 
    confirmText,
    dialogData,
}) {
    const cancelRef = React.useRef()
  
    return (
        <AlertDialog
          motionPreset='slideInBottom'
          leastDestructiveRef={cancelRef}
          isOpen={isDialog}
          isCentered
          bgColor="white"
        >
          <AlertDialogOverlay />
  
          <AlertDialogContent
           maxW="550px"
           maxH="600px"
           rounded="16px"
          >
            <HStack
              w="full" 
              justify="space-between" 
              align="center"
              py="16px"
              px="40px" 
            >
              <Heading
                fontSize={[28, 28, 32]}
                fontWeight={700}
                color="brand.300"
                lineHeight="48px"
               >
                  {dialogTitle}
                </Heading> 


                <IconButton
                  icon={<Icon as={IoClose} color="brand.900" w={5} h={5}/>}
                  rounded="full"
                  border="1px solid"
                  borderColor="brand.900"
                  bgColor="white"
                  w="40px"
                  h="40px"
                  onClick={closeDialog}
                  _hover={{
                    bgColor: "white"
                  }}
                />

            </HStack>

            <Divider/>

            <AlertDialogBody 
              color="alt.400"
              alignItems="center"
              gap="24px"
            >
              <Heading
               fontSize={[16, 16, 20]}
               fontWeight={500}
               lineHeight="30px"
               textAlign="center"
               letterSpacing="-2%"
               color="brand.300"
              >
                {dialogBody}

              </Heading>

              <VStack
               w="full"
               justify="start"
               align="start"
               gap="20px"
               py="20px"
              >
                {dialogData?.map((item, i) => (
                  <HStack
                    key={i}
                    w="full"
                    justify="space-between"
                    align="center"
                    bgColor="#e6e6e6"
                    py="10px"
                    px="20px"
                    rounded="20px"
                    gap="20px"
                    cursor="pointer"
                    onClick={() => item?.handleCopy(item?.content, item?.title)}
                  >
                    <VStack
                        w="full"
                        justify="start"
                        align="start"
                        gap="2px"
                    >
                      <Heading
                        fontSize={18}
                        fontWeight={500}
                        color="black"
                        lineHeight="25px"
                      >
                        {item?.title}
                      </Heading>

                      <Text
                        fontSize={16}
                        fontWeight={500}
                        color="brand.900"
                        lineHeight="25px"
                      >
                        {item?.content}
                      </Text>

                    </VStack>

                    <Icon 
                      as={IoCopyOutline} 
                      w={6} 
                      h={6} 
                      color="brand.900" 
                      onClick={() => item?.handleCopy(item?.content, item?.title)}
                    />
                  </HStack>
                ))}
                

              </VStack>

            </AlertDialogBody>

            <AlertDialogFooter
             gap="10px"
             flexDirection="column"
             px="40px"
            >
            
            <Button 
                bg="brand.100"
                w="full"
                variant="solid"
                color="white"
                rounded="4px"
                h="initial"
                py="20px"
                px="40px"
                _hover={{
                    bgColor: "brand.100",
                    textDecoration: "none"
                }}
                onClick={handleConfirm}
              >
                {confirmText}
              </Button>


            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
    )
  }

  export default ModalDialog