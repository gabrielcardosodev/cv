import { WorkGridItem } from "@/components/grid/WorkGridItem";
import NextLink from 'next/link'
import { Section } from "@/components/section";
import { Container, Divider, Heading, SimpleGrid, Link, Button, Text, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";

import todoThumbnail from '../../../public/images/todoApp.png'
import letMeAskThumbnail from '../../../public/images/letMeAskApp.png'
import grapesFinancesThumbnail from '../../../public/images/grapesFinacesApp.png'
import pomodoroThumbnail from '../../../public/images/pomodoroApp.png'
import { GithubLogo } from "@phosphor-icons/react";
import { PageTransition } from "@/components/PageTransition";

export default function Works() {
  return (
    <PageTransition title="Works">
      <Container>
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

        <Divider borderColor="gray" mb={10} />

        <Button
          as={NextLink}
          href="https://github.com/gabrielcardosodev"
          target="_blank"
          w="100%"
          h={50}
          colorScheme={useColorModeValue('purple', 'orange')}
        >
          <Text
            display="flex"
            alignItems="center"
            gap={2}
          >
            View more in my github <GithubLogo weight="fill" />
          </Text>
        </Button>
      </Container>
    </PageTransition >
  )
}