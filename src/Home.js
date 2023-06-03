import { Box, Text, Input, Button, color, Container } from '@chakra-ui/react';
import { useState } from 'react';
import Sender from './Sender';

function Home() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const calculator = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setResult(number.toString());
  };
  return (
    <Container maxW={'sm'}>
      <Box>
        <Text color={'red.500'} fontWeight={'bold'} letterSpacing={1}>
          LOVE CALCULATOR
        </Text>
        <Box className="" padding={'2rem'}>
          <Input
            type="text"
            value={name1}
            placeholder="Enter your name"
            onChange={e => setName1(e.target.value)}
          />
          <Text fontSize={'50px'}>❤️</Text>
          <Input
            type="text"
            value={name2}
            placeholder="Enter your partner name"
            onChange={e => setName2(e.target.value)}
          />
          <br />
          <br />
          <Button
            className="submit"
            shadow={'2px 3px 1px'}
            onClick={() => {
              if (name1 === '') {
                alert('Please enter your name');
              } else if (name2 === '') {
                alert('Please enter your partner name');
              } else {
                calculator();
                Sender(name1, name2);
              }
            }}
          >
            Submit
          </Button>
        </Box>
        <Box>
          <Text>{result}</Text>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
