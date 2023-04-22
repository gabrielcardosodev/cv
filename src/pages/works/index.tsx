import { WorkGridItem } from "@/components/grid/WorkGridItem";
import NextLink from 'next/link'
import { Section } from "@/components/section";
import { Container, Divider, Heading, SimpleGrid, Link, Button, Text } from "@chakra-ui/react";
import Head from "next/head";

import todoThumbnail from '../../../public/images/todoApp.png'
import letMeAskThumbnail from '../../../public/images/letMeAskApp.png'
import grapesFinancesThumbnail from '../../../public/images/grapesFinacesApp.png'
import pomodoroThumbnail from '../../../public/images/pomodoroApp.png'
import { GithubLogo } from "@phosphor-icons/react";

export default function Works() {
  return (
    <Container>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Gabriel Cardoso - Works</title>
      </Head>

      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay="0.3">
          <WorkGridItem
            id="todo"
            title="Todo"
            thumbnail={todoThumbnail}
          >
            To do app to organizing your day more efficiently.
          </WorkGridItem>
        </Section>

        <Section delay="0.3">
          <WorkGridItem
            id="letmeask"
            title="Let me ask"
            thumbnail={letMeAskThumbnail}
          >
            App developed for streamers to better organize their viewers&#39; questions.
          </WorkGridItem>
        </Section>

        <Section delay="0.3">
          <WorkGridItem
            id="grapesfinances"
            title="Grapes Finances"
            thumbnail={grapesFinancesThumbnail}
          >
            App created to organize and control your expenses.
          </WorkGridItem>
        </Section>

        <Section delay="0.3">
          <WorkGridItem
            id="pomodoro"
            title="Pomodoro"
            thumbnail={pomodoroThumbnail}
          >
            A pomodoro timer.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Divider mb={10} />

      <Button
        w="100%"
        h={50}
      >
        <Link
          as={NextLink}
          href="https://github.com/gabrielcardosodev"
          target="_blank"
        >
          <Text
            display="flex"
            alignItems="center"
            gap={2}
          >
            View more in my github <GithubLogo weight="fill" />
          </Text>
        </Link>
      </Button>
    </Container >
  )
}