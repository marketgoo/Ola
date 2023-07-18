import React from 'react'
import ButtonIcon from '../ButtonIcon'
import Icon from '../Icon'
import Keyword from './'

export default {
  title: 'Keyword',
  component: Keyword,
  args: {
    children: 'This is a keywordThis is a keywordThis is a keyword'
  }
}

export const Base = (args) => <Keyword {...args}>{args.children}</Keyword>

export const WithButtonIcon = (args) => <Keyword {...args} button={<ButtonIcon icon="close" />}>{args.children}</Keyword>
