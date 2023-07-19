import React, { useState } from 'react'
import Table from './'
import ButtonIcon from '../ButtonIcon'
import Check from '../Check'

const data = Array.from({ length: 12 }).map((_, index) => {
  return {
    id: index,
    title: `Page title test ${index}`,
    links: index * 2,
    popularity: index % 2 === 0 ? 'hight' : index % 3 === 0 ? 'medium' : 'low',
    checked: index % 3 === 0,
    action: <><ButtonIcon icon="success" color="positive" /><ButtonIcon icon="error" color="negative" /></>
  }
})

export default {
  title: 'Table/Table',
  component: Table,
  args: {
    stickyHeader: false,
    className: '',
    gridTemplateColumns: '',
    minWidth: '',
    maxHeight: '',
    loading: false
  },
  argTypes: {
    children: { control: { disable: true }}
  }
}

export const Base = (args) =>
  <Table {...args}>
    <Table.Header>
      <Table.Cell></Table.Cell>
      <Table.Cell nowrap>Title</Table.Cell>
      <Table.Cell>Links</Table.Cell>
      <Table.Cell>Popularity</Table.Cell>
      <Table.Cell>Action</Table.Cell>
    </Table.Header>
    {data.slice(0, 5).map((row, idx) => (
      <Table.Row key={idx}>
        <Table.Cell>
          <Check type="checkbox" name="foo" checked={row.checked} />
        </Table.Cell>
        <Table.Cell nowrap>{row.title}</Table.Cell>
        <Table.Cell>{row.links}</Table.Cell>
        <Table.Cell>{row.popularity}</Table.Cell>
        <Table.Cell>{row.action}</Table.Cell>
      </Table.Row>
    ))}
  </Table>

export const Loading = (args) =>
  <Table {...args}>
    <Table.Header>
      <Table.Cell></Table.Cell>
      <Table.Cell nowrap>Title</Table.Cell>
      <Table.Cell>Links</Table.Cell>
      <Table.Cell>Popularity</Table.Cell>
      <Table.Cell>Action</Table.Cell>
    </Table.Header>
    {data.slice(0, 5).map((row, idx) => (
      <Table.Row key={idx}>
        <Table.Cell>
          <Check type="checkbox" name="foo" checked={row.checked} />
        </Table.Cell>
        <Table.Cell nowrap>{row.title}</Table.Cell>
        <Table.Cell>{row.links}</Table.Cell>
        <Table.Cell>{row.popularity}</Table.Cell>
        <Table.Cell>{row.action}</Table.Cell>
      </Table.Row>
    ))}
  </Table>
Loading.args = {
  loading: true
}


export const CheckRowsExample = (args) => {
  const [selected, setSelected] = useState(data.filter(item => item.checked).map(item => item.id))
  const [allChecked, setAllChecked] = useState(false)

  const localData = data.slice(0, 5)

  return (
    <Table {...args}>
      <Table.Header>
        <Table.Cell>
          <Check type="checkbox" name="foo" checked={allChecked} onChange={
            (e) => {
              setAllChecked(e.target.checked)
              setSelected(e.target.checked ? data.map(item => item.id) : [])
            }
          } />
        </Table.Cell>
        <Table.Cell nowrap>Title</Table.Cell>
        <Table.Cell>Links</Table.Cell>
        <Table.Cell>Popularity</Table.Cell>
        <Table.Cell>Action</Table.Cell>
      </Table.Header>
      {localData.map((row, idx) => (
        <Table.Row key={idx}>
          <Table.Cell selected={selected.includes(row.id)}>
            <Check type="checkbox" name="foo" checked={selected.includes(row.id)} onChange={
              (e) => {
                if (e.target.checked) {
                  setSelected([...selected, row.id])
                } else {
                  setSelected(selected.filter(id => id !== row.id))
                }

                setAllChecked(selected.length === localData.length)
              }
            } />
          </Table.Cell>
          <Table.Cell selected={selected.includes(row.id)} nowrap>{row.title}</Table.Cell>
          <Table.Cell selected={selected.includes(row.id)}>{row.links}</Table.Cell>
          <Table.Cell selected={selected.includes(row.id)}>{row.popularity}</Table.Cell>
          <Table.Cell selected={selected.includes(row.id)}>{row.action}</Table.Cell>
        </Table.Row>
      ))}
    </Table>
  )
}
CheckRowsExample.args = {
  gridTemplateColumns: '60px 3fr 1fr 190px 2fr',
}

export const DisabledColumn = (args) =>
  <Table {...args}>
    <Table.Header>
      <Table.Cell></Table.Cell>
      <Table.Cell nowrap>Disabled Column</Table.Cell>
      <Table.Cell>Links</Table.Cell>
      <Table.Cell>Popularity</Table.Cell>
      <Table.Cell>Action</Table.Cell>
    </Table.Header>
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
    <Table.Header>
      <Table.Cell></Table.Cell>
      <Table.Cell nowrap>Title</Table.Cell>
      <Table.Cell>Selected Column</Table.Cell>
      <Table.Cell>Popularity</Table.Cell>
      <Table.Cell>Action</Table.Cell>
    </Table.Header>
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
    <Table.Header>
      <Table.Cell></Table.Cell>
      <Table.Cell nowrap>Title</Table.Cell>
      <Table.Cell>Links</Table.Cell>
      <Table.Cell>Popularity</Table.Cell>
      <Table.Cell>Action</Table.Cell>
    </Table.Header>
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
    <Table.Header>
      <Table.Cell></Table.Cell>
      <Table.Cell nowrap>Title</Table.Cell>
      <Table.Cell>Links</Table.Cell>
      <Table.Cell>Popularity</Table.Cell>
      <Table.Cell>Action</Table.Cell>
    </Table.Header>
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
    <Table.Header>
      <Table.Cell></Table.Cell>
      <Table.Cell nowrap>Title</Table.Cell>
      <Table.Cell>Links</Table.Cell>
      <Table.Cell>Popularity</Table.Cell>
      <Table.Cell>Action</Table.Cell>
    </Table.Header>
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
    <p><strong><code>gridTemplateColumns: &quot;60px 3fr 1fr 190px 2fr&quot;</code></strong></p>
    <Table {...args}>
      <Table.Header>
        <Table.Cell>60px</Table.Cell>
        <Table.Cell nowrap>3fr</Table.Cell>
        <Table.Cell>1fr</Table.Cell>
        <Table.Cell>190px</Table.Cell>
        <Table.Cell>2fr</Table.Cell>
      </Table.Header>
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
