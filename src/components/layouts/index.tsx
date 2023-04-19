import Head from "next/head";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import { Box, Container } from '@chakra-ui/react'
import { useRouter } from "next/router";

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { asPath } = useRouter()

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Gabriel Cardoso - Homepage</title>
      </Head>

      <Navbar path={asPath} />

      <Container maxW={"container.md"} pt={14}>
        {children}
      </Container>
    </Box>
  )
}