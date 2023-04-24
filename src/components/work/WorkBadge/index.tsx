import { Badge, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface WorkBadgeProps {
  children: ReactNode
}

export function WorkBadge({ children }: WorkBadgeProps) {
  return (
    <Badge mr={2} colorScheme={useColorModeValue('purple', 'orange')}>
      {children}
    </Badge>
  )
}