import { WorkGridItem } from "@/components/grid/WorkGridItem";
import { Section } from "@/components/section";
import { PageTransition } from "@/components/PageTransition";

import { Container, Divider, Heading, SimpleGrid } from "@chakra-ui/react";

import works from "@/consts/works";
import collaborations from "@/consts/collaborations";

export default function Works() {
  return (
    <PageTransition title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {works.map(work => (
            <Section key={work.id} delay="0.3">
              <WorkGridItem id={work.id} title={work.title} thumbnail={work.thumbnail}>
                {work.description}
              </WorkGridItem>
            </Section>
          ))}
        </SimpleGrid>

        <Divider borderColor="gray" my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {collaborations.map(collaboration => (
            <Section key={collaboration.id} delay="0.3">
              <WorkGridItem id={collaboration.id} title={collaboration.title} thumbnail={collaboration.thumbnail}>
                {collaboration.description}
              </WorkGridItem>
            </Section>
          ))}
        </SimpleGrid>
      </Container>
    </PageTransition >
  )
}