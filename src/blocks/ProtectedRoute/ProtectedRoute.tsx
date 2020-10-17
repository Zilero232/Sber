import { jsx } from '@emotion/core'
import { FC, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { UserState } from 'src/store/reducers'

export const ProtectedRoute: FC<RouteProps> = ({ children, ...rest }) => {
  const { user } = useSelector<UserState, UserState>((state) => state)
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) return <Redirect to={{ pathname: '/auth' }}></Redirect>
        return <Fragment>{children}</Fragment>
      }}
    ></Route>
  )
}
