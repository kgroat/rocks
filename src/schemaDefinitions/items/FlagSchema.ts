
export interface FlagSchema {
  readonly name: string
  readonly priority: number
  readonly whitelist?: string[]
  readonly blacklist?: string[]
}
