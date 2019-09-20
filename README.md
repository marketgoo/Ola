![logo Ola](https://raw.githubusercontent.com/marketgoo/Ola/master/ola.png)

React implementation of **Ola** design system created by **marketgoo**.

- [View *Ola* specs](https://zeroheight.com/22mjgbuf6)
- [View Storybook demos](https://marketgoo.github.io/Ola/)

## Install

```sh
npm i @marketgoo/ola
```

## Usage

Import Ola styles in your document and add the `ola` class in the root of your app (usually the `html` element)

```html
<html class="ola">
  <head>
    <!-- Your head content -->
    <link rel="stylesheet" href="./node_modules/@marketgoo/ola/dist/index.css">
  </head>

  <body>
    <!-- Your body content -->
  </body>
</html>
```


Import Ola components in your app
```js

import { Button } from "@marketgoo/ola";

const Example = () => (
  <div>
    <Button variant="primary">My Button</Button>
  </div>
)


```

## Available components

Name | Design | Demo
-----|--------|-------
Button | [Button](https://zeroheight.com/22mjgbuf6/p/60c52c/b/69b128) | [Button](https://marketgoo.github.io/Ola/?path=/story/button--all-buttons)
ButtonGroup | -- | [ButtonGroup](https://marketgoo.github.io/Ola/?path=/story/button--button-group)
ButtonIcon | -- | [ButtonIcon](https://marketgoo.github.io/Ola/?path=/story/button--button-icon)
Check | [Checkbox](https://zeroheight.com/22mjgbuf6/p/85c317/b/42c470) <br> [Radio](https://zeroheight.com/22mjgbuf6/p/55cdda) | [Check](https://marketgoo.github.io/Ola/?path=/story/form--check)
CheckArea | [Check Area](https://zeroheight.com/22mjgbuf6/p/31ae5e) | [Rows](https://marketgoo.github.io/Ola/?path=/story/form--checkarea-with-html-description) <br> [Columns](https://marketgoo.github.io/Ola/?path=/story/form--checkarea-column)
CheckGroup | [Radio](https://zeroheight.com/22mjgbuf6/p/55cdda) | [CheckGroup](https://marketgoo.github.io/Ola/?path=/story/form--checkgroup)
Field | [Fields](https://zeroheight.com/22mjgbuf6/p/12656e/b/741ccf) | [Field](https://marketgoo.github.io/Ola/?path=/story/form--field) <br> [Field Error](https://marketgoo.github.io/Ola/?path=/story/form--field-error) <br> [Field Disabled](https://marketgoo.github.io/Ola/?path=/story/form--field-disabled) <br> [Field with custom description](https://marketgoo.github.io/Ola/?path=/story/form--field-custom-description)
Icon | [Icons](https://zeroheight.com/22mjgbuf6/p/000506) | [Icon](https://marketgoo.github.io/Ola/?path=/story/icon--all)
Input | [Fields > Inputs](https://zeroheight.com/22mjgbuf6/p/12656e/t/a575) | [Input](https://marketgoo.github.io/Ola/?path=/story/form--input-empty) <br> [Input Error](https://marketgoo.github.io/Ola/?path=/story/form--input-empty-error) <br> [Input disabled](https://marketgoo.github.io/Ola/?path=/story/form--input-empty-disabled) <br> [Textarea](https://marketgoo.github.io/Ola/?path=/story/form--input-textarea)
Metric | [Metrics](https://zeroheight.com/22mjgbuf6/p/621cfc) | [Metric](https://marketgoo.github.io/Ola/?path=/story/metric--all) <br> [Alternative metric](https://marketgoo.github.io/Ola/?path=/story/metric--alternative)
Modal | [Modal](https://zeroheight.com/22mjgbuf6/p/426a17) | [Modal](https://marketgoo.github.io/Ola/?path=/story/modal--all-elements)
Panel | [Panel](https://zeroheight.com/22mjgbuf6/p/92dbc5/b/352660) | [Panel](https://marketgoo.github.io/Ola/?path=/story/panel--all-elements)
ProgressBar | [Progress Bar](https://zeroheight.com/22mjgbuf6/p/71032c) | [Progress](https://marketgoo.github.io/Ola/?path=/story/progress-bar--progress-element) <br> [Meter](https://marketgoo.github.io/Ola/?path=/story/progress-bar--meter-element)
ProgressCircle | [Progress Circle](https://zeroheight.com/22mjgbuf6/p/412a1e) | [Progress Circle](https://marketgoo.github.io/Ola/?path=/story/progress-circle--default)
SearchField | [Search Field](https://zeroheight.com/22mjgbuf6/p/83e369) | [Search field](https://marketgoo.github.io/Ola/?path=/story/form--searchfield)
Select | [Inputs > Selectors](https://zeroheight.com/22mjgbuf6/p/12656e/t/7b7d) | [Select](https://marketgoo.github.io/Ola/?path=/story/form--select) <br> [Select field](https://marketgoo.github.io/Ola/?path=/story/form--select-field)
Spinner | [Spinner](https://zeroheight.com/22mjgbuf6/p/01ddf2/b/21deb0) | [Spinner](https://marketgoo.github.io/Ola/?path=/story/spinner--default)
Switch | [Switch](https://zeroheight.com/22mjgbuf6/p/18645f) | [Switch](https://marketgoo.github.io/Ola/?path=/story/form--switch)
Tag | [Tag](https://zeroheight.com/22mjgbuf6/p/48a462/b/3764b3) | [Tags](https://marketgoo.github.io/Ola/?path=/story/tag--all)
Task | -- | [Tasks](https://marketgoo.github.io/Ola/?path=/story/tasks--mixed)
TaskGroup | -- | [Tasks](https://marketgoo.github.io/Ola/?path=/story/tasks--mixed)


## Browser support

This library was tested in the following browsers:

- Mozilla Firefox (latests 2 versions)
- Google Chrome (latests 2 versions)
- Opera (latests 2 versions)
- Microsoft Edge 18
- Apple Safari 12
- Apple Safari iOS 12
- Android Chrome (latests 2 versions)
- Firefox for Android (latests 2 versions)

> Internet Explorer is not supported

---

Please see [CHANGELOG](https://github.com/marketgoo/Ola/blob/master/CHANGELOG.md) for more information about recent changes.

The MIT License (MIT). Please see [LICENSE](https://github.com/marketgoo/Ola/blob/master/LICENSE) for more information.
