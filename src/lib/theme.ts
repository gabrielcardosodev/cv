// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// 2. Add your color mode config
const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const colors = {
  grassTeal: '#88ccca'
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

// 3. extend the theme
const theme = extendTheme({ config, styles, colors })

export default theme