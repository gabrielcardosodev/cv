import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Moon, Sun } from '@phosphor-icons/react'

export default function ThemeToggleButton() {
  const { toggleColorMode } = useColorMode()

  return (
    <IconButton
      mr={2}
      aria-label='toggle theme'
      colorScheme={useColorModeValue('purple', 'orange')}
      icon={useColorModeValue(<Moon />, <Sun />)}
      onClick={toggleColorMode}
    />
  )
}