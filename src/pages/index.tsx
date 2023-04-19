import { Container, Box, Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container>
      <Box borderRadius='lg' bg="red" p={3} mb={6} textAlign="center">
        Hello, I&apos;m a frontend developer based in Brazil!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading variant="page-title">
            Gabriel Cardoso
          </Heading>

          <p>Frontend Developer</p>
        </Box>
      </Box>
    </Container >
  )
}
