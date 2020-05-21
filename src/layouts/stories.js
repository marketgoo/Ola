import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '../Button'
import ButtonGroup from '../ButtonGroup'
import Panel from '../Panel'
import PanelContent from '../Panel/Content'
import Field from '../Field'
import Input from '../Input'
import CheckGroup from '../CheckGroup'
import Check from '../Check'

storiesOf('Layout')
  .add('ola_ly-form', () => (
    <div className="ola_ly-form">
      <header className="ola_panel-header">
        <h2 className="ola_panel-display">Log in</h2>
  
        <p className="ola_panel-intro">
              Try MarketGoo Pro for 10 days and decide later if you want to continue optimizing your site.
        </p>
      </header>
  
      <Field id="field-name" label="Email">
        <Input type="email" placeholder="name@example.com" />
      </Field>
  
      <Field id="field-password" label="Password">
        <Input type="password" placeholder="Super secret" />
      </Field>
  
      <ButtonGroup reversed>
        <Button variant='primary'>Log in</Button>
        <Button variant='secondary'>Forgot password?</Button>
      </ButtonGroup>
    </div>
  ))
  .add('ola_ly-imgContent', () => (
    <Panel>
      <PanelContent>
        <div className="ola_ly-imgContent">
          <img src="https://placehold.it/300x300" />
  
          <div className="ola_ly-form">
            <header className="ola_panel-header">
              <h2 className="ola_panel-display">Log in</h2>
  
              <p className="ola_panel-intro">
                          Try MarketGoo Pro for 10 days and decide later if you want to continue optimizing your site.
              </p>
            </header>
  
            <Field id="field-name" label="Email">
              <Input type="email" placeholder="name@example.com" />
            </Field>
  
            <Field id="field-password" label="Password">
              <Input type="password" placeholder="Super secret" />
            </Field>
  
            <ButtonGroup reversed>
              <Button variant='primary'>Log in</Button>
              <Button variant='secondary'>Forgot password?</Button>
            </ButtonGroup>
          </div>
        </div>
      </PanelContent>
    </Panel>
  ))
  .add('ola_ly-columns', () => (
    <Panel>
      <PanelContent>
        <div className="ola_ly-columns">
          <div className="ola_ly-form">
            <Field id="field-name" label="Email">
              <Input type="email" placeholder="name@example.com" />
            </Field>
  
            <Field id="field-password" label="Password">
              <Input type="password" placeholder="Super secret" />
            </Field>
          </div>
          <div className="ola_ly-form">
            <Field id="field-name2" label="Email">
              <Input type="email" placeholder="name@example.com" />
            </Field>
  
            <Field id="field-password2" label="Password">
              <Input type="password" placeholder="Super secret" />
            </Field>
          </div>
        </div>
      </PanelContent>
    </Panel>
  ))
  .add('ola_ly-pageCenter', () => (
    <section className="ola_ly-pageCenter">
      <header>
        <h1 className="ola-title">Welcome to this page</h1>
        <p className="ola-callout ola-gray">This is a introductory text of this process</p>
      </header>
  
      <div className="ola_ly-form">
        <Field id="field-name2" label="Email">
          <Input type="email" placeholder="name@example.com" />
        </Field>
  
        <Field id="field-password2" label="Password">
          <Input type="password" placeholder="Super secret" />
        </Field>
      </div>
  
      <div className="is-fullwidth">
        <CheckGroup variant="column">
          <Check variant="area">
            <strong className="ola-callout">Test 1</strong>
            <img src="https://www.marketgoo.com/wp-content/uploads/2018/07/Local-business-icon-1.svg" />
            <p className="ola-callout">Lorem ipsum dolor sit amet</p>
          </Check>
          <Check variant="area">
            <strong className="ola-callout">Test 1</strong>
            <img src="https://www.marketgoo.com/wp-content/uploads/2018/07/Local-business-icon-1.svg" />
            <p className="ola-callout">Lorem ipsum dolor sit amet</p>
          </Check>
          <Check variant="area">
            <strong className="ola-callout">Test 1</strong>
            <img src="https://www.marketgoo.com/wp-content/uploads/2018/07/Local-business-icon-1.svg" />
            <p className="ola-callout">Lorem ipsum dolor sit amet</p>
          </Check>
        </CheckGroup>
      </div>
  
      <footer>
        <ButtonGroup>
          <Button href="#" variant="primary">Continue</Button>
        </ButtonGroup>
      </footer>
    </section>
  ))