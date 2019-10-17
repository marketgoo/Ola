import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import { Table, Button } from '../dist'

const data = [
  {
    title: 'Page title test',
    links: '999999',
    popularity: 'hight'
  },
  {
    title: 'Page title test 2',
    links: '78854',
    popularity: 'medium'
  },
  {
    title: 'Page title test 3',
    links: '2354689',
    popularity: 'hight'
  },
  {
    title: 'Page title test 4',
    links: '7668132',
    popularity: 'low'
  }
]

storiesOf('Table', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola">{story()}</div>)
  .add('All', () => (
    <div>
      <Table>
        <caption>Superheros and sidekicks</caption>
        <thead>
          <th>Page</th>
          <th className="ola-right">Incoming links</th>
          <th className="ola-center">Popularity</th>
          <th className="ola-center">Actions</th>
        </thead>
        <tbody>

          { data.map( (row, idx) => (
            <tr key={idx}>
              <td>{row.title}</td>
              <td className="ola-numeric">{row.links}</td>
              <td className="ola-center">{row.popularity}</td>
              <td className="ola-center"><Button>Edit</Button></td>
            </tr>
          ) ) }

        </tbody>
      </Table>
    </div>
  ))
