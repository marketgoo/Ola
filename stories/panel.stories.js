import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import {
  Button,
  Panel,
  PanelHeader,
  PanelContent,
  PanelFooter,
  ButtonGroup
} from '../dist'

storiesOf('Panel', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola preview-centered is-wide">{story()}</div>)
  .add('All elements', () => (
    <Panel>
      <PanelHeader title="Panel Header" intro="Lorem ipsum for testing intro">
        Optional extra content
      </PanelHeader>
      <PanelContent title="Conten Title">
        <p>Panel content</p>
      </PanelContent>
      <PanelFooter>
        <ButtonGroup>
          <Button variant='primary'>Primary</Button>
          <Button variant='secondary'>Default Button</Button>
        </ButtonGroup>
      </PanelFooter>
    </Panel>
  ))
  .add('Panel content fullwidth and highlight', () => (
    <Panel>
      <PanelHeader title="Panel Header" intro="Lorem ipsum for testing intro">
        Optional extra content
      </PanelHeader>
      <PanelContent title="Conten Title" variant="fullwidth">
        <p>Panel content full width</p>
      </PanelContent>
      <PanelContent title="Conten Title" variant="highlight">
        <p>Panel content highlight</p>
      </PanelContent>
      <PanelFooter>
        <ButtonGroup>
          <Button variant='primary'>Primary</Button>
          <Button variant='secondary'>Default Button</Button>
        </ButtonGroup>
      </PanelFooter>
    </Panel>
  ))
  .add('Titles with HTML', () => (
    <Panel>
      <PanelHeader
        title={'Title with <span>Span</span>'}
        htmlTitle={true}
        intro={'Lorem ipsum for testing intro with <span>span</span>'}
        htmlIntro={true}>
        Optional extra content
      </PanelHeader>
      <PanelContent htmlTitle={true} extraClass="extraclass" title="Conten Titles with <span>span</span>">
        <p>Panel content</p>
      </PanelContent>
      <PanelFooter>
        <ButtonGroup reversed>
          <Button variant='primary'>Primary</Button>
          <Button variant='secondary'>Default Button</Button>
        </ButtonGroup>
      </PanelFooter>
    </Panel>
  ))
  .add('No header/footer', () => (
    <Panel>
      <PanelContent title="Panel 1">
        <p>Panel content</p>
      </PanelContent>
      <PanelContent title="Panel 2" variant="fullwidth">
        <p>Panel content fullwidth</p>
      </PanelContent>
      <PanelContent title="Panel 3">
        <p>Panel content</p>
      </PanelContent>
    </Panel>
  ))
