
export type TransformationName = 'smash' | 'destroy'

export interface TransformationProduct {
  readonly id: string
  readonly transformations: TransformationName[]
}

export interface TransformationSchema {
  readonly name: TransformationName
  readonly products: TransformationProduct[]
}
