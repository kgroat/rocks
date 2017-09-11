
import { Property } from './property'

export interface Shape extends Property {
  name: string
  article: 'a'|'an'
}