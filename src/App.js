import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Container,
} from '@chakra-ui/react';
import Navbar from './Navbar';
import Preloading from './components/Preloading';
import Home from './Home.js';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Preloading/>
      <Box textAlign="center" fontSize="xl">
        <Container>
          <Navbar />
          <Home />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
