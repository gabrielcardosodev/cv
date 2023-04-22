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
  Link: {
    baseStyle: (props: any) => ({
      color: mode('#805AD5', '#F8D38D')(props),
      textUnderlineOffset: 3
    })
  }
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({ config, styles, colors, fonts, components })

export default theme