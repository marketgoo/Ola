import React from 'react'

import create from '../create'

import Task from './'
import TaskBody from './TaskBody'
import TaskFooter from './TaskFooter'
import TaskInfo from './TaskInfo'
import TaskGroup from '../TaskGroup'

import Button from '../Button'
import ButtonGroup from '../ButtonGroup'
import Tag from '../Tag'
import Panel from '../Panel'
import PanelContent from '../Panel/Content'

create('Task')
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
                <li>Avoid or limit STOP words, such as 'the', 'a', 'an', 'but', 'if', and 'that' in the title tag. These words carry little value from an SEO perspective.</li>
              </ul>
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

          <Task htmlTitle title="Task html title <strong>demo 3</strong>" extra={<Button onClick={e => {e.preventDefault();alert('click')}}>Fix now</Button>}>
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
