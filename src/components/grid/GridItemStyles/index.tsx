import { Global } from "@emotion/react";

export function GridItemStyles() {
  return (
    <Global styles={`
    .grid-item-thumbnail {
      border-radius: 12px;
    }
  `}
    />
  )
}