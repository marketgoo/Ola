import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { Panel, PanelContent, TaskGroup, Task, TaskBody, TaskFooter, Button, ButtonGroup } from '../dist'

storiesOf('Tasks', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola preview-centered is-wide">{story()}</div>)
  .add('Error', () => (
    <Panel>
      <PanelContent title="What do you need to look at?" variant="fullwidth">
        <TaskGroup>

          <Task title="Task title demo">
            <TaskBody>
              Test content for card resolve
            </TaskBody>
            <TaskFooter>
              <ButtonGroup>
                <Button>Done! Check it now</Button>
              </ButtonGroup>
            </TaskFooter>
          </Task>

          <Task title="Task title demo 2">
            <TaskBody>
              Test content for card resolve
            </TaskBody>
            <TaskFooter>
              <ButtonGroup>
                <Button>Done! Check it now</Button>
              </ButtonGroup>
            </TaskFooter>
          </Task>

        </TaskGroup>
      </PanelContent>
    </Panel>
  ))
  .add('Success', () => (
    <Panel>
      <PanelContent title="What have you done well?" variant="fullwidth">
        <TaskGroup>
          <Task title="Task title" variant="success" />
          <Task title="Task title" variant="success" />
          <Task title="Task title" variant="success" />
        </TaskGroup>
      </PanelContent>
    </Panel>
  ))
  .add('Suggested', () => (
    <Panel>
      <PanelContent title="Suggestions" variant="fullwidth">
        <TaskGroup>
          <Task title="Task title" variant="suggested" />
          <Task title="Task title" variant="suggested" />
          <Task title="Task title" variant="suggested" />
        </TaskGroup>
      </PanelContent>
    </Panel>
  ))
  .add('Reopened', () => (
    <Panel>
      <PanelContent title="Reopened" variant="fullwidth">
        <TaskGroup>

          <Task title="Task title" variant="warning">
            <TaskBody>
              Test content for card resolve
            </TaskBody>
            <TaskFooter>
              <ButtonGroup>
                <Button>Done! Check it now</Button>
              </ButtonGroup>
            </TaskFooter>
          </Task>

          <Task title="Task title" variant="warning">
            <TaskBody>
              Test content for card resolve
            </TaskBody>
            <TaskFooter>
              <ButtonGroup>
                <Button>Done! Check it now</Button>
              </ButtonGroup>
            </TaskFooter>
          </Task>

        </TaskGroup>
      </PanelContent>
    </Panel>
  ))