import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container>
      <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mt={2} mb={6} textAlign="center">
        Hello, I&apos;m a frontend developer based in Brazil!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading variant="page-title">
            Gabriel Cardoso
          </Heading>

          <p>Frontend Developer</p>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxW="100px"
            display='inline-block'
            borderRadius="full"
            src='/images/gabriel.jpg'
            alt='my profile image'
          />
        </Box>
      </Box>
    </Container >
  )
}
