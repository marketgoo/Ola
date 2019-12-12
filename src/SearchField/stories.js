import React from 'react'

import create from '../create'

import SearchField from './'

create('SearchField')
  .add('Busy', () => (
    <figure><SearchField id="search" busy placeholder="Filter elements" /></figure>
  ))
  .add('Busy with button', () => (
    <figure><SearchField id="search-loading" busy placeholder="Filter elements" textButton="Test Search" /></figure>
  ))
  .add('Default', () => (
    <figure><SearchField id="search-button" placeholder="Filter elements" textButton="Test Search" /></figure>
  ))
  