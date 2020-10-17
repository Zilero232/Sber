import { jsx } from '@emotion/core'
import { box } from './Redactor.css'

export const Redactor = () => {
  return (
    <div css={box} className="editor__block">
      <div className="editor__block-check editor__block-checing">
        <div className="editor__block-title">На проверку</div>
        <img src="../images/editor_1.jpg" alt="" />
        <div className="editor__block-text">
          Описание! <br />И ещё
        </div>
      </div>
      <div className="editor__block-check">
        <div className="editor__block-title">16 октября, пт</div>
        <img src="../images/editor_2.jpg" alt="" />
        <div className="editor__block-text">
          На сегодня ничего нету <br />
          Попробуйте позже ;(
        </div>
        <div className="editor__block-btn">Открыть работу</div>
      </div>
      <div className="editor__block-marketing">
        <div className="editor__block-top">
          <div className="editor__block-subtitle">Проведите “Урок цифры”</div>
        </div>
        <div className="editor__block-bottom">
          <div className="editor__block-subtitle">Персонализированная модель образования</div>
          <div className="editor__block-subtext">Обучающие материалы</div>
          <div className="editor__block-gradient" />
        </div>
      </div>
    </div>
  )
}
