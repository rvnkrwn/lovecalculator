import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  theme,
  Container,
  Link,
} from '@chakra-ui/react';
import Navbar from './Navbar';
import Preloading from './components/Preloading';
import Home from './Home.js';

function App() {
  const Year = new Date().getFullYear();
  return (
    <ChakraProvider theme={theme}>
      <Preloading/>
      <Box textAlign="center" fontSize="xl">
        <Container>
          <Navbar />
          <Home />
          <footer>
          <Box padding={2} backgroundColor={"whiteAlpha.200"} marginTop={2}>
            <Text fontSize={14}>Copyright © {Year}</Text>
            <Text fontSize={12}>Build with ❤️ by <Link target='_blank' href="https://www.linkedin.com/in/rvnkrwn">rvnkrwn</Link></Text>
          </Box>
            
          </footer>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
