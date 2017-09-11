
import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import * as ReactTooltip from 'react-tooltip'

import { Item } from '../interfaces/item'
import { State } from '../redux/state'
import equip from '../redux/actions/equip'

import ItemComponent from '../components/itemComponent'

export interface StateProps {
  visible: Item
}

export interface DispatchProps {
  equipLeft: (item: Item) => void
  equipRight: (item: Item) => void
}

function VisibilityComponentBase (props: StateProps & DispatchProps) {
  const { visible } = props

  if (!visible) {
    return (
      <div>
        You don't see anything
      </div>
    )
  }

  const { shape: { name, article } } = visible

  return (
    <div>
      You see {article} {name}!
      <ItemComponent item={visible} />
      <button onClick={() => props.equipLeft(visible)}>Take with Left hand</button>
      <button onClick={() => props.equipRight(visible)}>Take with Right hand</button>
    </div>
  )
}

function mapStateToProps(state: State): StateProps {
  return {
    visible: state.visible
  }
}

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchProps {
  return {
    equipLeft: (item: Item) => dispatch(equip({
      item,
      left: true
    })),
    equipRight: (item: Item) => dispatch(equip({
      item,
      left: false
    })),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityComponentBase)
