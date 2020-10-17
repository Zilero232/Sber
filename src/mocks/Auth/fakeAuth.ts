import { UserListInfo } from 'src/store/reducers'
import { fakeAuthData } from './fakeData'
import { omit } from 'lodash'

export const fakeAuth = (login: string, password: string): Promise<UserListInfo> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const findUser = fakeAuthData.find((user) => user.login === login)

      if (!findUser) reject('Неверный логин или пароль')
      if (findUser?.password !== password) reject('Неверный логин или пароль')

      resolve({ ...omit(findUser, 'password') })
    }, 1500)
  })
}
