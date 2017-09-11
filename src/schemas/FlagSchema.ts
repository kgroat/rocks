
export interface FlagSchema {
  name: string
  priority: number
  whitelist?: string[]
  blacklist?: string[]
}
