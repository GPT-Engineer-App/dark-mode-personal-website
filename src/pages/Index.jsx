import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ChakraProvider, Box, Flex, Heading, IconButton, useColorMode, VStack, Text, Container, Image, SimpleGrid } from "@chakra-ui/react";
import { FaMoon, FaSun, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => (
  <Container centerContent>
    <VStack spacing={4}>
      <Heading>Welcome to My Personal Website</Heading>
      <Text>This is the home page. Navigate using the links above.</Text>
    </VStack>
  </Container>
);

const Projects = () => (
  <Container centerContent>
    <VStack spacing={4}>
      <Heading>Projects</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
          <Image src="https://images.unsplash.com/photo-1543285198-3af15c4592ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwMXxlbnwwfHx8fDE3MTYzMTU1MjV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 1" />
          <Heading size="md" mt={4}>
            Project 1
          </Heading>
          <Text mt={2}>Description of project 1.</Text>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
          <Image src="https://images.unsplash.com/photo-1615220367990-1940567341f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwMnxlbnwwfHx8fDE3MTYzMTU1MjV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 2" />
          <Heading size="md" mt={4}>
            Project 2
          </Heading>
          <Text mt={2}>Description of project 2.</Text>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
          <Image src="https://images.unsplash.com/photo-1629739884942-8678d138dd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwM3xlbnwwfHx8fDE3MTYzMTU1MjV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 3" />
          <Heading size="md" mt={4}>
            Project 3
          </Heading>
          <Text mt={2}>Description of project 3.</Text>
        </Box>
      </SimpleGrid>
    </VStack>
  </Container>
);

const About = () => (
  <Container centerContent>
    <VStack spacing={4}>
      <Heading>About Me</Heading>
      <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1712847331925-bf0e3fd2b7ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3MTYzMTUzNjd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Portrait" />
      <Text mt={4}>Hi, I'm [Your Name], a passionate developer with experience in React and Chakra UI.</Text>
    </VStack>
  </Container>
);

const Contact = () => (
  <Container centerContent>
    <VStack spacing={4}>
      <Heading>Contact</Heading>
      <Text>You can reach me via the following platforms:</Text>
      <Flex>
        <IconButton as="a" href="https://github.com" aria-label="GitHub" icon={<FaGithub />} size="lg" m={2} />
        <IconButton as="a" href="https://linkedin.com" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" m={2} />
        <IconButton as="a" href="mailto:your-email@example.com" aria-label="Email" icon={<FaEnvelope />} size="lg" m={2} />
      </Flex>
    </VStack>
  </Container>
);

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex as="nav" p={4} bg="teal.500" color="white" justifyContent="space-between" alignItems="center">
      <Heading size="md">My Website</Heading>
      <Flex>
        <Link to="/" style={{ margin: "0 10px" }}>
          Home
        </Link>
        <Link to="/projects" style={{ margin: "0 10px" }}>
          Projects
        </Link>
        <Link to="/about" style={{ margin: "0 10px" }}>
          About
        </Link>
        <Link to="/contact" style={{ margin: "0 10px" }}>
          Contact
        </Link>
        <IconButton aria-label="Toggle Dark Mode" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} ml={4} />
      </Flex>
    </Flex>
  );
};

const App = () => (
  <ChakraProvider>
    <Router>
      <Navbar />
      <Box p={4}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </Router>
  </ChakraProvider>
);

export default App;
