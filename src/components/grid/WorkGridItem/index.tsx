import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

interface WorkGridItemProps {
  children: ReactNode
  id: string
  title: string
  thumbnail: StaticImageData
}

export function WorkGridItem({ children, id, title, thumbnail }: WorkGridItemProps) {
  return (
    <Box w="100%" textAlign="center">
      <Link href={`/works/${id}`}>
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
          />

          <LinkOverlay href={`/works/${id}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>

          <Text fontSize={14}>
            {children}
          </Text>
        </LinkBox>
      </Link>
    </Box>
  )
}