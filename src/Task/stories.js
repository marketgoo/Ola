import React from 'react'
import Task from './'
import TaskBody from './Body'
import TaskFooter from './Footer'
import TaskInfo from './Info'
import Button from '../Button'
import ButtonGroup from '../ButtonGroup'

export default {
  title: 'Task',
  component: Task,
  args: {
    title: 'This is the title of the task'
  },
  argTypes: {
    children: { control: { disable: true }},
    extra: { control: { disable: true }},
  }
}

export const Base = (args) => 
  <Task onToggle={e => ('Task is ' + (e.target.open ? 'open' : 'close'))} {...args}>
    <TaskInfo>
      <p>Impact: <strong>High</strong></p>
      <p>Estimated time: <strong>1-2 minutes</strong></p>
    </TaskInfo>
    <TaskBody>
      <p>Add the targeted keyword <strong>florida man</strong> to the page title to help it rank in search engine results. <a href="#">https://www.google.com/maps/place/Santiago+de+Compostela,+A+Coru%C3%B1a/@42.8802351,-8.5623221,14z/data=!3m1!4b1!4m5!3m4!1s0xd2efe44e2dd71a7:0xe0146888c087e311!8m2!3d42.8782132!4d-8.5448445</a></p>
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
