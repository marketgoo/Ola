import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import {
  Button,
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ButtonGroup
} from '../src'

storiesOf('Modal', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola preview-centered is-wide">{story()}</div>)
  .add('All elements', () => (
    <div className="ola_modal-overlay">
      <div>
        <Modal>
          <ModalHeader title="Modal Header" intro="Lorem ipsum for testing intro" />
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
    </div>
  ))
