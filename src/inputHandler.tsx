
import * as React from 'react'
import * as ReactTooltip from 'react-tooltip'

import { render } from './renderer'
import { generateRock } from './generators/rockGenerator'

import store from './redux/store'
import addRock from './redux/actions/addRock'


export function handle (command: string) {
  let newRock = generateRock()

  store.dispatch(addRock({
    rock: newRock
  }))

  let state = store.getState()

  render(
    <div>
      You pick up a rock!
      {
        state.rocks.map(rock => (
          <div key={rock.id} style={{ display: 'inline-block' }}>
            &nbsp;<span data-tip={rock.id} className='color-box' style={{ background: `#${rock.color}` }} />
            <ReactTooltip />
          </div>
        ))
      }
    </div>
  )
}