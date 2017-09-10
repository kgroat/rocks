
import * as React from 'react'
import { render as reactRender } from 'react-dom'
const root = document.getElementById('output')

import './outputStyling.scss'

export function render (content: React.ReactElement<any>) {
  reactRender(content, root)
}


export function print (line: string) {
  render(
    <p>{line}</p>
  )
}

export function printWithColor (line: string, color: string) {
  render(
    <p>
      {line}&nbsp;
      <span className='color-box' style={{ background: `#${color}` }} />
    </p>
  )
}