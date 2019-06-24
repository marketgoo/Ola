import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { Panel, PanelHeader, TaskGroup, Task } from '../src'

storiesOf('Tasks', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola preview-centered">{story()}</div>)
  .add('All', () => (
    <div className="preview-centered-inner">
      <Panel>
        <PanelHeader title="Tasks" />
        <TaskGroup>
          <Task title="Task title" variant="success" />
        </TaskGroup>
      </Panel>
    </div>
  ))
