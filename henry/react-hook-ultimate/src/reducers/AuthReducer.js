import { TOGGLE_AUTH } from './Types'

export const authReducer = (state, action) => {
  const { type } = action

  switch (type) {
    case TOGGLE_AUTH:
      return !state

    default:
      return state
  }
}
