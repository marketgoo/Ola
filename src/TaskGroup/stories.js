import React from 'react'
import TaskGroup from './'
import Task from '../Task'
import Button from '../Button'

export default {
  title: 'TaskGroup',
  component: TaskGroup
}

export const Base = () => 
  <TaskGroup>
    <Task title="Task title" variant="success" />
    <Task title="Task title" variant="success" extra={<Button variant="pro" onClick={e => {e.preventDefault();alert('click')}}>buy</Button>}/>
    <Task title="Task title" variant="success" />
  </TaskGroup>
