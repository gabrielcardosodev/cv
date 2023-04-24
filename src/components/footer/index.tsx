import { Box } from '@chakra-ui/react'

export function Footer() {
  return (
    <Box textAlign="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Gabriel Cardoso. All Rights Reserved.
    </Box>
  )
}