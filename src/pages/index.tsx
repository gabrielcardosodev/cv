import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { Section } from '@/components/section'
import { Paragraph } from '@/components/paragraph'
import { CaretRight, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { BioYear, SectionBio } from '@/components/bio'
import { PageTransition } from '@/components/PageTransition'

export default function Home() {
  return (
    <PageTransition title="Home">
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mt={2}
          mb={6}
          textAlign="center"
        >
          Hello, I&apos;m a frontend developer based in Rio de Janeiro!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading>Gabriel Cardoso</Heading>

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
              display="inline-block"
              borderRadius="full"
              src="/images/gabriel.jpg"
              alt="my profile image"
            />
          </Box>
        </Box>

        <Section delay="0.1">
          <Box>
            <Heading variant="section-title">Intro</Heading>

            <Paragraph>
              Hello! My name is Gabriel, i&apos;m 24 years old and i&apos;m a
              front-end developer based in Rio de Janeiro with a passion for
              building digital stuff.
            </Paragraph>
          </Box>

          <Box textAlign="center" my={4}>
            <NextLink href="/works">
              <Button
                rightIcon={<CaretRight />}
                colorScheme={useColorModeValue('purple', 'orange')}
              >
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay="0.1">
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

        <Section delay="0.1">
          <Heading variant="section-title">I love</Heading>

          <Paragraph>
            Music, Anime, Manga, Films, League Of Legends, My dog Apolo, Study
          </Paragraph>
        </Section>

        <Section delay="0.3">
          <Heading variant="section-title">On the web</Heading>

          <List>
            <ListItem>
              <Link
                as={NextLink}
                href="https://github.com/gabrielcardosodev"
                target="_blank"
              >
                <Button
                  colorScheme={useColorModeValue('purple', 'orange')}
                  variant="ghost"
                  leftIcon={<Icon as={GithubLogo} />}
                >
                  @gabrielcardosodev
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                as={NextLink}
                href="https://www.linkedin.com/in/gabrielcardosodev/"
                target="_blank"
              >
                <Button
                  colorScheme={useColorModeValue('purple', 'orange')}
                  variant="ghost"
                  leftIcon={<Icon as={LinkedinLogo} />}
                >
                  @gabrielcardosodev
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </PageTransition>
  )
}
