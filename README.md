![logo Ola](https://raw.githubusercontent.com/marketgoo/Ola/master/ola.png)

React implementation of **Ola** design system created by **marketgoo**.

[![Build Status](https://travis-ci.org/marketgoo/Ola.svg?branch=development)](https://travis-ci.org/marketgoo/Ola)

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

### Accordion

- [Design specs](https://zeroheight.com/22mjgbuf6/p/725942)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/accordion--default)

### Button

- [Design specs](https://zeroheight.com/22mjgbuf6/p/60c52c/b/69b128)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/button--viewer)

### ButtonGroup

- [Design specs](https://zeroheight.com/22mjgbuf6/p/794b6c)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/buttongroup--viewer)

### ButtonIcon

- [Design specs](https://zeroheight.com/22mjgbuf6/p/849794)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/buttonicon--default)

### Check

- [Design specs for Checkbox](https://zeroheight.com/22mjgbuf6/p/85c317/b/42c470)
- [Design specs for Radio](https://zeroheight.com/22mjgbuf6/p/55cdda)
- [Design specs for Check Area](https://zeroheight.com/22mjgbuf6/p/31ae5e)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/check--default)

### CheckGroup

- [Storybook](https://marketgoo.github.io/Ola/?path=/story/checkgroup--row-check-area)

### Field

- [Design specs](https://zeroheight.com/22mjgbuf6/p/12656e/b/741ccf)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/field--default)

### Icon

- [Design specs](https://zeroheight.com/22mjgbuf6/p/000506)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/icon--sizes)

### Input

- [Design specs](https://zeroheight.com/22mjgbuf6/p/12656e/t/a575)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/input--empty)

### Level

- [Design specs](https://zeroheight.com/22mjgbuf6/p/01a560)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/level--no-value)

### Metric

- [Design specs](https://zeroheight.com/22mjgbuf6/p/621cfc)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/metric--default)

### Modal

- [Design specs](https://zeroheight.com/22mjgbuf6/p/426a17)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/modal--default)

### Page

- [Design specs](https://zeroheight.com/22mjgbuf6/p/966db5)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/page--default)

### Panel

- [Design specs](https://zeroheight.com/22mjgbuf6/p/92dbc5/b/352660)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/panel--all-elements)

### ProgressBar

- [Design specs](https://zeroheight.com/22mjgbuf6/p/71032c)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/progressbar--progress-element)

### ProgressCircle

- [Design specs](https://zeroheight.com/22mjgbuf6/p/412a1e)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/progresscircle--label-value)

### SearchField

- [Design specs](https://zeroheight.com/22mjgbuf6/p/83e369)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/searchfield--busy)

### Select

- [Design specs](https://zeroheight.com/22mjgbuf6/p/12656e/t/7b7d)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/select--default)

### Spinner

- [Design specs](https://zeroheight.com/22mjgbuf6/p/01ddf2/b/21deb0)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/spinner--viewer)

### Switch

- [Design specs](https://zeroheight.com/22mjgbuf6/p/18645f)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/switch--default)

### Table

- [Design specs](https://zeroheight.com/22mjgbuf6/p/15f90e)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/table--selectable)

### Tag

- [Design specs](https://zeroheight.com/22mjgbuf6/p/48a462/b/3764b3)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/tag--default)

### Task

- [Design specs](https://zeroheight.com/22mjgbuf6/p/14cad2)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/task--error)

### TaskGroup

- [Storybook](https://marketgoo.github.io/Ola/?path=/story/taskgroup--success)

## Other Utilities

- CSS classes with design tokens: [Storybook](https://marketgoo.github.io/Ola/?path=/story/utils--font-styles)
- CSS classes with common layouts: [Storybook](https://marketgoo.github.io/Ola/?path=/story/layout--ola-ly-form)

## Browser support

Microsoft Edge does not support the [summary] element, so the Task component is always opened.
You can use polyfill like [https://github.com/javan/details-element-polyfill] to solve.
The next version of Edge will come with fully support for summary, so this is a temporary solution.

This library was tested in the following browsers:

- Mozilla Firefox (latests 2 versions)
- Google Chrome (latests 2 versions)
- Opera (latests 2 versions)
- Microsoft Edge (from 79)
- Apple Safari (from 12)
- Apple Safari iOS (from 12)
- Android Chrome (latests 2 versions)
- Firefox for Android (latests 2 versions)

> Internet Explorer is not supported

Tested with [Browserstack](https://www.browserstack.com)

[![Browserstack logo](browserstack.png)](https://www.browserstack.com)

---

Please see [CHANGELOG](https://github.com/marketgoo/Ola/blob/master/CHANGELOG.md) for more information about recent changes.

The MIT License (MIT). Please see [LICENSE](https://github.com/marketgoo/Ola/blob/master/LICENSE) for more information.

[summary]: https://caniuse.com/#feat=details
[https://github.com/javan/details-element-polyfill]: https://github.com/javan/details-element-polyfill
