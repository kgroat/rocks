
import * as React from 'react'
import { connect, Dispatch } from 'react-redux'

import { generateRandom } from '../generators/random'

import setVisible from '../redux/actions/setVisible'

export interface Props {
  search: () => void
}

function SearchComponentBase(props: Props) {
  return (
    <button onClick={props.search}>Search</button>
  )
}

function mapDispatchToProps (dispatch: Dispatch<any>): Props {
  return {
    search: () => dispatch(setVisible({
      item: generateRandom()
    }))
  }
}

export default connect(null, mapDispatchToProps)(SearchComponentBase)
