import { css } from '@emotion/core'

export const box = css`
  .auth {
    &__title {
      font-family: 'Montserrat-Bold';
      padding-top: 30px;
      color: #08a652;
      font-size: 58px;
      line-height: 71px;
    }

    &__block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 1000px;

      form {
        max-width: 380px;
        padding: 45px;
        background: #ffffff;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.03);
        border-radius: 31px;
      }

      &-title {
        font-size: 23px;
        line-height: 26px;
        font-weight: 700;
        margin-bottom: 13px;
      }

      &-text {
        font-size: 15px;
        line-height: 26px;
        margin-bottom: 5px;
        margin-top: 22px;
      }

      &-items {
        margin: 30px 0 30px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &-die {
        position: relative;

        &-correctly,
        &-uncorrected,
        &-error {
          display: inline-block;
          background: #75e463;
          border-radius: 8px;
          font-weight: 500;
          font-size: 15px;
          line-height: 115.5%;
          color: #fff;
          position: absolute;
          font-weight: 600;
          letter-spacing: 1px;
          right: 2px;
          top: -45px;
          transition: all 0.3s;
        }

        &-block {
          padding: 8px 10px 8px 37px;
          position: absolute;
          width: 100%;
          height: 100%;
          display: block;

          &:before {
            content: '';
            position: absolute;
            height: 30px;
            width: 30px;
            top: 50%;
            transform: translateY(-25%);
            left: 12px;
          }
        }

        &-block {
          position: relative;

          &:before {
            position: absolute;
            background-image: url(../images/tick.svg);
            background-repeat: no-repeat;
          }

          &:after {
            content: '';
            position: absolute;
            border: 10px solid transparent;
            border-top: 10px solid #75e463;
            left: 13px;
            top: 95%;
          }
        }

        .uncorrected {
          &:before {
            position: absolute;
            background-image: url(../images/sign.svg);
            background-repeat: no-repeat;
          }

          &:after {
            border-top: 10px solid #ffbb55;
          }
        }

        .error {
          &:before {
            position: absolute;
            background-image: url(../images/cross.svg);
            background-repeat: no-repeat;
          }

          &:after {
            border-top: 10px solid #fb4b4b;
          }
        }
      }

      input {
        outline: none !important;
        width: 100%;
        padding: 10px 15px;
        border-radius: 10px;
        transition: all 0.5s;

        &:focus {
          border: 2px solid #60acff;
          border-radius: 10px;
        }

        &[type='submit'] {
          cursor: pointer;
          width: auto;
          background: #6200ee;
          border-radius: 33px;
          color: #fff;
          padding: 13px 35px;
          border: none;
          font-weight: 500;
          font-size: 20px;
        }
      }

      .input-one {
        input {
          border: 2px solid #c4c4c4;
          background-color: #fff;

          &:focus {
            border: 2px solid #60acff;
            border-radius: 10px;
          }
        }

        /*===Изменение плашек над первым input===*/
        .auth__block-die-correctly {
          opacity: 1;
        }

        .auth__block-die-uncorrected {
          background: #ffbb55;
          opacity: 0;
        }

        .auth__block-die-error {
          background: #fb4b4b;
          opacity: 0;
        }

        /*===Изменение плашек над первым input===*/
      }

      .input-two {
        input {
          background-color: rgba(251, 75, 75, 0.1);
          border: 2px solid rgba(251, 75, 75, 0.69);

          &:focus {
            background: rgba(251, 75, 75, 0.1);
            border: 2px solid rgba(251, 75, 75, 0.69);
          }
        }

        /*===Изменение плашек над вторым input===*/
        .auth__block-die-correctly {
          opacity: 0;
        }

        .auth__block-die-uncorrected {
          background: #ffbb55;
          opacity: 0;
        }

        .auth__block-die-error {
          background: #fb4b4b;
          opacity: 1;
        }

        /*===Изменение плашек над вторым input===*/
      }

      &-star {
        display: inline-block;
        position: relative;

        &:after {
          content: '';
          position: absolute;
          background-image: url(../images/star.svg);
          height: 100%;
          width: 100%;
          background-repeat: no-repeat;
          background-position: top right;
          right: -8px;
          top: 6px;
        }
      }

      &-right {
        width: 500px;
        padding: 0 60px;
      }

      &-forgot {
        font-size: 17px;
        line-height: 26px;
        color: #60acff;
      }

      &-subtext {
        color: rgba(0, 0, 0, 0.4);
        font-weight: 350;
        font-size: 15px;
      }

      &-subtitle {
        font-size: 40px;
        line-height: 26px;
        margin-bottom: 25px;
      }

      &-righttext {
        font-size: 15px;
        line-height: 26px;
        color: #37352f;

        a {
          color: #6200ee;
        }
      }

      .hr {
        margin: 25px 0;
        height: 1px;
        border: 1px solid #37352f;
      }

      &-link {
        display: block;
        text-align: center;
        font-size: 15px;
        line-height: 26px;
        color: #1a53bc;
      }
    }
  }
`
