import { WorkGridItem } from "@/components/grid/WorkGridItem";
import { Section } from "@/components/section";
import { PageTransition } from "@/components/PageTransition";

import { Container, Divider, Heading, SimpleGrid } from "@chakra-ui/react";

import lifevetThumbnail from '../../../public/images/lifevetThumbnail.png'
import rangelThumbnail from '../../../public/images/rangelThumbnail.png'
import todoThumbnail from '../../../public/images/todoApp.png'
import letMeAskThumbnail from '../../../public/images/letMeAskApp.png'
import grapesFinancesThumbnail from '../../../public/images/grapesFinacesApp.png'
import pomodoroThumbnail from '../../../public/images/pomodoroApp.png'


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
              id="letmeask"
              title="letmeask"
              thumbnail={letMeAskThumbnail.src}
            >
              App developed for streamers to better organize their viewers&#39; questions.
            </WorkGridItem>
          </Section>

          <Section delay="0.3">
            <WorkGridItem
              id="pomodoro"
              title="Pomodoro"
              thumbnail={pomodoroThumbnail.src}
            >
              A pomodoro timer.
            </WorkGridItem>
          </Section>

          <Section delay="0.3">
            <WorkGridItem
              id="todo"
              title="Todo"
              thumbnail={todoThumbnail.src}
            >
              To do app to organizing your day more efficiently.
            </WorkGridItem>
          </Section>

          <Section delay="0.3">
            <WorkGridItem
              id="grapesfinances"
              title="Grapes Finances"
              thumbnail={grapesFinancesThumbnail.src}
            >
              App created to organize and control your expenses.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Divider borderColor="gray" my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="lifevet-client-app"
              title="Lifevet"
              thumbnail={lifevetThumbnail.src}
            >
              App created to client access.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="rangel-imoveis"
              title="Rangel Imóveis"
              thumbnail={rangelThumbnail.src}
            >
              A website for a real estate.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </PageTransition >
  )
}