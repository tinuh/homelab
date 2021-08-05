import './style.css';
import Particles from "./particles";
import { Heading, Box, Flex, Image, Wrap, WrapItem, chakra} from '@chakra-ui/react';
import data from "./data/data.json";

function App() {

  const styles = {
    particles: {
      fontFamily: "sans-serif",
      background: "#000000",
    }
  }


  return (
    <div className="App">

        {/* Particles for the Background*/}
        <div className = "particles-js" style = {styles.particles}>
          <Particles/>
        </div>

        <div className = "content">
          <Heading className = "title" as="h1">HomeLab Dashboard</Heading>

          <Wrap justify="center">
          {data.map(({name, img, to}) => 
            <a key = {name} href = {to} target = "blank">
              <WrapItem>
                <Flex
                  p={50}
                  w="full"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box
                    maxW="xs"
                    mx="auto"
                    bg="white"
                    shadow="lg"
                    rounded="lg"
                  >
                    <Box px={4} py={2}>
                      <chakra.h2
                        color="#1A202C"
                        fontWeight="bold"
                        fontSize="2xl"
                        textAlign = "center"
                      >
                        {name}
                      </chakra.h2>

                      <Image
                        h={48}
                        w={48}
                        fit="contain"
                        p={5}
                        src={img}
                        alt={name}
                      />
                    </Box>

                  </Box>
                </Flex>
              </WrapItem>
            </a>
          )}
          </Wrap>
        
        </div>
        
    </div>
  );
}

export default App;
