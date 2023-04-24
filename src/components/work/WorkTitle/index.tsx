import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Heading, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ReactNode } from 'react'

interface WorkTitleProps {
  children: ReactNode
}

export function WorkTitle({ children }: WorkTitleProps) {
  return (
    <Box>
      <Link as={NextLink} href="/works">
        Works
      </Link>

      <span>
        <ChevronRightIcon mx={1} />
      </span>

      <Heading as="h3" display="inline-block" mb={4} fontSize={20}>
        {children}
      </Heading>
    </Box>
  )
}