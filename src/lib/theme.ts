import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

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

const fonts = {
  heading: "'M Plus Rounded 1c'"
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

// 3. extend the theme
const theme = extendTheme({ config, styles, colors, fonts, components })

export default theme