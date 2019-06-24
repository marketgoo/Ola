import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { Panel, PanelContent, TaskGroup, Task } from '../src'

storiesOf('Tasks', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola preview-centered">{story()}</div>)
  .add('Error', () => (
    <Panel>
      <PanelContent title="What do you need to look at?">
        <TaskGroup>
          <Task title="Task title">
            <div>
              Test content for card resolve
            </div>
          </Task>
        </TaskGroup>
      </PanelContent>
    </Panel>
  ))
  .add('Success', () => (
    <Panel>
      <PanelContent title="What have you done well?">
        <TaskGroup>
          <Task title="Task title" variant="success" />
        </TaskGroup>
      </PanelContent>
    </Panel>
  ))
  .add('Suggested', () => (
    <Panel>
      <PanelContent title="Suggestions">
        <TaskGroup>
          <Task title="Task title">
            <p>Test</p>
          </Task>
        </TaskGroup>
      </PanelContent>
    </Panel>
  ))
  .add('Reopened', () => (
    <Panel>
      <PanelContent title="Reopened">
        <TaskGroup>
          <Task title="Task title">
            <p>Test</p>
          </Task>
        </TaskGroup>
      </PanelContent>
    </Panel>
  ))
