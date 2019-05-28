import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { Button } from '../src'
import { Panel } from '../src'
import { PanelHeader } from '../src'
import { PanelContent } from '../src'
import { PanelFooter } from '../src'


storiesOf('Panel', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola">{story()}</div>)
  .add('All elements', () => (
    <Panel>
      <PanelHeader title="Panel Header" intro="Lorem ipsum for testing intro">
        Optinal extra content
      </PanelHeader>
      <PanelContent title="Conten Title">
        <p>Panel content</p>
      </PanelContent>
      <PanelFooter>
        <Button variant='secondary'>Default Button</Button>
        <Button variant='primary'>Primary</Button>
      </PanelFooter>
    </Panel>
  ))
  .add('Panel content fullwidth', () => (
    <Panel>
      <PanelHeader title="Panel Header" intro="Lorem ipsum for testing intro">
        Optinal extra content
      </PanelHeader>
      <PanelContent title="Conten Title" variant="fullwidth">
        <p>Panel content full width</p>
      </PanelContent>
      <PanelFooter>
        <Button variant='secondary'>Default Button</Button>
        <Button variant='primary'>Primary</Button>
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
        Optinal extra content
      </PanelHeader>
      <PanelContent htmlTitle={true} extraClass="extraclass" title="Conten Titles with <span>span</span>">
        <p>Panel content</p>
      </PanelContent>
      <PanelFooter>
        <Button variant='secondary'>Default Button</Button>
        <Button variant='primary'>Primary</Button>
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
