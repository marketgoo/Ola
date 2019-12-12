import React from 'react'

import create from '../create'
import { action } from '@storybook/addon-actions'

import Modal from './'
import ModalHeader from './Header'
import ModalContent from './Content'
import ModalFooter from './Footer'
import Button from '../Button'
import ButtonGroup from '../ButtonGroup'
import ProgressBar from '../ProgressBar'

create('Modal')
  .add('Default', () => (
    <div className="ola_modal-overlay">
      <Modal onClose={action('onClick event')}>
        <ModalHeader title="Modal Header" intro="Lorem ipsum for testing intro">
          <ProgressBar value="20" max="100" />
        </ModalHeader>
        <ModalContent>
          <p>Modal content</p>
        </ModalContent>
        <ModalFooter>
          <ButtonGroup reversed>
            <Button variant='primary'>Primary</Button>
            <Button variant='secondary'>Default Button</Button>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    </div>
  ))