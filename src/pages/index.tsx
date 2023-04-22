import { Container, Box, Heading, Image, useColorModeValue, Link, Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Section } from '@/components/section'
import { Paragraph } from '@/components/paragraph'
import { CaretRight } from '@phosphor-icons/react'
import { BioYear, SectionBio } from '@/components/bio'
import Head from 'next/head'

export default function Home() {
  return (
    <Container>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Gabriel Cardoso - Homepage</title>
      </Head>

      <Box
        borderRadius='lg'
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mt={2}
        mb={6}
        textAlign="center"
      >
        Hello, I&apos;m a frontend developer based in Rio de Janeiro!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading>
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

      <Section delay='0.1'>
        <Box>
          <Heading variant="section-title">
            Work
          </Heading>

          <Paragraph>Gabriel is a front-end developer based in Rio de Janeiro with a passion for building digital stuff he wants. He currently works as a front-end developer at {' '}
            <Link fontWeight='bold' href='/works/lifevet' as={NextLink}>
              LifeVet
            </Link>
            .
          </Paragraph>
        </Box>

        <Box textAlign="center" my={4}>
          <NextLink href='/works'>
            <Button rightIcon={<CaretRight />} colorScheme={useColorModeValue('purple', 'orange')}>
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay='0.1'>
        <Heading variant="section-title">Bio</Heading>

        <SectionBio>
          <BioYear>1999</BioYear>
          Born in Rio de Janeiro, Brazil.
        </SectionBio>

        <SectionBio>
          <BioYear>2021</BioYear>
          Joined Rocketseat programming school to study ReactJS.
        </SectionBio>

        <SectionBio>
          <BioYear>2022 to present</BioYear>
          Works as front-end developer at LifeVet.
        </SectionBio>
      </Section>

      <Section delay='0.1'>
        <Heading variant="section-title">I love</Heading>

        <Paragraph>
          Music, Anime, Manga, Films, League Of Legends, My dog Apolo, Study
        </Paragraph>
      </Section>
    </Container >
  )
}
