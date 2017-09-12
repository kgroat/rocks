
import { getSchemas } from '../schemas/actions'
import { Item, ActionUsabilityMap, ActionItemMap } from '../interfaces'

import { resolve } from './conditionResolver'

function hasSome(list1: string[], list2: string[]) {
  if(!list2 || !list2.length) {
    return false
  }
  return list2
          .map(item => list1.indexOf(item) >= 0)
          .find(b => b === true) === undefined
}

function hasAll(list1: string[], list2: string[]) {
  if(!list2 || !list2.length) {
    return true
  }
  return list2
          .map(item => list1.indexOf(item) >= 0)
          .find(b => b === false) === undefined
}

export function generateMap(item: Item): ActionUsabilityMap {
  const actionMap: ActionUsabilityMap = {}

  getSchemas().forEach(schema => {
    const actionName = schema.id
    const itemMap: ActionItemMap = {}
    actionMap[actionName] = itemMap

    schema.usable.items.forEach(usability => {
      const itemName = usability.name
      itemMap[itemName] = false
      if (hasSome(item.flags, usability.blacklistFlags)) {
      } else if (!hasAll(item.flags, usability.whitelistFlags)) {
      } else if (usability.condition && !resolve(usability.condition, item)) {
      } else {
        itemMap[itemName] = true
      }
    })
  })

  return actionMap
}
