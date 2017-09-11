
import * as React from 'react'
import { Provider } from 'react-redux'

import store from '../redux/store'

import ActionComponent from './actionComponent'
import ActionResponseComponent from './actionResponseComponent'
import EquipmentComponent from './equipmentComponent'
import VisibilityComponent from './visibilityComponent'

export default () => {
  return (
    <div>
      <Provider store={store}>
        <div>
          <ActionResponseComponent />
          <VisibilityComponent />
          <EquipmentComponent />
          <ActionComponent />
        </div>
      </Provider>
    </div>
  )
}