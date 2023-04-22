import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react"
import Image, { StaticImageData } from "next/image"
import { ReactNode } from "react"

interface GridItemProps {
  children: ReactNode
  href: string
  title: string
  thumbnail: StaticImageData
}

export function GridItem({ children, href, title, thumbnail }: GridItemProps) {
  return (
    <Box w="100%" textAlign='center'>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />

        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>
            {title}
          </Text>
        </LinkOverlay>

        <Text fontSize={14}>
          {children}
        </Text>
      </LinkBox>
    </Box>
  )
}