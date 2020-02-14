import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

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

    const [isOpen, setIsOpen] = useState()

    return (
      <>
        <Panel>
          <PanelContent title="Test dialog">
            <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
          </PanelContent>
        </Panel>
        <Modal
          open={isOpen}
          onOpen={ action('onOpen event') }
          onClose={() => {
            setIsOpen(false)
            action('onClose event')()
          }}
        >
          <ModalHeader
            title="Modal Header"
            intro={<><strong>Lorem ipsum</strong> for testing intro</>}>
            <ProgressBar value="20" max="100" />
          </ModalHeader>
          <ModalContent>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
            <h1>Panel content</h1>
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

  .add('Center', () =>
    <>
      <Modal open extraClass="is-center">
        <ModalContent>
          Lorem ipsum
        </ModalContent>
      </Modal>
    </>
  )
