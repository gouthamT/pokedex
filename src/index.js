import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Page from './ui/page/cnt-page'
import configureStore from './store/configure-store'
import './style/main.css'
if (process.env.NODE_ENV === 'development') {
  import('topping/toppingRelay')
}

const store = configureStore()

render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('root')
)
