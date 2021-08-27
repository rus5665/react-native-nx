import { COUNTER_CHANGE } from './types'

export const changeCount = (count) => ({
  type: COUNTER_CHANGE,
  payload: count
})

