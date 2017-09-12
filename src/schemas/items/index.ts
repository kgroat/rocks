
import { ItemSchema } from '../../schemaDefinitions/items'

const req = require.context('.', false, /\.json$/)

const schemas = req.keys().map(key => req<ItemSchema>(key))

const schemasByName: { [key: string]: ItemSchema } = {}
schemas.forEach(schema => schemasByName[schema.id] = schema)

export function getSchemas () {
  return schemas
}

export module getSchemas {
  export function byName () {
    return schemasByName
  }
}
