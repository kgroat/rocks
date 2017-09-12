
import * as React from 'react'
import { connect, Dispatch } from 'react-redux'

import { ActionSchema } from '../schemaDefinitions/actions'
import { generateRandom } from '../generators/items'
import { Item } from '../interfaces/item'

import setVisible from '../redux/actions/setVisible'
import { State } from '../redux/state'

import { getUsableActions, isActionUsable } from '../services/usableActions'

import ItemComponent from '../components/itemComponent'

export type ActionPerformer = (action: ActionSchema, items: { [key: string]: Item }) => void

export interface StateProps {
  leftHand: Item
  rightHand: Item
}

export interface DispatchProps {
  search: () => void
  performAction: ActionPerformer
}

function renderNoItemAction(action: ActionSchema, performAction: ActionPerformer) {
  return (
    <div key={action.id}>
      <button onClick={() => performAction(action, {})}>{action.button}</button>
    </div>
  )
}

function renderSingleItemAction(action: ActionSchema, leftHand: Item, rightHand: Item, performAction: ActionPerformer) {
  const buttons = []
  const itemName = action.usable.items[0].name
  if (leftHand && isActionUsable(action, { [itemName]: leftHand })) {
    buttons.push(
      <button key={1} onClick={() => performAction(action, { [itemName]: leftHand })}>
        {action.button} - Left {leftHand.shape.name} <ItemComponent item={leftHand} />
      </button>
    )
  }
  if (rightHand && isActionUsable(action, { [itemName]: rightHand })) {
    buttons.push(
      <button key={2} onClick={() => performAction(action, { [itemName]: rightHand })}>
        {action.button} - Right {rightHand.shape.name} <ItemComponent item={rightHand} />
      </button>
    )
  }

  return (
    <div key={action.id}>
      {buttons}
    </div>
  )
}

function renderDoubleItemAction(action: ActionSchema, leftHand: Item, rightHand: Item, performAction: ActionPerformer) {
  const buttons = []
  const itemNames = action.usable.items.map(i => i.name)

  const leftRightMap = { [itemNames[0]]: leftHand, [itemNames[1]]: rightHand }
  if (isActionUsable(action, leftRightMap)) {
    buttons.push(
      <button key={1} onClick={() => performAction(action, leftRightMap)}>
        {action.button} -
        {itemNames[0]}: Left {leftHand.shape.name} <ItemComponent item={leftHand} />,
        {itemNames[1]}: Right {rightHand.shape.name} <ItemComponent item={rightHand} />
      </button>
    )
  }

  const rightLeftMap = { [itemNames[0]]: rightHand, [itemNames[1]]: leftHand }
  if (rightHand && isActionUsable(action, rightLeftMap)) {
    buttons.push(
      <button key={2} onClick={() => performAction(action, leftRightMap)}>
        {action.button} -
        {itemNames[0]}: Right {rightHand.shape.name} <ItemComponent item={rightHand} />,
        {itemNames[1]}: Left {leftHand.shape.name} <ItemComponent item={leftHand} />
      </button>
    )
  }

  return (
    <div key={action.id}>
      {buttons}
    </div>
  )
}

function renderActionButtonGroup(action: ActionSchema, leftHand: Item, rightHand: Item, performAction: ActionPerformer) {
  if (action.usable.items.length === 0) {
    return renderNoItemAction(action, performAction)
  } else if (action.usable.items.length === 1) {
    return renderSingleItemAction(action, leftHand, rightHand, performAction)
  } else if (action.usable.items.length === 2) {
    return renderDoubleItemAction(action, leftHand, rightHand, performAction)
  } else {
    return null
  }
}

function ActionComponentBase(props: StateProps & DispatchProps) {
  const { leftHand, rightHand, search, performAction } = props

  const usableActions = getUsableActions(leftHand, rightHand)

  return (
    <div>
      <button onClick={search}>Search</button>
      {
        usableActions.map(action => renderActionButtonGroup(action, leftHand, rightHand, performAction))
      }
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
    performAction: (action, items) => {}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionComponentBase)
