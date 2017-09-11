
import { RootSchema } from '../schemas'

const req = require.context('.', true, /\.json$/)

const schemas = req.keys().map(key => req<RootSchema>(key))

const schemasByName: { [key: string]: RootSchema } = {}
schemas.forEach(schema => schemasByName[schema.id] = schema)

export function getSchemas () {
  return schemas
}

export module getSchemas {
  export function byName () {
    return schemasByName
  }
}
