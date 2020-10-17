export const SET_USER = 'auth/set-user'

export type UserState = { user?: UserListInfo }

export type UserListInfo = {
  id: string
  name: string
  login: string
  email: string
  role: string
}

export type SetUserAction = {
  type: typeof SET_USER
  payload: UserListInfo
}

export type UserLoadAction = SetUserAction
