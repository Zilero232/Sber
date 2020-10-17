import { jsx } from '@emotion/core'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { UserState } from 'src/store/reducers'
import { Painter } from './Painter'
import { Redactor } from './Redactor'

export default () => {
  const { user } = useSelector<UserState, UserState>((state) => state)

  return (
    <Fragment>
      {user?.role === 'Редактор' && <Redactor />}
      {user?.role === 'Художник' && <Painter />}
    </Fragment>
  )
}
