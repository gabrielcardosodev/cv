import { PageTransition } from "@/components/PageTransition";
import { Paragraph } from "@/components/paragraph";
import { WorkBadge } from "@/components/work/WorkBadge";
import { WorkTitle } from "@/components/work/WorkTitle";
import { Container, Link, List, ListItem, Text } from "@chakra-ui/react";
import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { WorkImage } from "@/components/work/WorkImage";

export default function Letmeask() {
  return (
    <PageTransition title="Letmeask">
      <Container>
        <WorkTitle>
          Letmeask <WorkBadge>2022</WorkBadge>
        </WorkTitle>

        <Paragraph>
          App developed for streamers to better organize their viewers&#39; questions.
        </Paragraph>

        <List ml={4} my={4}>
          <ListItem>
            <WorkBadge>
              Website
            </WorkBadge>
            <Link as={NextLink} href="https://letmeask-fdd44.web.app/" target="_blank">
              https://letmeask-fdd44.web.app/ <ExternalLinkIcon ml={2} />
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
            <span>ReactJS, Typescript, Styled Components, Firebase</span>
          </ListItem>
        </List>

        <WorkImage src="/images/letMeAskApp.png" alt="Letmeask login page" />
      </Container>
    </PageTransition>
  )
}