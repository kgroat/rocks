
import { Material } from './material'
import { Shape } from './shape'
import { ItemGeneratable } from './generatables'
import { ActionUsabilityMap } from './actionUsabilityMap'

export interface Item {
  readonly id: string
  readonly flags: string[]
  readonly material: Material
  readonly shape: Shape
  readonly type: ItemGeneratable
  readonly actions: ActionUsabilityMap
}