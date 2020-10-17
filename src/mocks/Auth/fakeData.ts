import crypto from 'crypto'
import { UserListInfo } from 'src/store/reducers'

export type LoginData = { password: string } & UserListInfo

export const fakeAuthData: LoginData[] = [
  {
    id: crypto.randomBytes(16).toString('hex'),
    name: 'Дмитрий',
    login: 'redactor',
    email: 'redactor@sb.ru',
    role: 'Редактор',
    password: '12345',
  },
  {
    id: crypto.randomBytes(16).toString('hex'),
    name: 'Андрей',
    login: 'painter',
    email: 'painter@sb.ru',
    role: 'Художник',
    password: '12345',
  },
  {
    id: crypto.randomBytes(16).toString('hex'),
    name: 'Никита',
    login: 'teacher',
    email: 'teacher@sb.ru',
    role: 'Учитель',
    password: '12345',
  },
  {
    id: crypto.randomBytes(16).toString('hex'),
    name: 'Никита',
    login: 'student',
    email: 'student@sb.ru',
    role: 'Ученик',
    password: '12345',
  },
]
