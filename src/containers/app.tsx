
import * as React from 'react'
import { Provider } from 'react-redux'

import store from '../redux/store'

import VisibilityComponent from './visibilityComponent'
import EquipmentComponent from './equipmentComponent'
import SearchComponent from './searchComponent'

export default () => {
  return (
    <div>
      <Provider store={store}>
        <div>
          <VisibilityComponent />
          <EquipmentComponent />
          <SearchComponent />
        </div>
      </Provider>
    </div>
  )
}