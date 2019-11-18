import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import {
  Button,
  Panel,
  PanelContent,
  ButtonGroup,
  Input,
  Field,
  CheckArea,
} from '../dist'

const random_option_values_with_description = [
  {
    label: '<strong>Test 1</strong>Lorem ipsum dolor sit amet.',
    value: 'test1'
  },
  {
    label: '<strong>Test 2</strong>Lorem ipsum dolor sit amet.',
    value: 'test2'
  },
  {
    label: '<strong>Test 3</strong>Lorem ipsum dolor sit amet.',
    value: 'test3'
  },
  {
    label: '<strong>Test 4</strong>Lorem ipsum dolor sit amet.',
    value: 'test4'
  }
]

storiesOf('Layout', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola ola-bg">{story()}</div>)
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

          <div>
              <Field id="field-name2" label="Email">
                  <Input type="email" placeholder="name@example.com" />
              </Field>

              <Field id="field-password2" label="Password">
                  <Input type="password" placeholder="Super secret" />
              </Field>
          </div>

          <div className="is-fullwidth">
            <CheckArea htmlOptions options={random_option_values_with_description} variant="column" />
          </div>

          <footer>
            <ButtonGroup>
              <Button href="#" variant="primary">Continue</Button>
            </ButtonGroup>
          </footer>
      </section>
    ))
