# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

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
[#12]: https://github.com/marketgoo/Ola/issues/12
[#13]: https://github.com/marketgoo/Ola/issues/13
[#14]: https://github.com/marketgoo/Ola/issues/14
[#15]: https://github.com/marketgoo/Ola/issues/15
[#16]: https://github.com/marketgoo/Ola/issues/16
[#17]: https://github.com/marketgoo/Ola/issues/17
[#20]: https://github.com/marketgoo/Ola/issues/20
[#21]: https://github.com/marketgoo/Ola/issues/21
[#23]: https://github.com/marketgoo/Ola/issues/23
[#30]: https://github.com/marketgoo/Ola/issues/30
[#32]: https://github.com/marketgoo/Ola/issues/32
[#33]: https://github.com/marketgoo/Ola/issues/33
[#34]: https://github.com/marketgoo/Ola/issues/34
[#35]: https://github.com/marketgoo/Ola/issues/35
[#36]: https://github.com/marketgoo/Ola/issues/36
[#39]: https://github.com/marketgoo/Ola/issues/39
[#40]: https://github.com/marketgoo/Ola/issues/40
[#41]: https://github.com/marketgoo/Ola/issues/41
[#44]: https://github.com/marketgoo/Ola/issues/44
[#45]: https://github.com/marketgoo/Ola/issues/45
[#47]: https://github.com/marketgoo/Ola/issues/47

[0.2.1]: https://github.com/marketgoo/Ola/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/marketgoo/Ola/compare/v0.1.2...v0.2.0
[0.1.2]: https://github.com/marketgoo/Ola/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/marketgoo/Ola/compare/v0.1.0...v0.1.1
