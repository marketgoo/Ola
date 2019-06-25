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
    FieldDescription,
} from '../src'

storiesOf('Layout', module)
  .addDecorator(withInfo)
  .addDecorator(story => <div className="ola preview-centered is-wide ola_util-bg">{story()}</div>)
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
