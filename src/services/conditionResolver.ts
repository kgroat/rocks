
import {
  Condition,
  ConditionOperator,
  ConditionGrouper,
  CONDITION_OPERATORS,
  CONDITION_OPERATOR_MAP,
  CONDITION_GROUPERS,
  CONDITION_GROUPER_MAP
} from '../schemaDefinitions/condition'

interface NumberTree {
  [key: string]: number | NumberTree
}

function renderCondition(condition: Condition | string): string {
  if (typeof condition === 'string') {
    return condition
  } else {
    return `["${condition.map(renderCondition).join('", "')}"]`
  }
}

function raise(message: string, rootCondition: Condition) {
  throw new Error(`${message} \n ---CONDITION--- \n${renderCondition(rootCondition)}`)
}

function getValue(key: string, tree: NumberTree, rootCondition: Condition): number {
  function raiseLocal(message: string) {
    raise(`Unable to calculate ${key} -- ${message}.`, rootCondition)
  }

  let path: string[] = []
  let remaining = key.split('.')
  let value: NumberTree | number = tree

  if (!(remaining[0] in tree)) {
    raiseLocal(`variable ${remaining[0]} not present`)
  }

  while (remaining.length > 0) {
    value = value[remaining[0]]
    path.push(remaining[0])
    remaining = remaining.slice(1)
    if (value === null || value === undefined) {
      raiseLocal(`${path.join('.')} is ${value}`)
    } else if (remaining.length > 0 && typeof value !== 'object') {
      raiseLocal(`${path.join('.')} is not an object, but is instead a(n) ${typeof value}`)
    }
  }

  if (typeof value !== 'number') {
    throw raiseLocal(`it is not a number, but is instead a(n) ${typeof value}`)
  }

  return value
}

export function resolve(condition: Condition, inputMap: any, rootCondition = condition): boolean {
  function raiseLocal (message: string) {
    raise(`${message} \n ---CONTEXT--- \n${renderCondition(condition)}`, rootCondition)
  }

  if (!condition) {
    return true
  }

  if (condition.length !== 3) {
    raiseLocal(`Malformed condition -- length should be 3 but instead was ${condition.length}`)
  }

  const operator = condition[1]
  if (CONDITION_GROUPERS.indexOf(operator as ConditionGrouper) >= 0) {
    const operation = CONDITION_GROUPER_MAP[operator]
    const input1 = resolve(condition[0] as Condition, inputMap, rootCondition)
    const input2 = resolve(condition[2] as Condition, inputMap, rootCondition)
    return operation(input1, input2)
  } else if (CONDITION_OPERATORS.indexOf(operator as ConditionOperator) >= 0) {
    const operation = CONDITION_OPERATOR_MAP[operator]
    const input1 = getValue(condition[0] as string, inputMap, rootCondition)
    const input2 = getValue(condition[2] as string, inputMap, rootCondition)
    return operation(input1, input2)
  } else {
    raiseLocal(`Unknown operator ${operator}`)
  }
}
