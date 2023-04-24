import { PageTransition } from "@/components/PageTransition";
import { Paragraph } from "@/components/paragraph";
import { WorkBadge } from "@/components/work/WorkBadge";
import { WorkTitle } from "@/components/work/WorkTitle";
import { Container, Link, List, ListItem, Text } from "@chakra-ui/react";
import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { WorkImage } from "@/components/work/WorkImage";

export default function Todo() {
  return (
    <PageTransition title="To do">
      <Container>
        <WorkTitle>
          To do <WorkBadge>2022</WorkBadge>
        </WorkTitle>

        <Paragraph>
          To do app to organizing your day more efficiently.
        </Paragraph>

        <List ml={4} my={4}>
          <ListItem>
            <WorkBadge>
              Website
            </WorkBadge>
            <Link as={NextLink} href="https://todo-list-ignite-gabrielcardosodev.vercel.app/" target="_blank">
              https://todo-list-ignite-gabrielcardosodev.vercel.app/ <ExternalLinkIcon ml={2} />
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
            <span>ReactJS, Typescript, TailwindCSS</span>
          </ListItem>
        </List>

        <WorkImage src="/images/todoApp.png" alt="Todo" />
      </Container>
    </PageTransition>
  )
}