
import * as React from 'react'
import { render } from 'react-dom'

import App from './containers/app'

const output = document.getElementById('output')

render(
  <App/>,
  output
)