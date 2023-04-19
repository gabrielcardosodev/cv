import { Fonts } from '@/components/Fonts'
import Layout from '@/components/layouts'
import theme from '@/lib/theme'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
