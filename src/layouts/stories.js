import React from 'react'
import Button from '../Button'
import ButtonGroup from '../ButtonGroup'
import Panel from '../Panel'
import PanelContent from '../Panel/Content'
import Field from '../Field'
import Input from '../Input'
import CheckGroup from '../CheckGroup'
import Check from '../Check'

export default {
  title: 'Layouts'
}

export const Form = () =>
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

export const ImgContent = () => 
  <div className="ola_ly-imgContent">
    <img src="https://placehold.it/300x300" />

    <div>
      Lorem ipsum
    </div>
  </div>

export const Columns = () =>
  <div className="ola_ly-columns">
    <div>
      This is column 1
    </div>
    <div>
      This is column 2
    </div>
  </div>

export const pageCenter = () => 
  <section className="ola_ly-pageCenter">
    <header>
      <h1 className="ola-title">Welcome to this page</h1>
      <p className="ola-callout ola-gray">This is a introductory text of this process</p>
    </header>
  
    <div>
      This is a block
    </div>
  
    <div className="is-fullwidth">
      A full-width block
    </div>
  
    <footer>
        Footer
    </footer>
  </section>