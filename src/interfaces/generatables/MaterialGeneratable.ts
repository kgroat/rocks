
import { ColorRange, NumberRange } from '../../schemas'

export interface MaterialGeneratable {
  id: string
  color: ColorRange
  density: NumberRange
  hardness: NumberRange
}
