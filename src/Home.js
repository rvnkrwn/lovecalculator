import { Box, Text, Input, Button, color, Container } from '@chakra-ui/react';
import { useState } from 'react';
import Sender from './Sender';
import './Home.css';
import swal from 'sweetalert';

function Home() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState(0);
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  };
  if (clicked === true) {
    const tombol = document.querySelector('.submit');

    tombol.disabled = true;
  }
  const calculator = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setResult(number.toString());
  };

  const message = () => {
		if ( result === 0) {
			return 'Please enter your name';
		}
    else if ( result <= 25) {
      return 'hmm, not quite right';
    } else if (result < 80) {
      return 'wow, you suit him';
    } else {
      return 'damn, you really suit him';
    }
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
								swal("Oops!", "Please enter your name!", "error");
              } else if (name2 === '') {
								swal("Oops!", "Please enter your partner name!", "error");
              } else {
                calculator();
                handleClick();
                Sender(name1, name2);
              }
            }}
          >
            Submit
          </Button>
        </Box>
        <Box height={'200px'}>
          <Text className="result">{(result === 0)? "" : result}</Text>
          <Text className='message' textTransform={"uppercase"}>{(result === 0) ? `` : message()}</Text>
        </Box>
        <Box>
          <Text fontSize={'small'}>
            Want to try again?{' '}
            <span
              style={{ color: 'blueviolet', cursor:"pointer" }}
              onClick={() => window.location.reload(true)}
            >
              here
            </span>
          </Text>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
