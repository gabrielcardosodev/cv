import Fonts from '../components/fonts'
import Layout from '@/components/layouts'
import theme from '@/lib/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}
