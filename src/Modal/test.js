import React from 'react'
import Modal from './'
import ModalHeader from './Header'
import ModalContent from './Content'
import ModalFooter from './Footer'
import renderer from 'react-test-renderer'


it('Default Modal', () => {
  const tree = renderer
    .create(
      <Modal onClose={() => alert('onClick event')}>
        <ModalHeader
          title="Modal Header"
          intro={<><strong>Lorem ipsum</strong> for testing intro</>}
        >
          This is the extra content
        </ModalHeader>
        <ModalContent>
          <p>Modal content</p>
        </ModalContent>
        <ModalFooter>
          This is the footer
        </ModalFooter>
      </Modal>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
