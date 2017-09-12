
import { ActionSchema } from '../../schemaDefinitions/actions'

const req = require.context('.', true, /\.json$/)

const schemas = req.keys().map(key => req<ActionSchema>(key))

const schemasByName: { [key: string]: ActionSchema } = {}
schemas.forEach(schema => schemasByName[schema.id] = schema)

export function getSchemas () {
  return schemas
}

export module getSchemas {
  export function byName () {
    return schemasByName
  }
}
