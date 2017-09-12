
import { getSchemas } from '../../schemas/items'

import { ItemSchema } from '../../schemaDefinitions/items'
import { ItemGeneratable } from '../../interfaces/generatables'
import { Item } from '../../interfaces'

import { generateItemGeneratable } from '../generatables'
import { generateItem } from '../itemGenerator'

import { choose, WeightedItem } from '../../helpers'

interface BuiltSchema {
  schema: ItemSchema
  generatables: ItemGeneratable[]
  generate (): Item
}

export const builtSchemas = getSchemas().map<BuiltSchema>(schema => {
  const sizedArray = Array.from(Array(schema.typeCount))
  const generatables = sizedArray.map(() => generateItemGeneratable(schema))
  const generate = () => {
    return generateItem(schema, choose(generatables))
  }

  return {
    schema,
    generatables,
    generate
  }
})

const generators = builtSchemas.map(b => b.generate)
const generatorsByName: { [key: string]: () => Item } = {}
builtSchemas.forEach(b => {
  generatorsByName[b.schema.id] = b.generate
})
const weightedGenerators = builtSchemas
                                .filter(b => b.schema.randomWeight > 0)
                                .map<WeightedItem<() => Item>>(b => ({
                                  weight: b.schema.randomWeight,
                                  item: b.generate
                                }))

export function getGenerators() {
  return generators
}

export module getGenerators {
  export function byName() {
    return generatorsByName
  }
  export function withWeight() {
    return weightedGenerators
  }
}
