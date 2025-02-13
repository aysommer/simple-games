import { Box, Flex, Heading, Link as ChakraLink } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

{/* <ChakraLink asChild>
      <NextLink href="/about">Click here</NextLink>
    </ChakraLink> */}

const Navbar: React.FC = () => {
   return (
      <Box background="gray.800" padding={4}>
         <Flex justifyContent="space-between" alignItems="center">
            <Heading size="lg" color="white">
               simple games
            </Heading>
            <Flex>
               <ChakraLink color="white" marginRight={4} asChild>
                  <RouterLink to="/" >
                     Home
                  </RouterLink>
               </ChakraLink>
               <ChakraLink color="white" asChild>
                  <RouterLink to="/about" >
                     About
                  </RouterLink>
               </ChakraLink>
            </Flex>
         </Flex>
      </Box>
   );
};

export default Navbar;