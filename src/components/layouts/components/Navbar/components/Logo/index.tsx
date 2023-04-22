import { AppWindow } from "@phosphor-icons/react";
import Link from "next/link";
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;
`

export function Logo() {
  return (
    <Link href="/">
      <LogoBox>
        <AppWindow size={20} weight="thin" />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="M Plus Rounded 1c"
          fontWeight="bold"
          ml={2}>
          Gabriel Cardoso
        </Text>
      </LogoBox>
    </Link>
  )
}