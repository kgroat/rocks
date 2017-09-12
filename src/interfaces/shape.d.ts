
import { Property } from './property'
import { Size } from './size'

export interface Shape extends Property {
  readonly name: string
  readonly article: 'a'|'an'
  readonly size: Size
}