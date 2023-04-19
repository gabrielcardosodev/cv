import { AppWindow } from "@phosphor-icons/react";
import Link from "next/link";
import { Text, useColorModeValue } from '@chakra-ui/react'
import { M_PLUS_Rounded_1c } from 'next/font/google'

import styled from '@emotion/styled'

const mPlusRounded1c = M_PLUS_Rounded_1c({ weight: '700', adjustFontFallback: false, subsets: ['latin'] })

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;
`

export default function Logo() {
  return (
    <Link href="/">
      <LogoBox>
        <AppWindow size={20} weight="thin" />
        <Text
          style={mPlusRounded1c.style}
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontWeight="bold"
          ml={2}>
          Gabriel Cardoso
        </Text>
      </LogoBox>
    </Link>
  )
}