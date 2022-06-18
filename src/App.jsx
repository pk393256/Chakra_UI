import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import B from './document/button';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box direction='row' spacing={4} align='center'>
        
        <B name='Primary Button' colorScheme='teal' variant='solid' />
        <B name='Default Button' colorScheme='teal' variant='outline' />

        <B name='link' colorScheme='teal' variant='link' />
        <Button border='dashed'>Dashed</Button>
        <B name='text' colorScheme='red' variant='' />
      </Box>
    </ChakraProvider>
  );
}

export default App;
