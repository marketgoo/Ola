import React from 'react'
import Table from './'
import Button from '../Button'
import ButtonIcon from '../ButtonIcon'
import Check from '../Check'

const data = [
  {
    title: 'Page title test',
    links: 'holi',
    popularity: 'hight',
    checked: false,
    action: <><ButtonIcon icon="success" color="positive" /><ButtonIcon icon="error" color="negative" /></>
  },
  {
    title: 'Page title test 2',
    links: '78854',
    popularity: 'medium',
    checked: true,
    action: <><ButtonIcon icon="success" color="positive" /><ButtonIcon icon="error" color="negative" /></>
  },
  {
    title: 'Page title test 3',
    links: '2354689',
    popularity: 'hight',
    checked: false,
    action: <><ButtonIcon icon="success" color="positive" /><ButtonIcon icon="error" color="negative" /></>
  },
  {
    title: 'Page title test 4',
    links: '7668132',
    popularity: 'low',
    checked: true,
    action: <><ButtonIcon icon="success" color="positive" /><ButtonIcon icon="error" color="negative" /></>
  },
  {
    title: 'Page title test 3',
    links: '2354689',
    popularity: 'hight',
    checked: false,
    action: <><ButtonIcon icon="success" color="positive" /><ButtonIcon icon="error" color="negative" /></>
  },
  {
    title: 'Page title test 4',
    links: '7668132',
    popularity: 'low',
    checked: true,
    action: <><ButtonIcon icon="success" color="positive" /><ButtonIcon icon="error" color="negative" /></>
  },
  {
    title: 'Page title test 3',
    links: '2354689',
    popularity: 'hight',
    checked: false,
    action: <><ButtonIcon icon="success" color="positive" /><ButtonIcon icon="error" color="negative" /></>
  },
  {
    title: 'Page title test 4',
    links: '7668132',
    popularity: 'low',
    checked: true,
    action: <><ButtonIcon icon="success" color="positive" /><ButtonIcon icon="error" color="negative" /></>
  },
  {
    title: 'Page title test 3',
    links: '2354689',
    popularity: 'hight',
    checked: false,
    action: <><ButtonIcon icon="success" color="positive" /><ButtonIcon icon="error" color="negative" /></>
  },
  {
    title: 'Page title test 4',
    links: '7668132',
    popularity: 'low',
    checked: true,
    action: <><ButtonIcon icon="success" color="positive" /><ButtonIcon icon="error" color="negative" /></>
  },
  {
    title: 'Page title test 3',
    links: '2354689',
    popularity: 'hight',
    checked: false,
    action: <><ButtonIcon icon="success" color="positive" /><ButtonIcon icon="error" color="negative" /></>
  },
  {
    title: 'Page title test 4',
    links: '7668132',
    popularity: 'low',
    checked: true,
    action: <><ButtonIcon icon="success" color="positive" /><ButtonIcon icon="error" color="negative" /></>
  }
]

export default {
  title: 'Table',
  component: Table,
  args: {
    stickyHeader: false,
    className: '',
    gridTemplateColumns: '',
    minWidth: '',
    maxHeight: '',
  },
  argTypes: {
    children: { control: { disable: true }}
  }
}

export const Base = (args) =>
  <Table {...args}>
    <Table.Row>
      <Table.Cell></Table.Cell>
      <Table.Cell nowrap>Title</Table.Cell>
      <Table.Cell>Links</Table.Cell>
      <Table.Cell>Popularity</Table.Cell>
      <Table.Cell>Action</Table.Cell>
    </Table.Row>
    {data.slice(0, 5).map((row, idx) => (
      <Table.Row key={idx}>
        <Table.Cell><Check type="checkbox" name="foo" checked={row.checked} /></Table.Cell>
        <Table.Cell nowrap>{row.title}</Table.Cell>
        <Table.Cell>{row.links}</Table.Cell>
        <Table.Cell>{row.popularity}</Table.Cell>
        <Table.Cell>{row.action}</Table.Cell>
      </Table.Row>
    ))}
  </Table>

export const DisabledColumn = (args) =>
  <Table {...args}>
    <Table.Row>
      <Table.Cell></Table.Cell>
      <Table.Cell nowrap>Disabled Column</Table.Cell>
      <Table.Cell>Links</Table.Cell>
      <Table.Cell>Popularity</Table.Cell>
      <Table.Cell>Action</Table.Cell>
    </Table.Row>
    {data.slice(0, 5).map((row, idx) => (
      <Table.Row key={idx}>
        <Table.Cell><Check type="checkbox" name="foo" checked={row.checked} /></Table.Cell>
        <Table.Cell nowrap disabled>{row.title}</Table.Cell>
        <Table.Cell>{row.links}</Table.Cell>
        <Table.Cell>{row.popularity}</Table.Cell>
        <Table.Cell>{row.action}</Table.Cell>
      </Table.Row>
    ))}
  </Table>



