import { PageTransition } from "@/components/PageTransition";
import { Paragraph } from "@/components/paragraph";
import { WorkBadge } from "@/components/work/WorkBadge";
import { WorkTitle } from "@/components/work/WorkTitle";
import { Container, Link, List, ListItem } from "@chakra-ui/react";
import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { WorkImage } from "@/components/work/WorkImage";

export default function Lifevet() {
  return (
    <PageTransition title="Lifevet">
      <Container>
        <WorkTitle>
          Client App <WorkBadge>2022</WorkBadge>
        </WorkTitle>

        <Paragraph>
          App created to client access.
        </Paragraph>

        <List ml={4} my={4}>
          <ListItem>
            <WorkBadge>
              Website
            </WorkBadge>
            <Link as={NextLink} href="https://www.cliente.life.vet.br/login?redirect=/" target="_blank">
              https://www.cliente.life.vet.br
              <ExternalLinkIcon ml={2} />
            </Link>
          </ListItem>

          <ListItem>
            <WorkBadge>
              Plataform
            </WorkBadge>
            <span>Web</span>
          </ListItem>

          <ListItem>
            <WorkBadge>
              Stack
            </WorkBadge>
            <span>NextJS, Typescript, Stitches, GraphQL, Apollo, Framer Motion</span>
          </ListItem>
        </List>

        <WorkImage src="/images/lifevetThumbnail.png" alt="Todo" />
      </Container>
    </PageTransition>
  )
}