import React from 'react'
import Section from './'
import SectionHeader from './Header'
import SectionSubheader from './Subheader'
import SectionContent from './Content'
import SectionFooter from './Footer'
import Button from '../Button'
import ButtonGroup from '../ButtonGroup'

export default {
  title: 'Section',
  component: Section
}

export const AllElements = () => 
  <Section>
    <SectionHeader title="Section Header" action={<a href="#">I am a link</a>}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis eros quam, vitae consectetur leo vehicula ut. Etiam et ullamcorper turpis.
    </SectionHeader>

    <SectionContent>
      <p>Section content</p>

      <hr />

      <SectionSubheader title="Your SEO website manager">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis eros quam, vitae consectetur leo vehicula ut. Etiam et ullamcorper turpis.
      </SectionSubheader>

      <p>Section content</p>
    </SectionContent>

    <SectionFooter>
      <ButtonGroup>
        <Button variant='primary'>Primary</Button>
        <Button variant='secondary'>Default Button</Button>
      </ButtonGroup>
    </SectionFooter>
  </Section>

export const CenteredHeaderWithImg = () => 
  <Section>
    <SectionHeader title="Section Header" img={<img src="https://placehold.it/60x60" />} variant="center">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis eros quam, vitae consectetur leo vehicula ut. Etiam et ullamcorper turpis.
    </SectionHeader>

    <SectionContent>
      <p>Section content</p>

      <hr />

      <SectionSubheader title="Your SEO website manager">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis eros quam, vitae consectetur leo vehicula ut. Etiam et ullamcorper turpis.
      </SectionSubheader>

      <p>Section content</p>
    </SectionContent>

    <SectionFooter>
      <ButtonGroup>
        <Button variant='primary'>Primary</Button>
        <Button variant='secondary'>Default Button</Button>
      </ButtonGroup>
    </SectionFooter>
  </Section>
