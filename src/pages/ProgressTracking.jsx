import { Box, Container, Flex, Heading, Text, VStack, HStack, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const ProgressTracking = () => {
  // Sample data
  const totalWorkouts = 20;
  const totalDuration = 600; // in minutes
  const caloriesBurned = 5000;

  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">Fitness Tracker</Heading>
        <HStack spacing={8}>
          <Link as={NavLink} to="/" exact _activeLink={{ color: "yellow.400" }}>Home</Link>
          <Link as={NavLink} to="/workouts" _activeLink={{ color: "yellow.400" }}>Workouts</Link>
          <Link as={NavLink} to="/nutrition" _activeLink={{ color: "yellow.400" }}>Nutrition</Link>
          <Link as={NavLink} to="/profile" _activeLink={{ color: "yellow.400" }}>Profile</Link>
          <Link as={NavLink} to="/progress" _activeLink={{ color: "yellow.400" }}>Progress</Link>
        </HStack>
      </Flex>
      <VStack spacing={8} p={8} alignItems="flex-start">
        <Box w="full" p={4} bg="gray.100" borderRadius="md">
          <Heading size="lg" mb={4}>Progress Tracking</Heading>
          <Text>Total Workouts: {totalWorkouts}</Text>
          <Text>Total Duration: {totalDuration} minutes</Text>
          <Text>Calories Burned: {caloriesBurned}</Text>
        </Box>
        <Box w="full" p={4} bg="gray.100" borderRadius="md">
          <Heading size="lg" mb={4}>Progress Chart</Heading>
          {/* Placeholder for chart */}
          <svg width="100%" height="200">
            <rect x="10" y="10" width="50" height="180" fill="blue" />
            <rect x="70" y="50" width="50" height="140" fill="green" />
            <rect x="130" y="30" width="50" height="160" fill="red" />
          </svg>
        </Box>
      </VStack>
    </Container>
  );
};

export default ProgressTracking;