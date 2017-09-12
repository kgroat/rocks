
import { ColorRange, NumberRange } from '../../schemaDefinitions/items'

export interface MaterialGeneratable {
  readonly id: string
  readonly color: ColorRange
  readonly density: NumberRange
  readonly hardness: NumberRange
}
