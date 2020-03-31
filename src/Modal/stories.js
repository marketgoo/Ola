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
  .add('Scroll', () => {

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
            <h1>No scroll panel content</h1>
          </ModalContent>
          <ModalContent variant="scroll">
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
      <Modal open variant="center">
        <ModalContent>
          Lorem ipsum
        </ModalContent>
      </Modal>
    </>
  )

  .add('Not closable', () =>
    <>
      <Modal open closable={false}>
        <ModalHeader title="Modal center not closable">
          <ProgressBar value="20" max="100" />
        </ModalHeader>
        <ModalContent>
          Lorem ipsum
        </ModalContent>
        <ModalFooter>
          <ButtonGroup variant='reversed'>
            <Button variant='primary'>Close</Button>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    </>
  )

  .add('Full width', () =>
    <>
      <Modal open>
        <ModalHeader
          title="Modal Header"
          intro={<><strong>Lorem ipsum</strong> for testing intro</>}>
          <ProgressBar value="20" max="100" />
        </ModalHeader>
        <ModalContent variant="fullwidth">
          <PanelContent title="Conten Title">
            Panel content
          </PanelContent>
        </ModalContent>
      </Modal>
    </>
  )
