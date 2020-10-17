import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import emotionNormalize from 'emotion-normalize'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import { css, Global, jsx } from '@emotion/core'
import Auth from './pages/Auth'
import { Provider } from 'react-redux'
import { store } from './store'
import { DefaultLayout } from './layers'
import Home from './pages/Home'
import { ProtectedRoute } from './blocks'

ReactDOM.render(
  <React.StrictMode>
    <Fragment>
      <Provider store={store}>
        <Global
          styles={css`
            ${emotionNormalize}
            * {
              margin: 0;
              padding: 0;
            }

            * {
              box-sizing: border-box;
            }

            @font-face {
              font-family: 'Montserrat-Bold';
              src: url('../fonts/Montserrat-Bold.ttf') format('woff');
            }

            @font-face {
              font-family: 'SegoeUIRegular';
              src: url('../fonts/SegoeUIRegular.woff') format('woff');
            }

            @font-face {
              font-family: 'ArialRegular';
              src: url('../fonts/ArialRegular.woff') format('woff');
            }

            @font-face {
              font-family: 'ArialBold';
              src: url('../fonts/ArialBold.woff') format('woff');
            }

            html {
              height: 100%;
            }

            body {
              color: black;
              font-family: 'SegoeUIRegular';
              height: 100%;

              a {
                color: #6200ee;
              }
            }

            a,
            ul,
            li {
              list-style: none;
              text-decoration: none;
              margin: 0;
              padding: 0;
              display: inline-block;
            }

            .text {
              margin: 12px 0;
              position: relative;
              &:before {
                cursor: default;
                content: '';
                position: absolute;
                background-repeat: no-repeat;
                width: 27px;
                height: 30px;
                left: -40px;
                top: 0;
              }
            }

            .container {
              max-width: 1750px;
              margin: 0 auto;
              padding: 0 10px;
            }

            .container-fuild {
              max-width: 1920px;
              margin: 0 auto;
            }

            .disabled {
              opacity: 0.3;
              user-select: none;
              pointer-events: none;
              cursor: default !important;
            }

            .show {
              display: block;
            }

            .hidden {
              display: none;
            }
          `}
        />
        <Router>
          <Switch>
            <Route path="/auth">
              <Auth />
            </Route>
            <ProtectedRoute path="/">
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            </ProtectedRoute>
          </Switch>
        </Router>
      </Provider>
    </Fragment>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
