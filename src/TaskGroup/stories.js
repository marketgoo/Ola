import React from 'react'
import { storiesOf } from '@storybook/react'

import TaskGroup from './'
import Task from '../Task'

import Button from '../Button'
import Tag from '../Tag'
import Panel from '../Panel'
import PanelContent from '../Panel/Content'

storiesOf('TaskGroup')
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