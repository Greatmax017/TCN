import { VStack } from '@chakra-ui/react'
import React from 'react'

function ContainerLayout({ children }) {
  return (
    <VStack
        w={["full", "full", "full", "90%"]}
        p={["20px", "20px", "20px", "initial"]}
        mx={["initial", "initial", "initial", "auto"]}
        justify="start"
        align="start"
    >
        {children}
    </VStack>
  )
}

export default ContainerLayout
