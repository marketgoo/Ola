import React from 'react'
import { storiesOf } from '@storybook/react'

import Task from './'
import TaskBody from './Body'
import TaskFooter from './Footer'
import TaskInfo from './Info'
import TaskGroup from '../TaskGroup'
import TaskSmall from './Small'

import Button from '../Button'
import ButtonGroup from '../ButtonGroup'
import Tag from '../Tag'
import Panel from '../Panel'
import PanelContent from '../Panel/Content'

storiesOf('Task')
  .add('Error', () => (
    <Panel>
      <PanelContent title="What do you need to look at?" variant="fullwidth">
        <TaskGroup>

          <Task title="Task title demo" onToggle={e => ('Task is ' + (e.target.open ? 'open' : 'close'))}>
            <TaskInfo>
              <p>Impact: <strong>High</strong></p>
              <p>Estimated time: <strong>1-2 minutes</strong></p>
            </TaskInfo>
            <TaskBody>
              <p>Add the targeted keyword <strong>florida man</strong> to the page title to help it rank in search engine results.</p>
              <p>Here are some tips for writing an SEO-friendly title:</p>
              <ul>
                <li>Add the keyword <strong>florida man</strong> to the beginning of the title for best results.</li>
                <li>Avoid or limit STOP words, in the title tag. These words carry little value from an SEO perspective.</li>
              </ul>
              <p>Here are some tips for writing an SEO-friendly title:</p>
              <ol>
                <li>Add the keyword <strong>florida man</strong> to the beginning of the title for best results.</li>
                <li>Avoid or limit STOP words, in the title tag. These words carry little value from an SEO perspective.</li>
              </ol>
            </TaskBody>
            <TaskFooter>
              <ButtonGroup>
                <Button>Done! Check it now</Button>
              </ButtonGroup>
            </TaskFooter>
          </Task>

          <Task title="Task title demo 2" extra={<Button variant="secondary" onClick={e => {e.preventDefault();alert('click')}}>Fix now</Button>}>
            <TaskBody>
              Test content for card resolve
            </TaskBody>
            <TaskFooter>
              <ButtonGroup>
                <Button>Done! Check it now</Button>
              </ButtonGroup>
            </TaskFooter>
          </Task>

          <Task title={<>Task html title <strong>demo 3</strong></>} extra={<Button onClick={e => {e.preventDefault();alert('click')}}>Fix now</Button>}>
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
          <Task title="Task title" variant="success" extra={<Button variant="pro" onClick={e => {e.preventDefault();alert('click')}}>buy</Button>}/>
          <Task title="Task title" variant="success" extra={<Tag variant="success">Success</Tag>}/>
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
  .add('Mixed', () => (
    <Panel>
      <PanelContent title="Mixed" variant="fullwidth">
        <TaskGroup>

          <Task title="Task title" variant="warning">
            <TaskBody>
              <p>Text content for card resolve</p>
              <hr />
              <p>More text content for card resolve</p>
            </TaskBody>
            <TaskFooter>
              <ButtonGroup>
                <Button>Done! Check it now</Button>
              </ButtonGroup>
            </TaskFooter>
          </Task>

          <Task title="Task title" variant="suggested">
            <TaskBody>
            Text content for card resolve
            </TaskBody>
            <TaskFooter>
              <ButtonGroup>
                <Button>Done! Check it now</Button>
              </ButtonGroup>
            </TaskFooter>
          </Task>

          <Task title="Task title" variant="success" />
          <Task title="Task title" variant="suggested" />

          <Task title="Task title demo" variant="error">
            <TaskBody>
            Text content for card resolve
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
  .add('Small', () => (
    <Panel>
      <PanelContent>
        <TaskGroup>
          <TaskSmall>Task title</TaskSmall>
          <TaskSmall variant="suggested" href="#">Task title</TaskSmall>
          <TaskSmall variant="warning">Task title</TaskSmall>
          <TaskSmall variant="success" href="#">Task title</TaskSmall>
          <TaskSmall variant="error">Task title</TaskSmall>
        </TaskGroup>
      </PanelContent>
    </Panel>
  ))
