import React, { PropsWithChildren } from 'react'
import { Flex } from '@chakra-ui/react';
import Navbar from './Navbar'
import Body from './Body';
import Footer from './Footer';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
   return (
      <Flex direction="column" minHeight="100vh">
         <Navbar />
         <Body>
            {children}
         </Body>
         <Footer />
      </Flex>
   )
}

export default Layout