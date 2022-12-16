import React from 'react'
import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client';
import { ThemeProvider } from 'styled-components'

import { Content, Title, Card, Grid } from './components'
import { unregister } from './core'
import { GlobalStyles, theme } from './styles'

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <ThemeProvider theme = {theme}>
    <GlobalStyles />
    <Content data-cy="content">
      <Title data-cy="title">Test Sudoku</Title>
      <Card data-cy="card"><Grid></Grid></Card>
    </Content>
  </ThemeProvider>
)

unregister()
