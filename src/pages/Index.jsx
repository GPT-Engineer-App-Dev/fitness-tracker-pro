import { Box, Container, Flex, Heading, Text, VStack, HStack, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">Fitness Tracker</Heading>
        <HStack spacing={8}>
          <Link as={NavLink} to="/" exact _activeLink={{ color: "yellow.400" }}>Home</Link>
          <Link as={NavLink} to="/workouts" _activeLink={{ color: "yellow.400" }}>Workouts</Link>
          <Link as={NavLink} to="/nutrition" _activeLink={{ color: "yellow.400" }}>Nutrition</Link>
          <Link as={NavLink} to="/profile" _activeLink={{ color: "yellow.400" }}>Profile</Link>
        </HStack>
      </Flex>
      <VStack spacing={8} p={8} alignItems="flex-start">
        <Box w="full" p={4} bg="gray.100" borderRadius="md">
          <Heading size="lg" mb={4}>Daily Activity Summary</Heading>
          <Text>Steps: 10,000</Text>
          <Text>Calories Burned: 500</Text>
          <Text>Active Minutes: 60</Text>
        </Box>
        <Box w="full" p={4} bg="gray.100" borderRadius="md">
          <Heading size="lg" mb={4}>Recent Workouts</Heading>
          <Text>Workout 1: Running - 30 mins</Text>
          <Text>Workout 2: Cycling - 45 mins</Text>
        </Box>
        <Box w="full" p={4} bg="gray.100" borderRadius="md">
          <Heading size="lg" mb={4}>Nutrition Summary</Heading>
          <Text>Calories Consumed: 2000</Text>
          <Text>Protein: 150g</Text>
          <Text>Carbs: 250g</Text>
          <Text>Fats: 70g</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;