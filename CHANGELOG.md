# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Added
- New component `Table` [#7]
- New component `Page` [#8], [#13]
- New component `Level` [#14], [#15]
- New css utils:
  - `ola-right` to align text to the right
  - `ola-center` to center text
  - `ola-numeric` to display numeric values aligned to right (mainly for tables)
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

[Unreleased]: https://github.com/marketgoo/Ola/compare/v0.1.1...HEAD
[0.1.1]: https://github.com/marketgoo/Ola/compare/v0.1.0...v0.1.1
