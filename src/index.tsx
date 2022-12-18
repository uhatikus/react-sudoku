import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { Provider } from 'react-redux'

import { Content, Title, Card, Grid, Numbers, NewButton } from './components'
import { register, configureStore } from './core'
import { GlobalStyles, theme } from './styles'

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)

const { persistor, store } = configureStore()

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <Content data-cy="content">
        <Title data-cy="title">Sudoku</Title>
        <Card data-cy="card">
          <NewButton />
          <Grid />
          <Numbers />
        </Card>
      </Content>
    </Provider>
  </ThemeProvider>
)

register()
