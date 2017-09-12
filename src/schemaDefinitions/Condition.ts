
export type ConditionOperator = '<' | '>' | '<=' | '>=' | '=='

export type ConditionGrouper = '&&' | '||' | '!|' | '!&'

const CO_LT: ConditionOperator = '<'
const CO_GT: ConditionOperator = '>'
const CO_LTE: ConditionOperator = '<='
const CO_GTE: ConditionOperator = '>='
const CO_EQ: ConditionOperator = '=='

export const CONDITION_OPERATORS = [
  CO_LT,
  CO_GT,
  CO_LTE,
  CO_GTE,
  CO_EQ
]

export const CONDITION_OPERATOR_MAP: { [key: string]: (a: number, b: number) => boolean } = {
  [CO_LT]: (a, b) => (a < b),
  [CO_GT]: (a, b) => (a > b),
  [CO_LTE]: (a, b) => (a <= b),
  [CO_GTE]: (a, b) => (a >= b),
  [CO_EQ]: (a, b) => (a === b),
}

const CG_AND: ConditionGrouper = '&&'
const CG_OR: ConditionGrouper = '||'
const CG_XOR: ConditionGrouper = '!|'
const CG_NAND: ConditionGrouper = '!&'

export const CONDITION_GROUPERS = [
  CG_AND,
  CG_OR,
  CG_XOR,
  CG_NAND
]

export const CONDITION_GROUPER_MAP: { [key: string]: (a: boolean, b: boolean) => boolean } = {
  [CG_AND]: (a, b) => (a && b),
  [CG_OR]: (a, b) => (a || b),
  [CG_XOR]: (a, b) => (a || b) && !(a && b),
  [CG_NAND]: (a, b) => !(a && b)
}


export interface Condition extends Array<any> {
  0: string | Condition
  1: ConditionOperator | ConditionGrouper
  2: string | Condition
  length: 3
}
