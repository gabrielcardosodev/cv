import { Box, Button, Container, Divider, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text>The page you&apos;re trying to access could not be found.</Text>

      <Divider my={7} borderColor="gray.500" />

      <Box textAlign="center" my={6}>
        <Link href="/">
          <Button colorScheme={useColorModeValue('purple', 'orange')}>
            Return to home
          </Button>
        </Link>
      </Box>
    </Container>
  )
}