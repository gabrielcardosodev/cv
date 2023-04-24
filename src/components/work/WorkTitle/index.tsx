import { Box, Heading, Link } from '@chakra-ui/react'
import { CaretRight } from '@phosphor-icons/react'
import NextLink from 'next/link'
import { ReactNode } from 'react'

interface WorkTitleProps {
  children: ReactNode
}

export function WorkTitle({ children }: WorkTitleProps) {
  <Box>
    <NextLink href="/works">
      <Link>Works</Link>
    </NextLink>

    <span>
      &nbsp;
      <CaretRight />
      &nbsp;
    </span>

    <Heading as="h3" display="inline-block" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
}