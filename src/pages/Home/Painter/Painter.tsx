import { jsx } from '@emotion/core'
import { Fragment } from 'react'
import { errorBox, box } from './Painter.css'

export const Painter = () => {
  return (
    <Fragment>
      <div css={errorBox}>
        <img src="../images/Emoj-shock.svg" alt="" className="class" />
        <div className="painter__error-block">
          <div className="painter__error-title">Нет уроков в расписании</div>
          <div className="painter__error-text">Что-то пошло не так, здесь должны быть задания</div>
        </div>
      </div>

      <div css={box} className="painter__block">
        <div className="painter__block-check editor__block-checing">
          <div className="painter__block-title">Расписание</div>
          <img src="../images/Emoji-smile.svg" alt="" />
          <div className="painter__block-text">Ура, выходной! Можно делать задания дома</div>
          <div className="painter__block-btn">Перейти к заданиям</div>
        </div>
        <div className="painter__block-check">
          <div className="painter__block-title">Новое в моих заданиях</div>
          <img src="../images/Emoji-glomy.svg" alt="" />
          <div className="painter__block-text">
            Здесь появляются задания, когда учитель их проверяет, или пишет в них комментарий
          </div>
        </div>

        <div className="painter__block-marketing">
          <div className="painter__block-top" />
          <div className="painter__block-bottom">
            <div className="painter__block-bottom-btn">
              <div className="painter__block-bottom-1">Предметы</div>
              <div className="painter__block-bottom-2">Мягкие навыки</div>
            </div>
            <div className="painter__block-bottom-content">Прогресс на Сегодня</div>
            <div className="painter__block-bottom-progress">Прогресс на графиках</div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
