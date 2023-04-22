import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Moon, Sun } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'framer-motion'

export default function ThemeToggleButton() {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence mode='wait' initial={false} >
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: '0.2' }}
      >
        <IconButton
          mr={2}
          aria-label='toggle theme'
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={useColorModeValue(<Moon />, <Sun />)}
          onClick={toggleColorMode}
        />
      </motion.div>
    </AnimatePresence>
  )
}