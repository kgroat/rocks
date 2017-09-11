
import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import * as ReactTooltip from 'react-tooltip'

import { Item } from '../interfaces/item'
import './outputStyling.scss'

export interface Props {
  item: Item
}

export default (props: Props) =>  {
  const { item } = props
  return (
    <div style={{ display: 'inline-block' }}>
      <span data-tip={item.shape.name} className='color-box' style={{ background: `#${item.material.color}` }} />
      <ReactTooltip />
    </div>
  )
}