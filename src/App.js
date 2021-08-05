import './style.css';
import Particles from "./particles";
import { Heading, Box, Flex, Image, chakra} from '@chakra-ui/react';
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

          <Flex>
          {data.map(({name, img, to}) => 
            <a href = {to} target = "blank">
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
                    <chakra.h1
                      color="#1A202C"
                      fontWeight="bold"
                      fontSize="3xl"
                      textAlign = "center"
                    >
                      {name}
                    </chakra.h1>

                    <Image
                      h={64}
                      w={64}
                      fit="contain"
                      p={5}
                      src={img}
                      alt="Nextcloud"
                    />
                  </Box>

                </Box>
              </Flex>
            </a>
          )}
          </Flex>
        
        </div>
        
    </div>
  );
}

export default App;
