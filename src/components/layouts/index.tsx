import Head from "next/head";
import { ReactNode } from "react";
import { Navbar } from "./components/Navbar";
import { Box, Container } from '@chakra-ui/react'
import { useRouter } from "next/router";

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { asPath } = useRouter()

  return (
    <Box as="main" pb={8}>
      <Navbar path={asPath} />

      <Container maxW={"container.md"} pt={14}>
        {children}
      </Container>
    </Box>
  )
}