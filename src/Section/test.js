import React from 'react'
import Section from './'
import SectionHeader from './Header'
import SectionSubheader from './Subheader'
import SectionContent from './Content'
import SectionFooter from './Footer'
import renderer from 'react-test-renderer'

it('Default Section', () => {
  const tree = renderer
    .create(
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
          Section footer content
        </SectionFooter>
      </Section>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
