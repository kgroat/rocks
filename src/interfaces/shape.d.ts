
import { Property } from './property'
import { Size } from './size'

export interface Shape extends Property {
  name: string
  article: 'a'|'an'
  size: Size
}