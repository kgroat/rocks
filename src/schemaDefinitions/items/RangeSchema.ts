
export type NumberRange = ReadonlyArray<number>

export interface RangeSchema<T> {
  readonly range: T
  readonly varianceRange: T
}
