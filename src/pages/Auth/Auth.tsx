/* eslint-disable jsx-a11y/anchor-is-valid */
import { jsx } from '@emotion/core'
import { ChangeEvent, MouseEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fakeAuth } from 'src/mocks'
import { SetUserAction, SET_USER, UserListInfo } from 'src/store/reducers'
import { box } from './Auth.css'

export default () => {
  const history = useHistory()

  const [email, setEmail] = useState<string>('redactor')
  const [password, setPassword] = useState<string>('12345')
  const [isLoading, setLoading] = useState<boolean>(false)

  const dispatch = useDispatch()

  const handleLogin = (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault()
    const fakePromise = fakeAuth(email, password)
    setLoading(true)

    fakePromise
      .then((user: UserListInfo) => {
        const action: SetUserAction = {
          type: SET_USER,
          payload: user,
        }

        dispatch(action)

        history.push('/')
      })
      .catch((e) => {
        console.log(e)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <section css={box} className="auth">
      <div className="container">
        <a href="#" className="auth__title">
          СберКласс
        </a>
        <div className="auth__block">
          <div className="auth__block-left">
            <form action="" className="form">
              <div className="auth__block-title">Авторизация</div>
              <div className="auth__block-text">Логин</div>

              <div className="auth__block-die input-one">
                {/* <div className="auth__block-die-correctly">
                  <div className="auth__block-die-block correctly">Верно</div>
                </div>
                <div className="auth__block-die-uncorrected">
                  <div className="auth__block-die-block uncorrected">Неккоректно</div>
                </div>
                <div className="auth__block-die-error">
                  <div className="auth__block-die-block error">Неверно</div>
                </div> */}
                <input
                  id="red"
                  className="auth__block-die-login"
                  type="text"
                  required
                  name="login"
                  defaultValue="redactor"
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setEmail(event.currentTarget.value)
                  }
                />
              </div>
              <div className="auth__block-text author__block-star">Пароль</div>

              <div className="auth__block-die">
                <div className="auth__block-die input-one">
                  {/* <div className="auth__block-die-correctly">
                    <div className="auth__block-die-block correctly">Верно</div>
                  </div>
                  <div className="auth__block-die-uncorrected">
                    <div className="auth__block-die-block uncorrected">Неккоректно</div>
                  </div>
                  <div className="auth__block-die-error">
                    <div className="auth__block-die-block error">Неверно</div>
                  </div> */}
                  <input
                    className="auth__block-password"
                    type="password"
                    required
                    name="password"
                    defaultValue="12345"
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      setPassword(event.currentTarget.value)
                    }
                  />
                </div>
              </div>

              <div className="auth__block-items">
                <input
                  className={(isLoading ? 'disabled ' : '') + 'author__block-submit'}
                  type="submit"
                  name="submit"
                  value="Войти"
                  onClick={handleLogin}
                />
                <a href="#" className="auth__block-forgot">
                  Забыли пароль?
                </a>
              </div>
              <div className="auth__block-subtext">
                Входя в систему, вы принимаете пользовательское соглашение и политику обработки
                данных
              </div>
            </form>
          </div>
          <div className="auth__block-right">
            <div className="auth__block-subtitle">Учителю</div>
            <div className="auth__block-righttext">
              Для входа нужно использовать логин и парлось у конфигуратора вашей школы
            </div>
            <div className="hr"></div>
            <div className="auth__block-subtitle">Конфигуратору</div>
            <div className="auth__block-righttext">
              Логин и пароль были высланы на вашу личную почту. Проверьте, пожалуйства, спам и если
              рассылки нет - позвоните на нашу горячую линию:{' '}
              <a href="tel:88007758951">8 800 775 89 51</a>
            </div>
            <div className="hr"></div>
            <a href="#" className="auth__block-link">
              Вебинары и инструкции на канале Платформы
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
