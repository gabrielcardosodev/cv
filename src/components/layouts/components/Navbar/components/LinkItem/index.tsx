import NextLink from 'next/link'
import { ReactNode } from 'react'
import { Link, useColorModeValue } from '@chakra-ui/react'

interface LinkItemProps {
  href: string
  path: string
  children: ReactNode
}

export default function LinkItem({ href, path, children }: LinkItemProps) {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  const activeColor = useColorModeValue('purple.500', 'orange.200')

  return (
    <NextLink href={href}>
      <Link
        as="div"
        p={2}
        bg={active ? activeColor : undefined}
        color={active ? '#202023' : inactiveColor}>
        {children}
      </Link>
    </NextLink>
  )
}