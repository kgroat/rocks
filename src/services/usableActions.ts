
import { getSchemas } from '../schemas/actions'
import { ActionSchema } from '../schemaDefinitions/actions'
import { Item } from '../interfaces'

import { resolve } from './conditionResolver'

export function isActionUsable(action: ActionSchema, itemMap: { [key: string]: Item }) {
  const actionName = action.id
  const itemNames = action.usable.items.map(i => i.name)
  const itemsWork = itemNames.map(itemName => itemMap[itemName].actions[actionName][itemName])
  
  if (itemsWork.find(w => w === false) !== undefined) {
    return false
  }

  return resolve(action.usable.condition, itemMap)
}

export function getUsableActions(left: Item, right: Item, actions = getSchemas()): ActionSchema[] {
  return actions.filter(action => {

    if (action.usable.items.length === 1) {
      const itemName = action.usable.items[0].name
      return isActionUsable(action, { [itemName]: left }) || isActionUsable(action, { [itemName]: right })
    } else if (left && right) {
      const itemNames = action.usable.items.map(i => i.name)
      return isActionUsable(action, { [itemNames[0]]: left, [itemNames[1]]: right }) ||
             isActionUsable(action, { [itemNames[0]]: right, [itemNames[1]]: left })
    }

    return false
  })
}