export const SelectedColumn = (args) =>
  <Table {...args}>
    <Table.Row>
      <Table.Cell></Table.Cell>
      <Table.Cell nowrap>Title</Table.Cell>
      <Table.Cell>Selected Column</Table.Cell>
      <Table.Cell>Popularity</Table.Cell>
      <Table.Cell>Action</Table.Cell>
    </Table.Row>
    {data.slice(0, 5).map((row, idx) => (
      <Table.Row key={idx}>
        <Table.Cell><Check type="checkbox" name="foo" checked={row.checked} /></Table.Cell>
        <Table.Cell nowrap>{row.title}</Table.Cell>
        <Table.Cell selected>{row.links}</Table.Cell>
        <Table.Cell>{row.popularity}</Table.Cell>
        <Table.Cell>{row.action}</Table.Cell>
      </Table.Row>
    ))}
  </Table>

export const StickyHeader = (args) =>
  <Table {...args}>
    <Table.Row>
      <Table.Cell></Table.Cell>
      <Table.Cell nowrap>Title</Table.Cell>
      <Table.Cell>Links</Table.Cell>
      <Table.Cell>Popularity</Table.Cell>
      <Table.Cell>Action</Table.Cell>
    </Table.Row>
    {data.map((row, idx) => (
      <Table.Row key={idx}>
        <Table.Cell><Check type="checkbox" name="foo" checked={row.checked} /></Table.Cell>
        <Table.Cell nowrap>{row.title}</Table.Cell>
        <Table.Cell>{row.links}</Table.Cell>
        <Table.Cell>{row.popularity}</Table.Cell>
        <Table.Cell>{row.action}</Table.Cell>
      </Table.Row>
    ))}
  </Table>
StickyHeader.args = {
  maxHeight: '400px',
  stickyHeader: true
}

export const HorizontalScroll = (args) =>
  <Table {...args}>
    <Table.Row>
      <Table.Cell></Table.Cell>
      <Table.Cell nowrap>Title</Table.Cell>
      <Table.Cell>Links</Table.Cell>
      <Table.Cell>Popularity</Table.Cell>
      <Table.Cell>Action</Table.Cell>
    </Table.Row>
    {data.slice(0, 5).map((row, idx) => (
      <Table.Row key={idx}>
        <Table.Cell><Check type="checkbox" name="foo" checked={row.checked} /></Table.Cell>
        <Table.Cell nowrap>{row.title}</Table.Cell>
        <Table.Cell>{row.links}</Table.Cell>
        <Table.Cell>{row.popularity}</Table.Cell>
        <Table.Cell>{row.action}</Table.Cell>
      </Table.Row>
    ))}
  </Table>
HorizontalScroll.args = {
  minWidth: '2000px',
}

export const StickyHeaderHorizontalScroll = (args) =>
  <Table {...args}>
    <Table.Row>
      <Table.Cell></Table.Cell>
      <Table.Cell nowrap>Title</Table.Cell>
      <Table.Cell>Links</Table.Cell>
      <Table.Cell>Popularity</Table.Cell>
      <Table.Cell>Action</Table.Cell>
    </Table.Row>
    {data.map((row, idx) => (
      <Table.Row key={idx}>
        <Table.Cell><Check type="checkbox" name="foo" checked={row.checked} /></Table.Cell>
        <Table.Cell nowrap>{row.title}</Table.Cell>
        <Table.Cell>{row.links}</Table.Cell>
        <Table.Cell>{row.popularity}</Table.Cell>
        <Table.Cell>{row.action}</Table.Cell>
      </Table.Row>
    ))}
  </Table>
StickyHeaderHorizontalScroll.args = {
  minWidth: '2000px',
  maxHeight: '400px',
  stickyHeader: true
}

export const CustomGridTemplate = (args) =>
  <>
    <p><strong><code>gridTemplateColumns: "60px 3fr 1fr 190px 2fr"</code></strong></p>
    <Table {...args}>
      <Table.Row>
        <Table.Cell>60px</Table.Cell>
        <Table.Cell nowrap>3fr</Table.Cell>
        <Table.Cell>1fr</Table.Cell>
        <Table.Cell>190px</Table.Cell>
        <Table.Cell>2fr</Table.Cell>
      </Table.Row>
      {data.slice(0, 5).map((row, idx) => (
        <Table.Row key={idx}>
          <Table.Cell><Check type="checkbox" name="foo" checked={row.checked} /></Table.Cell>
          <Table.Cell nowrap>{row.title}</Table.Cell>
          <Table.Cell>{row.links}</Table.Cell>
          <Table.Cell>{row.popularity}</Table.Cell>
          <Table.Cell>{row.action}</Table.Cell>
        </Table.Row>
      ))}
    </Table>
  </>
CustomGridTemplate.args = {
  gridTemplateColumns: '60px 3fr 1fr 190px 2fr',
}
