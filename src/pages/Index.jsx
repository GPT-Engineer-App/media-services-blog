import React from "react";
import NavBar from "../components/NavBar.jsx";
import { Box, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Button, useColorMode, IconButton, Stack } from "@chakra-ui/react";
import { FaSun, FaMoon, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const ArticleCard = ({ title, excerpt, imageUrl }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="sm" p={4} _hover={{ boxShadow: "md" }}>
    <Image borderRadius="md" src={imageUrl} alt={title} />
    <Heading as="h3" size="md" mt={2}>
      {title}
    </Heading>
    <Text mt={2} noOfLines={3}>
      {excerpt}
    </Text>
    <Button mt={4} colorScheme="blue">
      Read More
    </Button>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Flex justifyContent="space-between" alignItems="center" mb={8}>
        <Heading as="h1" size="xl">
          Wilson Media Services
        </Heading>
        <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} variant="ghost" />
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} mb={10}>
        <ArticleCard title="Breaking News: Market Update" excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." imageUrl="https://images.unsplash.com/photo-1495020689067-958852a7765e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXdzfGVufDB8fHx8MTcwOTg5OTQ2OHww&ixlib=rb-4.0.3&q=80&w=1080" />
        <ArticleCard title="Tech Giants Merge" excerpt="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." imageUrl="https://images.unsplash.com/photo-1671726203454-5d7a5370a9f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5fGVufDB8fHx8MTcwOTg5OTQ2OHww&ixlib=rb-4.0.3&q=80&w=1080" />
        <ArticleCard title="New Discovery in Science" excerpt="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos." imageUrl="https://images.unsplash.com/photo-1581789690427-d3d69edef8f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZGlzY292ZXJ5fGVufDB8fHx8MTcwOTg5OTQ2OXww&ixlib=rb-4.0.3&q=80&w=1080" />
      </SimpleGrid>

      <VStack spacing={4} alignItems="flex-start" mb={10}>
        <Heading as="h2" size="md">
          About Us
        </Heading>
        <Text>Wilson Media Services is your go-to source for the latest news in business, technology, and science. We provide in-depth analysis and up-to-date information to keep you informed.</Text>
      </VStack>

      <Stack direction="row" justifyContent="center" spacing={6}>
        <IconButton icon={<FaTwitter />} isRound colorScheme="twitter" aria-label="Twitter" />
        <IconButton icon={<FaFacebookF />} isRound colorScheme="facebook" aria-label="Facebook" />
        <IconButton icon={<FaInstagram />} isRound colorScheme="pink" aria-label="Instagram" />
      </Stack>
    </Container>
  );
};

export default Index;
