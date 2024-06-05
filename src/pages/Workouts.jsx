import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Select, Textarea, VStack } from "@chakra-ui/react";

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [form, setForm] = useState({
    type: "",
    duration: "",
    date: "",
    notes: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWorkouts([...workouts, form]);
    setForm({ type: "", duration: "", date: "", notes: "" });
  };

  return (
    <Container maxW="container.md" p={4}>
      <Heading mb={6}>Log a Workout</Heading>
      <Box as="form" onSubmit={handleSubmit} mb={8}>
        <VStack spacing={4}>
          <FormControl id="type" isRequired>
            <FormLabel>Workout Type</FormLabel>
            <Select name="type" value={form.type} onChange={handleChange}>
              <option value="">Select type</option>
              <option value="Running">Running</option>
              <option value="Cycling">Cycling</option>
              <option value="Weightlifting">Weightlifting</option>
              <option value="Swimming">Swimming</option>
            </Select>
          </FormControl>
          <FormControl id="duration" isRequired>
            <FormLabel>Duration (minutes)</FormLabel>
            <Input type="number" name="duration" value={form.duration} onChange={handleChange} />
          </FormControl>
          <FormControl id="date" isRequired>
            <FormLabel>Date and Time</FormLabel>
            <Input type="datetime-local" name="date" value={form.date} onChange={handleChange} />
          </FormControl>
          <FormControl id="notes">
            <FormLabel>Additional Notes</FormLabel>
            <Textarea name="notes" value={form.notes} onChange={handleChange} />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">Log Workout</Button>
        </VStack>
      </Box>
      <Heading mb={4}>Logged Workouts</Heading>
      <VStack spacing={4} align="stretch">
        {workouts.map((workout, index) => (
          <Box key={index} p={4} bg="gray.100" borderRadius="md">
            <Flex justify="space-between">
              <Box>
                <Heading size="md">{workout.type}</Heading>
                <Text>Duration: {workout.duration} minutes</Text>
                <Text>Date: {new Date(workout.date).toLocaleString()}</Text>
                {workout.notes && <Text>Notes: {workout.notes}</Text>}
              </Box>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Workouts;