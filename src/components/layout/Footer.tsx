import React from 'react';
import { Box, Text, Center } from '@chakra-ui/react';

const Footer: React.FC = () => {
   return (
      <Box background="gray.800" padding={4} color="white">
         <Center>
            <Text>&copy; 2025</Text>
         </Center>
      </Box>
   );
};

export default Footer;