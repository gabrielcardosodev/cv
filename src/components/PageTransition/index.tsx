import { motion } from 'framer-motion'
import Head from 'next/head'
import { ReactNode } from 'react'
import { GridItemStyles } from '../grid/GridItemStyles'

interface PageTransitionProps {
  children: ReactNode
  title: string
}

const variants = {
  hidden: { y: 20, x: 0, opacity: 0 },
  enter: { y: 0, x: 0, opacity: 1 },
  exit: { y: 20, x: -0, opacity: 0 }
}

export function PageTransition({ children, title }: PageTransitionProps) {
  const t = `${title} - Gabriel Cardoso`

  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: '0.4', type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {title && (
          <Head>
            <title>{t}</title>
            <meta name='twitter:title' content={t} />
            <meta name='og:title' content={t} />
          </Head>
        )}
        {children}

        <GridItemStyles />
      </>
    </motion.article>
  )
}