import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Modal from './'
import ModalHeader from './Header'
import ModalContent from './Content'
import ModalFooter from './Footer'
import Button from '../Button'
import ButtonGroup from '../ButtonGroup'

import Panel from '../Panel'
import PanelContent from '../Panel/Content'
import ProgressBar from '../ProgressBar'

storiesOf('Modal')
  .add('Default', () => {

    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Panel>
          <PanelContent title="Test dialog">
            <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
            <h1>Modal content</h1>
          </PanelContent>
        </Panel>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
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
      </>
    )

  })
