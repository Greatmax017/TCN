import { Button, Icon, IconButton } from '@chakra-ui/react'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function CtaButton({ type, url, content, handleClick }) {
  return (
    <>
     {!handleClick ?
        <Link to={url}>
            <Button
                bgColor={type === "primary" ? "brand.100" : "white"}
                color={type === "primary" ? "white" : "brand.100"}
                py="30px"
                pl="20px"
                fontSize={14}
                fontWeight={700}
                rounded="full"
                gap="4px"
                textTransform="uppercase"
                transition="all 0.5s ease-in-out"
                role="group"
                rightIcon={<IconButton 
                    icon={<Icon as={FaArrowRightLong} fontSize="24px"/>} 
                    size="24px" 
                    bgColor={type === "primary" ? "white" : "brand.100"} 
                    color={type === "primary" ? "brand.100" : "white"}
                    p="10px"
                    rounded="full"
                    _groupHover={{
                        bgColor: type === "primary" ? "brand.100" : "white",
                        color: type === "primary" ? "white" : "brand.100",
                        mx: "2px"
                    }}
                />}
                _hover={{
                    bgColor: type === "primary" ? "alt.600" : "brand.100",
                    color: type === "primary" ? "brand.100" : "white",
                }}
            >
                {content}
            </Button>
        
        </Link>

        :

        <Button
            bgColor={type === "primary" ? "brand.100" : "white"}
            color={type === "primary" ? "white" : "brand.100"}
            py="30px"
            pl="20px"
            fontSize={14}
            fontWeight={700}
            rounded="full"
            gap="4px"
            textTransform="uppercase"
            transition="all 0.5s ease-in-out"
            role="group"
            rightIcon={<IconButton 
                icon={<Icon as={FaArrowRightLong} fontSize="24px"/>} 
                size="24px" 
                bgColor={type === "primary" ? "white" : "brand.100"} 
                color={type === "primary" ? "brand.100" : "white"}
                p="10px"
                rounded="full"
                _groupHover={{
                    bgColor: type === "primary" ? "brand.100" : "white",
                    color: type === "primary" ? "white" : "brand.100",
                    mx: "2px"
                }}
            />}
            _hover={{
                bgColor: type === "primary" ? "alt.600" : "brand.100",
                color: type === "primary" ? "brand.100" : "white",
            }}
            onClick={handleClick}
        >
            {content}
        </Button>
     
    }
    </>
  )
}

export default CtaButton
