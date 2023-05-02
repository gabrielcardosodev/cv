import { Box, LinkBox, LinkOverlay, Text, Image } from "@chakra-ui/react"
import NextLink from "next/link"
import { ReactNode } from "react"

interface WorkGridItemProps {
  children: ReactNode
  id: string
  title: string
  thumbnail: string
}

export function WorkGridItem({ children, id, title, thumbnail }: WorkGridItemProps) {
  return (
    <Box w="100%" textAlign="center">
      <LinkBox
        as={NextLink}
        href={`/works/${id}`}
        cursor="pointer"
        scroll={false}
      >
        <Image
          alt={title}
          src={thumbnail}
          className="grid-item-thumbnail"
        />

        <LinkOverlay as="div" href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
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