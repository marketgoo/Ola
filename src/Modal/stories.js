import React from 'react'

import Modal from './'
import ModalHeader from './Header'
import ModalContent from './Content'
import ModalFooter from './Footer'
import Button from '../Button'
import ButtonGroup from '../ButtonGroup'
import SearchField from '../SearchField'
import ProgressBar from '../ProgressBar'

export default {
  title: 'Modal',
  component: Modal,
  args: {
    open: true
  },
  argTypes: {
    onOpen: { action: 'opened' },
    onClose: { action: 'closed' },
    children: { control: { disable: true }}
  }
}

export const Base = (args) => 
  <Modal {...args}>
    <ModalHeader
      title="Modal Header"
      intro={<><strong>Lorem ipsum</strong> for testing intro</>}>
    </ModalHeader>
    <ModalContent>
      <SearchField id="search-button" placeholder="Filter elements" textButton="Test Search" />
    </ModalContent>
    <ModalContent variant="scroll">
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
      <p className="ola-body">Modal content</p>
    </ModalContent>
    <ModalFooter>
      <ButtonGroup variant='reversed'>
        <Button variant='primary'>Primary</Button>
        <Button variant='secondary'>Default Button</Button>
      </ButtonGroup>
    </ModalFooter>
  </Modal>

export const Center = () => 
  <Modal open variant="center">
    <ModalContent>
      Lorem ipsum
    </ModalContent>
  </Modal>

export const Narrow = () =>
  <Modal open variant="narrow">
    <ModalContent>
      Lorem ipsum
    </ModalContent>
  </Modal>

export const NotClosable = () =>
  <Modal open closable={false}>
    <ModalHeader title="Modal center not closable">
    </ModalHeader>
    <ModalContent>
      Lorem ipsum
    </ModalContent>
    <ModalFooter>
      <div>
        Text in the footer
      </div>
      <ButtonGroup variant='reversed'>
        <Button variant='primary'>Close</Button>
      </ButtonGroup>
    </ModalFooter>
  </Modal>

export const FullWidth = () =>
  <Modal open>
    <ModalHeader
      title="Do you want to remove"
      intro={<><strong>Lorem ipsum</strong> for testing intro</>}>
      <ProgressBar value="20" max="100" />
    </ModalHeader>
    <ModalContent variant="fullwidth" style={{ background: 'var(--gray-xlight)'}}>
      <p>Modal content</p>
    </ModalContent>
    <ModalContent variant="fullwidth-scroll" style={{ background: 'var(--gray-xlight)'}}>
      <p>Modal content</p>
      <p>Modal content</p>
      <p>Modal content</p>
      <p>Modal content</p>
      <p>Modal content</p>
      <p>Modal content</p>
      <p>Modal content</p>
      <p>Modal content</p>
      <p>Modal content</p>
      <p>Modal content</p>
      <p>Modal content</p>
      <p>Modal content</p>
      <p>Modal content</p>
      <p>Modal content</p>
      <p>Modal content</p>
      <p>Modal content</p>
      <p>Modal content</p>
      <p>Modal content</p>
      <p>Modal content</p>
      <p>Modal content</p>
      <p>Modal content</p>
      <p>Modal content</p>
      <p>Modal content</p>
      <p>Modal content</p>
      <p>Modal content</p>
    </ModalContent>
  </Modal>

export const OnlyHeader = () => 
  <Modal open>
    <ModalHeader
      title="Do you want to remove"
      intro={<><strong>Lorem ipsum</strong> for testing intro</>}>
    </ModalHeader>
  </Modal>

export const OnlyHeaderAndFooter = () => 
  <Modal open variant="narrow">
    <ModalHeader
      title="Do you want to remove"
      intro={<><strong>Lorem ipsum</strong> for testing intro</>}>
    </ModalHeader>
    <ModalFooter>
      <ButtonGroup variant='center'>
        <Button variant='primary'>Close</Button>
      </ButtonGroup>
    </ModalFooter>
  </Modal>

export const OnlyFooter = () =>
  <Modal open>
    <ModalFooter>
      <ButtonGroup>
        <Button variant='primary'>Close</Button>
      </ButtonGroup>
    </ModalFooter>
  </Modal>

export const OnlyContent = () =>
  <Modal open>
    <ModalContent>
      <p>Modal content</p>
    </ModalContent>
  </Modal>

export const TwoContents = () =>
  <Modal open>
    <ModalContent>
      <p>Modal content</p>
    </ModalContent>
    <ModalContent>
      <p>Modal content</p>
    </ModalContent>
  </Modal>

export const OnlyContentAndFooter = () =>
  <Modal open>
    <ModalContent>
      <p>Modal content</p>
    </ModalContent>
    <ModalContent>
      <p>Modal content</p>
    </ModalContent>
    <ModalFooter>
      <ButtonGroup variant='reversed'>
        <Button variant='primary'>Close</Button>
      </ButtonGroup>
    </ModalFooter>
  </Modal>

export const OnlyHeaderAndContent = () =>
  <Modal open>
    <ModalHeader
      title="Do you want to remove"
      intro={<><strong>Lorem ipsum</strong> for testing intro</>}>
    </ModalHeader>
    <ModalContent>
      <p>Modal content</p>
    </ModalContent>
    <ModalContent>
      <p>Modal content</p>
    </ModalContent>
  </Modal>
