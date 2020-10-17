/* eslint-disable jsx-a11y/anchor-is-valid */
import { jsx } from '@emotion/core'
import { FC, ReactNode } from 'react'
import { box } from './DefaultLayout.css'
import { MainMenu } from './MainMenu'

type Props = {
  children: ReactNode
}

export const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <div css={box} className="editor">
      <div className="container-fuild">
        <MainMenu />
        {children}
      </div>
    </div>
  )
}
