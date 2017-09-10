
import { Action } from 'redux'
import { Rock } from '../../interfaces/rock'

export const type = 'ADD_ROCK'

export interface AddRock {
  rock: Rock
}

export type AddRockAction = AddRock & Action

export default function (options: AddRock): AddRockAction {
  return {
    type,
    ...options
  }
}
