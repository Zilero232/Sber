import { createStore } from 'redux'

import { user } from './reducers/userReducer'

export const store = createStore(user)
