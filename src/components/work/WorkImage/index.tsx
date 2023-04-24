import { Image } from "@chakra-ui/react";

interface WorkImageProps {
  src: string
  alt: string
}

export function WorkImage({ src, alt }: WorkImageProps) {
  return (
    <Image borderRadius="lg" w="full" mb={4} src={src} alt={alt} />
  )
}