import React from 'react'
import Task from './'
import Button from './../Button'
import renderer from 'react-test-renderer'

it('Default Task', () => {
  const tree = renderer
    .create(
      <Task title="Task title 1">

      </Task>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('Success Task', () => {
  const tree = renderer
    .create(
      <Task title="Task title 2" variant="success">
  
      </Task>
    )
    .toJSON()
  
  expect(tree).toMatchSnapshot()
})

it('Suggested Task', () => {
  const tree = renderer
    .create(
      <Task title="Task title 3" variant="suggested">
    
      </Task>
    )
    .toJSON()
    
  expect(tree).toMatchSnapshot()
})

it('Warning Task', () => {
  const tree = renderer
    .create(
      <Task title="Task title 4" variant="warning">
      
      </Task>
    )
    .toJSON()
      
  expect(tree).toMatchSnapshot()
})

it('Error Task', () => {
  const tree = renderer
    .create(
      <Task title="Task title 5" variant="error">
        
      </Task>
    )
    .toJSON()
        
  expect(tree).toMatchSnapshot()
})

it('Task with Extra', () => {
  const tree = renderer
    .create(
      <Task 
        title="Task title 6" 
        variant="error" 
        extra={<Button onClick={() => false}>Fix now</Button>}/>
    )
    .toJSON()
          
  expect(tree).toMatchSnapshot()
})