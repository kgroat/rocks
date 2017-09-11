
import * as React from 'react'
import { connect } from 'react-redux'

import { State } from '../redux/state'

export interface StateProps {
  actionResponse: string
}

function ActionResponseComponentBase({ actionResponse }: StateProps) {
  return (
    <div style={{ height: 20 }}>
      { actionResponse }
    </div>
  )
}

function mapStateToProps ({ actionResponse }: State): StateProps {
  return {
    actionResponse
  }
}

export default connect(mapStateToProps)(ActionResponseComponentBase)
