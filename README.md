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

Name | Design
-----|-------------
Button | [Button](https://zeroheight.com/22mjgbuf6/p/60c52c/b/69b128)
ButtonGroup | --
ButtonIcon | --
Check | [Checkbox](https://zeroheight.com/22mjgbuf6/p/85c317/b/42c470) <br> [Radio](https://zeroheight.com/22mjgbuf6/p/55cdda)
CheckArea | [Check Area](https://zeroheight.com/22mjgbuf6/p/31ae5e)
CheckGroup | [Radio](https://zeroheight.com/22mjgbuf6/p/55cdda)
Field | [Fields](https://zeroheight.com/22mjgbuf6/p/12656e/b/741ccf)
Icon | [Icons](https://zeroheight.com/22mjgbuf6/p/000506)
Input | [Fields > Inputs](https://zeroheight.com/22mjgbuf6/p/12656e/t/a575)
Metric | [Metrics](https://zeroheight.com/22mjgbuf6/p/621cfc)
Modal | [Modal](https://zeroheight.com/22mjgbuf6/p/426a17)
Panel | [Panel](https://zeroheight.com/22mjgbuf6/p/92dbc5/b/352660)
ProgressBar | [Progress Bar](https://zeroheight.com/22mjgbuf6/p/71032c)
ProgressCircle | [Progress Circle](https://zeroheight.com/22mjgbuf6/p/412a1e)
SearchField | [Search Field](https://zeroheight.com/22mjgbuf6/p/83e369)
Select | [Inputs > Selectors](https://zeroheight.com/22mjgbuf6/p/12656e/t/7b7d)
Spinner | [Spinner](https://zeroheight.com/22mjgbuf6/p/01ddf2/b/21deb0)
Switch | [Switch](https://zeroheight.com/22mjgbuf6/p/18645f)
Tag | [Tag](https://zeroheight.com/22mjgbuf6/p/48a462/b/3764b3)
Task | --
TaskGroup | --

---

Please see [CHANGELOG](https://github.com/marketgoo/Ola/blob/master/CHANGELOG.md) for more information about recent changes.

The MIT License (MIT). Please see [LICENSE](https://github.com/marketgoo/Ola/blob/master/LICENSE) for more information.
