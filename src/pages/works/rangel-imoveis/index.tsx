import { PageTransition } from "@/components/PageTransition";
import { Paragraph } from "@/components/paragraph";
import { WorkBadge } from "@/components/work/WorkBadge";
import { WorkTitle } from "@/components/work/WorkTitle";
import { Container, Link, List, ListItem } from "@chakra-ui/react";
import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { WorkImage } from "@/components/work/WorkImage";

export default function Rangel() {
  return (
    <PageTransition title="Lifevet">
      <Container>
        <WorkTitle>
          Rangel Imóveis <WorkBadge>2022</WorkBadge>
        </WorkTitle>

        <Paragraph>
          A website for a real estate.
        </Paragraph>

        <List ml={4} my={4}>
          <ListItem>
            <WorkBadge>
              Website
            </WorkBadge>
            <Link as={NextLink} href="https://rangelimoveisrj.com.br/" target="_blank">
              https://rangelimoveisrj.com.br/
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
            <span>ReactJS, Typescript, Stitches, Framer Motion</span>
          </ListItem>
        </List>

        <WorkImage src="/images/rangelThumbnail.png" alt="Todo" />
      </Container>
    </PageTransition>
  )
}