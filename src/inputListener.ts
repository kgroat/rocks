
import { handle } from './inputHandler'

const input = document.getElementById('input') as HTMLTextAreaElement

input.addEventListener('keypress', (ev) => {
  if (ev.key === 'Enter') {
    handle(input.value)
    ev.preventDefault()
    input.value = ''
  }
})