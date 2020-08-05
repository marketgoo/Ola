import React from 'react'
import { storiesOf } from '@storybook/react'

import Section from './'
import SectionHeader from './Header'
import SectionSubheader from './Subheader'
import SectionContent from './Content'
import SectionFooter from './Footer'
import Button from '../Button'
import ButtonGroup from '../ButtonGroup'

storiesOf('Section')
  .add('All elements', () => (
    <Section>
      <SectionHeader title="Section Header">
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
  ))
