import { PageTransition } from "@/components/PageTransition";
import { Paragraph } from "@/components/paragraph";
import { WorkBadge } from "@/components/work/WorkBadge";
import { WorkTitle } from "@/components/work/WorkTitle";
import { Container, Link, List, ListItem, Text } from "@chakra-ui/react";
import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { WorkImage } from "@/components/work/WorkImage";

export default function GrapesFinances() {
  return (
    <PageTransition title="Grapes Finances">
      <Container>
        <WorkTitle>
          Grapes Finances <WorkBadge>2022</WorkBadge>
        </WorkTitle>

        <Paragraph>
          App created to organize and control your incomes and expenses.
        </Paragraph>

        <List ml={4} my={4}>
          <ListItem>
            <WorkBadge>
              Website
            </WorkBadge>
            <Link as={NextLink} href="https://gabrielcardosodev.github.io/GrapesFinances/" target="_blank">
              https://gabrielcardosodev.github.io/GrapesFinances/<ExternalLinkIcon ml={2} />
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
            <span>HTML, CSS, JS</span>
          </ListItem>
        </List>

        <WorkImage src="/images/grapesFinacesApp.png" alt="Grapes Finances" />
      </Container>
    </PageTransition>
  )
}