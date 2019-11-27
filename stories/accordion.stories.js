import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import { withKnobs, radios } from '@storybook/addon-knobs'

import { Accordion } from '../dist'
import { Tag } from '../dist'

storiesOf('Accordion', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola">{story()}</div>)
  .add('Default', () => (
    <Accordion title={<>
        This is the title
        <Tag>23</Tag>
        </>}>
        <p>Lorem ipsum</p>
    </Accordion>
  ))
