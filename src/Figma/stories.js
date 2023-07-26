import React from 'react'
import Tag from '../Tag'
import Table from '../Table'
import { storiesOf } from '@storybook/react'
import components from './components'

const getWhereVariant = (where) => {
  const options = {
    figma: 'pro',
    storybook: 'chart-1',
    both: 'success',
  }
  return options[where] || ''
}

const getStateVariant = (state) => {
  const options = {
    different: 'warning',
    same: 'success',
  }
  return options[state] || ''
}

const orderByState = (a, b) => {
  if (a.state === 'same' && b.state !== 'same') {
    return 1 // a va antes que b
  } else if (a.state !== 'same' && b.state === 'same') {
    return -1 // b va antes que a
  } else {
    return 0 // mantén el orden actual
  }
}

storiesOf('Figma', module).add('Default', () => (
  <Table>
    <Table.Header>
      <Table.Cell>Figma Label</Table.Cell>
      <Table.Cell>Storybook Label</Table.Cell>
      <Table.Cell>Where</Table.Cell>
      <Table.Cell>State</Table.Cell>
      <Table.Cell>Coment</Table.Cell>
    </Table.Header>
    {components.sort(orderByState).map((item, index) => (
      <Table.Row key={index}>
        <Table.Cell>
          {item['figmaLabelLink'] ? (
            <a href={item['figmaLabelLink']} target="_blank" rel="noopener noreferrer">
              {item['figmaLabel']}
            </a>
          ) : (
            item['figmaLabel']
          )}
        </Table.Cell>
        <Table.Cell>
          {item['storybookLabelLink'] ? (
            <a href={`/?path=/story/${item['storybookLabelLink']}--base`}>
              {item['storybookLabel']}
            </a>
          ) : (
            item['storybookLabel']
          )}
        </Table.Cell>
        <Table.Cell>
          <Tag variant={getWhereVariant(item['where'])}>{item['where']}</Tag>
        </Table.Cell>
        <Table.Cell>
          <Tag variant={getStateVariant(item['state'])}>{item['state']}</Tag>
        </Table.Cell>
        <Table.Cell>{item['comment']}</Table.Cell>
      </Table.Row>
    ))}
  </Table>
))
