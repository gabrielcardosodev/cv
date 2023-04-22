import Head from "next/head";
import { ReactNode } from "react";
import { Navbar } from "./components/Navbar";
import { Box, Container } from '@chakra-ui/react'
import { useRouter } from "next/router";

import illustrationImg from '../../../public/images/technologies.svg'
import Image from "next/image";

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { asPath } = useRouter()

  return (
    <Box as="main" pb={8}>
      <Navbar path={asPath} />

      <Container maxW={"container.md"} pt={14}>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          w="100%"
        >
          <Image
            src={illustrationImg}
            width={400}
            height={400}
            alt="illustration of a man using a computer "
          />
        </Box>

        {children}
      </Container>
    </Box>
  )
}