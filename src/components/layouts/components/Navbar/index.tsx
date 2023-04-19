import {
  Box,
  useColorModeValue,
  Container,
  Flex,
  Heading,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  IconButton
} from '@chakra-ui/react'
import Logo from './components/Logo'
import LinkItem from './components/LinkItem'
import { List } from '@phosphor-icons/react'
import NextLink from 'next/link'
import ThemeToggleButton from './components/ThemeToggleButton'

interface NavbarProps {
  path: string
}

export default function Navbar({ path, ...props }: NavbarProps) {
  return (
    <Box
      as="nav"
      position='fixed'
      w="100%"
      bg={useColorModeValue('#fffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display='flex'
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        alignItems='center'
        justifyContent='space-between'
      >
        <Flex alignItems='center' mr={5}>
          <Heading
            as='h1'
            size='lg'
            letterSpacing='tighter'
          >
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          mt={{ base: 4, md: 0 }}
          alignItems='center'
          flexGrow={1}
        >
          <LinkItem href='/works' path={path}>
            Works
          </LinkItem>

          <LinkItem href='/contact' path={path}>
            Contact
          </LinkItem>
        </Stack>

        <Box flex={1} textAlign="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton as={IconButton} icon={<List weight='thin' />} aria-label="options" />

              <MenuList>
                <Link as={NextLink} href='/' passHref>
                  <MenuItem>About</MenuItem>
                </Link>

                <Link as={NextLink} href='/works' passHref>
                  <MenuItem>Works</MenuItem>
                </Link>

                <Link as={NextLink} href='/contact' passHref>
                  <MenuItem>Contact</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}