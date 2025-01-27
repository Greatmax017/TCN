import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
  Flex,
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
  Link,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaArrowRightLong } from "react-icons/fa6";



function ContactForm() {


    const { 
        handleSubmit, 
        register, 
        formState: { errors, isSubmitting }, 
        getValues,
        reset, 
     } = useForm();
    

    
      const inputs = [
        {
          type: "text",
          element: "input",
          name: "fullname",
          label: "Name",
          placeholder: "Enter Name",
          validation: {
            required: 'Name is required',
            validate: value => value.trim() !== '' || 'Name cannot be empty'
          },
        },
    
        {
          type: "email",
          element: "input",
          name: "email",
          label: "Email",
          placeholder: "Email Address",
          validation: {
            required: 'Email is required',
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: 'Invalid email address',
            },
            validate: value => value.trim() !== '' || 'Email cannot be empty'
          },
        },
    
    
        {
          type: "text",
          element: "input",
          name: "phone",
          label: "Phone",
          placeholder: "Enter Phone",
          validation: {
            required: 'Phone is required',
            validate: value => value.trim() !== '' || 'Phone cannot be empty'
          },
        },

        {
          element: 'select',
          type: "text",
          name: "purpose",
          label: "Purpose",
          placeholder: "What do you need",
          validation: {
            required: "Purpose is required",
            validate: value => value.trim() !== '' || 'Purpose cannot be empty'
          },
          options: [
            "Service Inquiries",
            "Giving",
            "Others",
          ]
        },
    
        {
          type: "text",
          element: "textarea",
          colSpan: 2,
          name: "message",
          label: "Your Message",
          placeholder: "Enter Message",
          validation: {
            required: 'Message is required',
            validate: value => value.trim() !== '' || 'Message cannot be empty'
          },
        },
    
      ];

      const handleSendContactForm = (data) => {
        console.log(data);
      }
    

  return (
    <VStack
        w="full"
        justify="start"
        align="start"
        gap="20px"
        bgColor="white"
        py="40px"
        px="25px"
        rounded="20px"
        boxShadow="0 0 8px rgba(0,0,0,0.3)"
    >
             <form
                  onSubmit={handleSubmit(handleSendContactForm)} 
                  style={{ width: "100%" }}
                  method="post"
              >
                <SimpleGrid
                 w="full"
                 columns={[1, 1, 2]}
                 gap="10px"
                >
                  {inputs.map((input, i) => (
                    <FormControl 
                        key={i} 
                        id={input.name} 
                        isInvalid={errors[input.name]} 
                        mb={4}
                        gridColumn={input.colSpan == 2 ? ["span 1", "span 1", "span 2"] : ["span 1"]}
                      >

                      <FormLabel color="alt.200" fontWeight={500}>
                        {input.label}
                      </FormLabel>

                      {input.element === "input" && (
                        <Input
                          fontSize={{ base: "16px", lg: "18px" }}
                          placeholder={input.placeholder}
                          type={input.type}
                          h={{ base: "45px", lg: "55px" }}
                          rounded="full"
                          _focus={{ boxShadow: "none", borderColor: "brand.700" }}
                          {...register(input.name, input.validation)}
                        />
                      )}
                      {input.element === "select" && (
                        <Select
                          placeholder="Select purpose"
                          fontSize={{ base: "16px", lg: "18px" }}
                          rounded="full"
                          h={{ base: "45px", lg: "55px" }}
                          _focus={{ boxShadow: "none", borderColor: "brand.700" }}
                          {...register(input.name, input.validation)}
                        >
                          {input.options.map((option, idx) => (
                            <option value={option} key={idx}>
                              {option}
                            </option>
                          ))}
                        </Select>
                      )}


                      {input.element === "textarea" && (
                        <Textarea
                          placeholder={input.placeholder}
                          rows={8}
                          rounded="30px" 
                          {...register(input.name, input.validation)}
                        />
                      )}


                      <FormErrorMessage>
                        {errors[input.name] && errors[input.name].message}
                      </FormErrorMessage>

                    </FormControl>
                  ))}

                </SimpleGrid>

                <VStack
                 w="full"
                 justify="end"
                 align="end"
                >
                  <Button
                    type="submit"
                    // w="full"
                    bg="brand.100"
                    color="white"
                    _hover={{ bg: "alt.500", color: "brand.100" }}
                    size="lg"
                    fontSize="15px"
                    fontWeight="500"
                    rounded="full"
                    h="initial"
                    py="20px"
                    px="30px"
                    isDisabled={isSubmitting}
                    isLoading={isSubmitting}
                    onClick={handleSubmit(handleSendContactForm)}
                    rightIcon={<Icon as={FaArrowRightLong} size="24px"/>}
                  >
                    Submit Now
                  </Button>

                </VStack>

              </form>

    </VStack>
  )
}

export default ContactForm
