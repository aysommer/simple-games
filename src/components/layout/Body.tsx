import React, { PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';

const Body: React.FC<PropsWithChildren> = ({ children }) => {
   return <Box padding={4} flexGrow={1}>{children}</Box>;
};

export default Body;