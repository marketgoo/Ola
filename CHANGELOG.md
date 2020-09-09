# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [0.8.0] - Unreleased
### Added
- New component `Section` [#150], [#151] including some subcomponents:
  - `SectionHeader`
  - `SectionContent`
  - `SectionSubheader`
  - `SectionFooter`
- New prop `description` to `ProgressCircle` [#145], [#146]
- New prop `icon` to `Button` [#133], [#144]
- New icon `NewWindow` [#133], [#144]
- New props `variant` and `selected` to `MenuOption` [#149]
- New layout `ly-asideMenu` [#148]
- New layout `ly-asideHeader`
- New helpers `ola-width-narrow` and `ola-width-medium`
- New variant `full-list` to `CheckGroup` to remove scroll and max-height

### Fixed
- Field component can have multiple child elements [#154] [#155]

## [0.7.0] - 2020-07-08
### Added
- Padding top and bottom to `PanelContent` when it's the first/last child.
- New helpers:
  - `.ola-nomargin-top`
  - `.ola-nomargin-bottom`
  - `.ola-margin-top-1`
  - `.ola-margin-top-2`
  - `.ola-margin-top-3`
  - `.ola-margin-bottom-1`
  - `.ola-margin-bottom-2`
  - `.ola-margin-bottom-3`
  - `.ola-margin-left-1`
  - `.ola-margin-left-2`
  - `.ola-margin-left-3`
  - `.ola-margin-right-1`
  - `.ola-margin-right-2`
  - `.ola-margin-right-3`

### Changed
- Font sizes in narrow screens (mobile) are smaller [#135] [#136]
- The `Modal` component blocks the document scroll while it's open [#140]
- Changed some variables in buttons component to ease the theme customization

### Fixed
- `ola_ly-*` styles using `--column-gap-*` and `--row-gap-*` variables instead fixed sizes.
- Cropped shadow of focused buttons in tables [#132]
- Border radius of `PanelFooter` when is not the last child [#137]
- Updated some devDependencies.

## [0.6.0] - 2020-05-21
### Added
- New variant `fullwidth-scroll` to `ModalContent` [#112]
- New variant `narrow` to `Modal`
- New variant `multiline` to `TableCell`
- Improvements in `SearchField` [#119], [#120], #121:
  - Added `disabled` prop
  - Added `description` prop
  - Added the search icon at the left
  - Moved the spinner of `busy` state to the left.
- New css helper `.ola-black-bolds`
- `className` property to  `PanelFooter`
- New prop `size` to `Tag` component with three sizes: small, medium and big [#130]
- Added the variable `--ola-version` to see the version of Ola used currently in any project.

### Changed
- Styles of `TableCell` with variant `action` for more clearness and fix issues in Safari.
- The label text of `Check` component is `gray-light` on `disabled` state [#129]

### Removed
- The css variable `--inner-gap`

### Fixed
- Background of `TableCell` in a `TableRow` with `is-selectable` class.
- Paddings and alignments in tables.
- `PanelFooter` and `ModalFooter` with multiple elements (not only `ButtonGroup`)
- Improved position calculation of the `Tooltip` within a scrollable element [#109], [#110]
- Fixed big images overflow in `TaskBody`.
- Refactored the css code for padding/margin/gaps using the new css variables `--row-gap-1`, `--row-gap-2`, `--row-gap-3`, `--column-gap-1`, `--column-gap-2`, `--column-gap-3`, and improved the responsiveness.
- Added styles for disabled state to `Check`.
- Allow to override the default text style of the `Check` label
- Color conflicts of `ButtonIcon` inside a `Tag`component [#123]
- Border issue in `TableCell` with variant `action` [#122]
- Overflow long words in Chrome [#126]
- `ButtonGroup` with variant `center` inside `PanelFooter` and `ModalFooter`
- Fixed Tag overflow issues and used `<strong>` instead `<span>`
- Changed the label of `Check` components to gray-light on disabled state [#129]
- Removed cursor pointer style to label (applied by Wordpress) [#129]
- Sometimes the `Tooltip` changes the heigh of the flex container on open.
- Set `letter-spacing` to `0` in the tags, preventing inherited values.

## [0.5.0] - 2020-04-07
### Added
- New icon `plus` [#90]
- New icons `arrowUp` and `arrowDown` [#98]
- Variants to `ButtonIcon` (`primary`, `secondary`, `destructive`, `chevron`) [#89], [#92]
- `disabled` and `busy` states to `ButtonIcon` [#94]
- The `TableCell variant=action` is sticky to right, to ensure it's always visible
- New property `error` to `CheckGroup` [#77], [#104]
- New `Menu` component [#105]

### Changed
- Renamed the property `extraClass` of all components to `className` [#27], [#103]
- Removed scroll in the `ModalContent` component and added a `scroll` variant to enable it [#106]
- Added cursor `pointer` to some interactive components like `Button`, `ButtonIcon`, `Check`, `Accordion` and `MenuOption`

### Removed
- `emptyOption` prop in `Select` component [#96] [#71]

### Fixed
- Component `Tooltip` in a `Table` was not showing properly [#93]
- Styles of `<ol>` elements in `Task` [#97]
- Removed `wavy` text decoration style of links because looks buggy
- Improved `Table` styles to be no required to add `<th>` to all columns.
- `Modal`: The close button conflicts with the extra content of the header

## [0.4.0] - 2020-03-06
### Added
- Property `extraClass` to `Switch`, `ModalHeader`, `PanelHeader`.
- `Field`: Added support for html in `description` and `hint` properties. [#67]
- New component `Tooltip` [#72]
- New icon `Null` [#83], [#86]
- Added `responsive` prop to `Table` component [#99], [#100]

### Changed
- `Switch`: Removed `label` and `htmlLabel` properties. Use `children` to define the label content [#28]
- `ProgressBar`: Removed `description` and `htmlDescription` properties. Use `children` to define the description [#28]
- The signature of `TableCell` component has changed. See [#37] and [#65] for more info.
- `ModalHeader`: Removed the properties `htmlTitle` and `htmlIntro`. The props `title` and `intro` accept strings and nodes as values [#28]
- `PanelHeader`: Removed the properties `htmlTitle` and `htmlIntro`. The props `title` and `intro` accept strings and nodes as values [#28]
- `PanelContent`: Removed the property `htmlTitle`. The prop `title` accepts strings and nodes as values [#28]
- `Metric`: Removed the property `htmlFooter`. The prop `footer` accepts strings and nodes as values [#28]
- `Task`: Removed the property `htmlTitle`. The prop `title` accepts strings and nodes as values [#28]
- `PanelContent`: Removed de wrapper `div`, the component returns a fragment and the `extraClass` is applied directly to `.ola_panel-content` [#11], [#70]
- `Modal` component was changed to use the native `<dialog>` element [#74], [#75]

### Removed
- `FieldDescription` component. Now you can use html in the `description` property of `Field` [#67]

### Fixed
- Removed `display:flex` to Check areas.
- Decrease padding in Check areas in columns.
- Check with variant "option" should be bold on checked [#68]
- Disabled buttons styles
- Lot of css details like spacing in the modal, buttons status colors, etc.

## [0.3.0] - 2019-12-19
### Added
- New component `Accordion`
- Property `extraClass` to `Check`
- Property `variant` to `Check`
- Property `label` to `ProgressCircle`

### Changed
- `CheckGroup` component is now a container with no logic. It accepts three variants: `row`, `column` and `list`.
- The children property of `Check` component is not required.

### Removed
- `CheckArea` component. Use `CheckGroup` with `column` or `row` variant.

### Fixed
- Added styles for `<hr>`
- Fonts utils (`.ola-headline`, `.ola-body`, `.ola-callout`, `.ola-caption`) are now bold if they are applied to `hx`, `strong` or `bold`.
- Default styles for task content [#54]
- Improved Check label styles
- Improved CheckArea styles [#56]
- Fixed `.ola_ly-pageCenter` aligment in narrow screens.
- Fixed width, colors and cursor of `Select` in WordPress.
- Fixed cursor label cursor in WordPress.
- Fixed color of the task titles (from --brand to --black)
- Do not include `test.js` and `stories.js` files in dist

## [0.2.2] - 2019-11-27
### Fixed
- The publish of the previous version

## [0.2.1] - 2019-11-27
### Added
- New css util `.ola-nomargin` to remove all default margins of an element
- New css util `.ola-bold` to assing `bold` font-weight to an element
- New css variables `--accent`, `--accent-dark` and `--accent-focus` applied to some elements that may not use the default `--brand` color [#47]
- New css util `.ola-accent` and `.ola-bg-accent` to use the accent color

### Fixed
- Fixed changelog for v0.2.0 [#44]
- Some `focus` and `hover` styles of `Task` component for usability purposes.
- Removed white background to the component `CheckArea` and added to each `Check` individually [#45]
- The `name` property of `Check` is not longer "test" [#45]

## [0.2.0] - 2019-11-25
### Added
- Component `Task`: new property `extra` to place elements next to title [#40], [#41]
- Component `Button`: new variant `link` [#30], [#36]
- Component `ButtonGroup`: new variant `center` [#34], [#35]
- Layer `pageCenter` [#32]
- CONTRIBUTING.md file [#39]

### Changed
- The boolean property `reversed` of `ButtonGroup` is now a variant (`variant="reversed"`)

### Removed
- Support for React < 16.2. Due the use of fragments, React ^16.2 is required.

## [0.1.2] - 2019-11-18
### Added
- New component `Table` [#7]
- New component `Page` [#8], [#13]
- New component `Level` [#14], [#15]
- New layer `pageCenter` [#33]
- New css utils:
  - `.ola-right` to align text to the right
  - `.ola-center` to center text
  - `.ola-numeric` to display numeric values aligned to right (mainly for tables)
  - Utilities to apply standard colors:
    - `.ola-brand`
    - `.ola-white`
    - `.ola-black`
    - `.ola-gray`
    - `.ola-gray-light`
    - `.ola-gray-xlight`
    - `.ola-error`
    - `.ola-warning`
    - `.ola-success`
    - `.ola-pro`
  - Utilities to apply standard colors as background:
    - `.ola-bg-brand`
    - `.ola-bg-white`
    - `.ola-bg-black`
    - `.ola-bg-gray`
    - `.ola-bg-gray-light`
    - `.ola-bg-gray-xlight`
    - `.ola-bg-error`
    - `.ola-bg-warning`
    - `.ola-bg-success`
    - `.ola-bg-pro`
- Jest and Travis to create and run tests [#20], [#21]
- The component `Button` is a link if the href property is defined [#12]

### Changed
- The `dist` folder exports the modules as CommonJS format instead ES6

### Fixed
- Improved README adding demo links and browser support info
- Task component doesn't look properly in Safari [#6]
- All components are responsive [#16], [#17]
- Strict value comparison in `CheckArea` and `CheckGroup` [#23]

## [0.1.1] - 2019-09-18
### Changed
- Moved the repository from gitlab to github

### Fixed
- Improved README documentation and links [#1], [#2]
- Added the links to the repository and the homepage to package.json

## 0.1.0 - 2019-09-17
### Added
- New component `Button`
- New component `ButtonGroup`
- New component `ButtonIcon`
- New component `Check`
- New component `CheckArea`
- New component `CheckGroup`
- New component `Field` with subcomponent `FieldDescription`
- New component `Icon`
- New component `Input`
- New component `Metric`
- New component `Modal` with subcomponents `ModalContent`, `ModalFooter` and `ModalHeader`
- New component `Panel` with subcomponents `PanelContent`, `PanelHeader` and `PanelFooter`
- New component `ProgressBar`
- New component `ProgressCircle`
- New component `SearchField`
- New component `Select`
- New component `Spinner`
- New component `Switch`
- New component `Tag`
- New component `Task` with subcomponents `TaskBody` and `TaskFooter`
- New component `TaskGroup`
- New css utils:
  - `.ola-bg`
  - `.ola-display`
  - `.ola-title`
  - `.ola-headline`
  - `.ola-body`
  - `.ola-callout`
  - `.ola-caption`

[#1]: https://github.com/marketgoo/Ola/issues/1
[#2]: https://github.com/marketgoo/Ola/issues/2
[#6]: https://github.com/marketgoo/Ola/issues/6
[#7]: https://github.com/marketgoo/Ola/issues/7
[#8]: https://github.com/marketgoo/Ola/issues/8
[#11]: https://github.com/marketgoo/Ola/issues/11
[#12]: https://github.com/marketgoo/Ola/issues/12
[#13]: https://github.com/marketgoo/Ola/issues/13
[#14]: https://github.com/marketgoo/Ola/issues/14
[#15]: https://github.com/marketgoo/Ola/issues/15
[#16]: https://github.com/marketgoo/Ola/issues/16
[#17]: https://github.com/marketgoo/Ola/issues/17
[#20]: https://github.com/marketgoo/Ola/issues/20
[#21]: https://github.com/marketgoo/Ola/issues/21
[#23]: https://github.com/marketgoo/Ola/issues/23
[#27]: https://github.com/marketgoo/Ola/issues/27
[#28]: https://github.com/marketgoo/Ola/issues/28
[#30]: https://github.com/marketgoo/Ola/issues/30
[#32]: https://github.com/marketgoo/Ola/issues/32
[#33]: https://github.com/marketgoo/Ola/issues/33
[#34]: https://github.com/marketgoo/Ola/issues/34
[#35]: https://github.com/marketgoo/Ola/issues/35
[#36]: https://github.com/marketgoo/Ola/issues/36
[#37]: https://github.com/marketgoo/Ola/issues/37
[#39]: https://github.com/marketgoo/Ola/issues/39
[#40]: https://github.com/marketgoo/Ola/issues/40
[#41]: https://github.com/marketgoo/Ola/issues/41
[#44]: https://github.com/marketgoo/Ola/issues/44
[#45]: https://github.com/marketgoo/Ola/issues/45
[#47]: https://github.com/marketgoo/Ola/issues/47
[#54]: https://github.com/marketgoo/Ola/issues/54
[#56]: https://github.com/marketgoo/Ola/issues/56
[#65]: https://github.com/marketgoo/Ola/issues/65
[#67]: https://github.com/marketgoo/Ola/issues/67
[#68]: https://github.com/marketgoo/Ola/issues/68
[#70]: https://github.com/marketgoo/Ola/issues/70
[#71]: https://github.com/marketgoo/Ola/issues/71
[#72]: https://github.com/marketgoo/Ola/issues/72
[#74]: https://github.com/marketgoo/Ola/issues/74
[#75]: https://github.com/marketgoo/Ola/issues/75
[#77]: https://github.com/marketgoo/Ola/issues/77
[#83]: https://github.com/marketgoo/Ola/issues/83
[#86]: https://github.com/marketgoo/Ola/issues/86
[#89]: https://github.com/marketgoo/Ola/issues/89
[#90]: https://github.com/marketgoo/Ola/issues/90
[#92]: https://github.com/marketgoo/Ola/issues/92
[#93]: https://github.com/marketgoo/Ola/issues/93
[#94]: https://github.com/marketgoo/Ola/issues/94
[#96]: https://github.com/marketgoo/Ola/issues/96
[#97]: https://github.com/marketgoo/Ola/issues/97
[#98]: https://github.com/marketgoo/Ola/issues/98
[#99]: https://github.com/marketgoo/Ola/issues/99
[#100]: https://github.com/marketgoo/Ola/issues/100
[#103]: https://github.com/marketgoo/Ola/issues/103
[#104]: https://github.com/marketgoo/Ola/issues/104
[#105]: https://github.com/marketgoo/Ola/issues/105
[#106]: https://github.com/marketgoo/Ola/issues/106
[#109]: https://github.com/marketgoo/Ola/issues/109
[#110]: https://github.com/marketgoo/Ola/issues/110
[#112]: https://github.com/marketgoo/Ola/issues/112
[#119]: https://github.com/marketgoo/Ola/issues/119
[#120]: https://github.com/marketgoo/Ola/issues/120
[#122]: https://github.com/marketgoo/Ola/issues/122
[#123]: https://github.com/marketgoo/Ola/issues/123
[#126]: https://github.com/marketgoo/Ola/issues/126
[#129]: https://github.com/marketgoo/Ola/issues/129
[#130]: https://github.com/marketgoo/Ola/issues/130
[#132]: https://github.com/marketgoo/Ola/issues/132
[#133]: https://github.com/marketgoo/Ola/issues/133
[#135]: https://github.com/marketgoo/Ola/issues/135
[#136]: https://github.com/marketgoo/Ola/issues/136
[#137]: https://github.com/marketgoo/Ola/issues/137
[#140]: https://github.com/marketgoo/Ola/issues/140
[#144]: https://github.com/marketgoo/Ola/issues/144
[#145]: https://github.com/marketgoo/Ola/issues/145
[#146]: https://github.com/marketgoo/Ola/issues/146
[#148]: https://github.com/marketgoo/Ola/issues/148
[#149]: https://github.com/marketgoo/Ola/issues/149
[#150]: https://github.com/marketgoo/Ola/issues/150
[#151]: https://github.com/marketgoo/Ola/issues/151
[#154]: https://github.com/marketgoo/Ola/issues/154
[#155]: https://github.com/marketgoo/Ola/issues/155

[0.8.0]: https://github.com/marketgoo/Ola/compare/v0.7.0...HEAD
[0.7.0]: https://github.com/marketgoo/Ola/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/marketgoo/Ola/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/marketgoo/Ola/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/marketgoo/Ola/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/marketgoo/Ola/compare/v0.2.2...v0.3.0
[0.2.2]: https://github.com/marketgoo/Ola/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/marketgoo/Ola/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/marketgoo/Ola/compare/v0.1.2...v0.2.0
[0.1.2]: https://github.com/marketgoo/Ola/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/marketgoo/Ola/compare/v0.1.0...v0.1.1
