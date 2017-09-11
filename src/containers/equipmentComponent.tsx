
import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import * as ReactTooltip from 'react-tooltip'

import { Item } from '../interfaces/item'
import { State } from '../redux/state'
import equip from '../redux/actions/equip'

import ItemComponent from '../components/itemComponent'

export interface StateProps {
  leftHand: Item
  rightHand: Item
}

export interface DispatchProps {
}

function renderHand(item: Item, side: string) {
  if (!item) {
    return (
      <div>
        You have nothing in your {side} hand.
      </div>
    )
  } else {
    const { shape: { name, article } } = item
    return (
      <div>
        <ItemComponent item={item} />
        You have {article} {name} in you {side} hand.
      </div>
    )
  }
}

function VisibilityComponentBase (props: StateProps & DispatchProps) {
  const { leftHand, rightHand } = props

  return (
    <div>
      { renderHand(leftHand, 'left') }
      { renderHand(rightHand, 'right') }
    </div>
  )
}

function mapStateToProps({ leftHand, rightHand }: State): StateProps {
  return {
    leftHand,
    rightHand
  }
}

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchProps {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityComponentBase)
