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

### Accordion

- [Design specs](https://zeroheight.com/22mjgbuf6/p/725942)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/accordion--base)

### Button

- [Design specs](https://zeroheight.com/22mjgbuf6/p/60c52c/b/69b128)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/button--base)

### ButtonGroup

- [Design specs](https://zeroheight.com/22mjgbuf6/p/794b6c)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/buttongroup--base)

### ButtonIcon

- [Design specs](https://zeroheight.com/22mjgbuf6/p/849794)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/buttonicon--base)

### Carousel

- [Storybook](https://marketgoo.github.io/Ola/?path=/story/carousel--base)

### ChartColumn

- [Storybook](https://marketgoo.github.io/Ola/?path=/story/chartcolumn--base)

### ChartLine

- [Storybook](https://marketgoo.github.io/Ola/?path=/story/chartline--base)

### Check

- [Design specs for Checkbox](https://zeroheight.com/22mjgbuf6/p/85c317/b/42c470)
- [Design specs for Radio](https://zeroheight.com/22mjgbuf6/p/55cdda)
- [Design specs for Check Area](https://zeroheight.com/22mjgbuf6/p/31ae5e)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/check--base)

### CheckGroup

- [Storybook](https://marketgoo.github.io/Ola/?path=/story/checkgroup--base)

### Device

- [Storybook](https://marketgoo.github.io/Ola/?path=/story/device--base&args=variant:iphone-8)

### Field

- [Design specs](https://zeroheight.com/22mjgbuf6/p/12656e/b/741ccf)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/field--base)

### Icon

- [Design specs](https://zeroheight.com/22mjgbuf6/p/000506)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/icon--base)

### Input

- [Design specs](https://zeroheight.com/22mjgbuf6/p/12656e/t/a575)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/input--base)

### IssueDropDown

- [Storybook](https://marketgoo.github.io/Ola/?path=/story/issuedropdown--drop-down)

### Keyword

- [Storybook](https://marketgoo.github.io/Ola/?path=/story/keyword--base)

### Kpi

- [Storybook](https://marketgoo.github.io/Ola/?path=/story/kpi--base)

### Level

- [Design specs](https://zeroheight.com/22mjgbuf6/p/01a560)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/level--base&args=variant:medium;size:medium)

### Menu + MenuOption

- [Design specs](https://zeroheight.com/22mjgbuf6/p/88cf8e-tooltip)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/menu-menuoption--base)

### Metric

- [Design specs](https://zeroheight.com/22mjgbuf6/p/621cfc)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/metric--base)

### Modal

- [Design specs](https://zeroheight.com/22mjgbuf6/p/426a17)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/modal--base)

### Page

- [Design specs](https://zeroheight.com/22mjgbuf6/p/966db5)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/page--base)

### Panel

- [Design specs](https://zeroheight.com/22mjgbuf6/p/92dbc5/b/352660)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/panel--all-elements)

### ProgressBar

- [Design specs](https://zeroheight.com/22mjgbuf6/p/71032c)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/progressbar--base)

### ProgressCircle

- [Design specs](https://zeroheight.com/22mjgbuf6/p/412a1e)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/progresscircle--base)

### Score

- [Storybook](https://marketgoo.github.io/Ola/?path=/story/score--base)

### SearchField

- [Design specs](https://zeroheight.com/22mjgbuf6/p/83e369)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/searchfield--base)

### Section

- [Storybook](https://marketgoo.github.io/Ola/?path=/story/section--all-elements)

### Segment

- [Storybook](http://localhost:6006/?path=/story/segment--base)

### Select

- [Design specs](https://zeroheight.com/22mjgbuf6/p/12656e/t/7b7d)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/select--base)

### SpeedMeter

- [Storybook](https://marketgoo.github.io/Ola/?path=/story/speedmeter--base)

### Spinner

- [Design specs](https://zeroheight.com/22mjgbuf6/p/01ddf2/b/21deb0)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/spinner--base)

### Switch

- [Design specs](https://zeroheight.com/22mjgbuf6/p/18645f)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/switch--base)

### Table

- [Design specs](https://zeroheight.com/22mjgbuf6/p/15f90e)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/table--base)

### Tabs

- [Storybook](https://marketgoo.github.io/Ola/?path=/story/tabs--base)

### Tag

- [Design specs](https://zeroheight.com/22mjgbuf6/p/48a462/b/3764b3)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/tag--base)

### Task

- [Design specs](https://zeroheight.com/22mjgbuf6/p/14cad2)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/task--base)

### TaskGroup

- [Storybook](https://marketgoo.github.io/Ola/?path=/story/taskgroup--base)

### Thumbnail

- [Storybook](https://marketgoo.github.io/Ola/?path=/story/thumbnail--base)

### Tooltip

- [Design specs](https://zeroheight.com/22mjgbuf6/p/88cf8e-tooltip)
- [Storybook](https://marketgoo.github.io/Ola/?path=/story/tooltip--base)

### TreeList

- [Storybook](https://marketgoo.github.io/Ola/?path=/story/treelist--base)

### Layouts

- [Storybook](https://marketgoo.github.io/Ola/?path=/story/layouts--form)

## Other Utilities

- Font Styles: [Storybook](https://marketgoo.github.io/Ola/?path=/story/utils--font-styles)
- Colors: [Storybook](https://marketgoo.github.io/Ola/?path=/story/utils--colors)
- Background Colors: [Storybook](https://marketgoo.github.io/Ola/?path=/story/utils--background-colors)
- Black Bolds: [Storybook](https://marketgoo.github.io/Ola/?path=/story/utils--black-bolds)
- Margins: [Storybook](https://marketgoo.github.io/Ola/?path=/story/utils--margins)

## Browser support

This library was tested in the following browsers:

- Mozilla Firefox (latests 2 versions)
- Google Chrome (latests 2 versions)
- Opera (latests 2 versions)
- Microsoft Edge (latest 2 versions)
- Apple Safari (from 12)
- Apple Safari iOS (from 12)
- Android Chrome (latests 2 versions)
- Firefox for Android (latests 2 versions)

> * Internet Explorer is not supported
> * Microsoft Edge <= 18 is not supported

Tested with [Browserstack](https://www.browserstack.com)

[![Browserstack logo](browserstack.png)](https://www.browserstack.com)

---

Please see [CHANGELOG](https://github.com/marketgoo/Ola/blob/master/CHANGELOG.md) for more information about recent changes.

The MIT License (MIT). Please see [LICENSE](https://github.com/marketgoo/Ola/blob/master/LICENSE) for more information.

[summary]: https://caniuse.com/#feat=details
[https://github.com/javan/details-element-polyfill]: https://github.com/javan/details-element-polyfill
