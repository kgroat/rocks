
import * as React from 'react'
import { connect, Dispatch } from 'react-redux'

import { generateRandom } from '../generators/items'
import { Item } from '../interfaces/item'

import setVisible from '../redux/actions/setVisible'
import smash from '../redux/actions/smash'
import { State } from '../redux/state'

export interface StateProps {
  leftHand: Item
  rightHand: Item
}

export interface DispatchProps {
  search: () => void
  smash: (left: Item, right: Item) => void
}

function ActionComponentBase(props: StateProps & DispatchProps) {
  const { leftHand, rightHand } = props
  const canSmash = !!(leftHand && rightHand)

  return (
    <div>
      <button onClick={props.search}>Search</button>
      { canSmash ? <button onClick={() => props.smash(leftHand, rightHand)}>Smash!</button> : null }
    </div>
  )
}

function mapStateToProps (state: State): StateProps {
  const { leftHand, rightHand } = state
  return {
    leftHand,
    rightHand
  }
}

function mapDispatchToProps (dispatch: Dispatch<any>): DispatchProps {
  return {
    search: () => dispatch(setVisible({
      item: generateRandom()
    })),
    smash: (left, right) => dispatch(smash({
      left, right
    }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionComponentBase)
