import { PageTransition } from "@/components/PageTransition";
import { Paragraph } from "@/components/paragraph";
import { WorkBadge } from "@/components/work/WorkBadge";
import { WorkTitle } from "@/components/work/WorkTitle";
import { Container, Link, List, ListItem } from "@chakra-ui/react";
import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { WorkImage } from "@/components/work/WorkImage";

export default function Pomodoro() {
  return (
    <PageTransition title="Pomodoro">
      <Container>
        <WorkTitle>
          Pomodoro <WorkBadge>2022</WorkBadge>
        </WorkTitle>

        <Paragraph>
          A pomodoro timer.
        </Paragraph>

        <List ml={4} my={4}>
          <ListItem>
            <WorkBadge>
              Website
            </WorkBadge>
            <Link as={NextLink} href="https://pomodoro-gabrielcardosodev.vercel.app/" target="_blank">
              https://pomodoro-gabrielcardosodev.vercel.app/
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
            <span>ReactJS, Typescript, Styled Components, Immer, Zod</span>
          </ListItem>
        </List>

        <WorkImage src="/images/pomodoroApp.png" alt="Todo" />
      </Container>
    </PageTransition>
  )
}