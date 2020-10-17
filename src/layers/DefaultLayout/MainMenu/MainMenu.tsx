/* eslint-disable jsx-a11y/anchor-is-valid */
import { jsx } from '@emotion/core'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { UserListInfo, UserState } from 'src/store/reducers'
import { box } from './MainMenu.css'

export const MainMenu = () => {
  const user = useSelector<UserState, UserListInfo>((state) => state.user!)

  const [isOpen, setOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    setOpenMenu(!isOpen)
  }

  return (
    <div css={box}>
      <div className="editor__bar" onClick={handleOpenMenu}>
        <div className="editor__bar-items">
          <div className="editor__bar-item"></div>
          <div className="editor__bar-item"></div>
          <div className="editor__bar-item"></div>
        </div>
      </div>
      <div className={`editor__menu ${isOpen ? 'show' : 'hidden'}`}>
        <div className="editor__list">
          <a href="#" className="editor__list-text">
            <div
              className="editor__list-icon"
              style={{ backgroundImage: 'url(../images/main.svg)' }}
            ></div>
            Главное
          </a>
          <a href="#" className="editor__list-text">
            <div
              className="editor__list-icon"
              style={{ backgroundImage: 'url(../images/book.svg)' }}
            ></div>
            Издания
          </a>
          <a href="#" className="editor__list-text">
            <div
              className="editor__list-icon"
              style={{ backgroundImage: 'url(../images/tick-tick.svg)' }}
            ></div>
            На проверку
          </a>
          <a href="#" className="editor__list-text">
            <div
              className="editor__list-icon"
              style={{ backgroundImage: 'url(../images/board.svg)' }}
            ></div>
            Преподаватели
          </a>
          <a href="#" className="editor__list-text">
            <div
              className="editor__list-icon"
              style={{ backgroundImage: 'url(../images/indicator.svg)' }}
            ></div>
            Отчеты
          </a>
          <a href="#" className="editor__list-text editor__list-alert">
            <div
              className="editor__list-icon"
              style={{ backgroundImage: 'url(../images/alert__menu.svg)' }}
            ></div>
            Уведомления
          </a>
          <a href="#" className="editor__list-text">
            <div
              className="editor__list-icon"
              style={{ backgroundImage: 'url(../images/problemm.svg)' }}
            ></div>
            Помощь
          </a>
          <div className="editor__menu-block">
            <div className="editor__menu-elips">
              <div
                className="editor__list-icon"
                style={{ backgroundImage: 'url(../images/avatar-3.svg)' }}
              ></div>
            </div>
            <div className="editor__menu-subtext">
              {user.name} <br />
              <span>{user.role}</span>
            </div>
          </div>
        </div>
      </div>
      <img className="editor__problem" src="../images/problem.svg" alt="" />
    </div>
  )
}
