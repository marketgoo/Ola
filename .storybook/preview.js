import React from 'react'
import '../src/index.css'
import { addDecorator, addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'

addDecorator(story => 
  <div className="ola">{story()}</div>
)

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
})
