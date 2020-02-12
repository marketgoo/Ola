import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Modal from './'
import ModalHeader from './Header'
import ModalContent from './Content'
import ModalFooter from './Footer'
import Button from '../Button'
import ButtonGroup from '../ButtonGroup'
import ProgressBar from '../ProgressBar'

storiesOf('Modal')
  .add('Default', () => (
    <Modal onClose={action('onClick event')} open>
      <ModalHeader
        title="Modal Header"
        intro={<><strong>Lorem ipsum</strong> for testing intro</>}>
        <ProgressBar value="20" max="100" />
      </ModalHeader>
      <ModalContent>
        <p>Modal content</p>
      </ModalContent>
      <ModalFooter>
        <ButtonGroup variant='reversed'>
          <Button variant='primary'>Primary</Button>
          <Button variant='secondary'>Default Button</Button>
        </ButtonGroup>
      </ModalFooter>
    </Modal>
  ))