import { SET_USER, UserLoadAction, UserState } from './userReducer.type'

const initialState: UserState = {
  user: undefined,
}

export function user(state: UserState = initialState, action: UserLoadAction): UserState {
  switch (action.type) {
    case SET_USER: {
      return { ...state, user: action.payload }
    }

    default:
      return state
  }
}
