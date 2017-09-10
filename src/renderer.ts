
const root = document.getElementById('output')

import './outputStyling.scss'

export function print (line: string) {
  root.innerHTML = `<p>${line}</p>`
}

export function printWithColor (line: string, color: string) {
  root.innerHTML = `<p>${line}&nbsp;<span class="color-box" style="background: #${color}"></span></p>`
}