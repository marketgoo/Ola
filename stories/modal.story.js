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
          <button className="ola_modal-close">
            <svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.9200502,12 C31.2158504,12 31.4697921,12.1046901 31.6818753,12.3140704 C31.8939584,12.5234506 32,12.7761027 32,13.0720268 C32,13.3679509 31.8939584,13.6219989 31.6818753,13.8341709 L23.5110925,22.0083752 L31.6818753,30.1742044 C31.8939584,30.3863763 32,30.6376326 32,30.9279732 C32,31.2238973 31.8939584,31.4765494 31.6818753,31.6859296 C31.4697921,31.8953099 31.2158504,32 30.9200502,32 C30.62425,32 30.3730989,31.8967058 30.1665969,31.6901173 L21.9958141,23.5242881 L13.8334031,31.6901173 C13.6269011,31.8967058 13.3729594,32 13.0715781,32 C12.7757779,32 12.5232315,31.8967058 12.3139389,31.6901173 C12.1046463,31.4835288 12,31.2322725 12,30.9363484 C12,30.6348409 12.103251,30.3807929 12.309753,30.1742044 L20.4805358,22.0083752 L12.309753,13.8341709 C12.103251,13.6275824 12,13.3763261 12,13.080402 C12,12.7844779 12.1046463,12.5304299 12.3139389,12.318258 C12.5232315,12.106086 12.7757779,12 13.0715781,12 C13.3673783,12 13.6213199,12.106086 13.8334031,12.318258 L21.9958141,20.4924623 L30.1665969,12.318258 C30.3786801,12.106086 30.6298312,12 30.9200502,12 Z"></path>
            </svg>
          </button>
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
