
import { print, printWithColor } from './renderer'
import { generateRock } from './generators/rockGenerator'


export function handle (command: string) {
  let rock = generateRock()
  printWithColor('you found a rock!', rock.color)
}