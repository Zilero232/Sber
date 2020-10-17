import { css } from '@emotion/core'

export const box = css`
  padding: 30px 0 0 30px;
  display: flex;

  .editor {
    &__menu {
      z-index: 50;
      position: absolute;
      top: 80px;
      background: #f1f2f6;
      border-radius: 20px;
      width: 221px;

      a {
        font-family: 'ArialRegular';
        display: block;
        color: rgb(0, 24, 51);
        padding-left: 60px;
        margin: 20px 0;
        font-size: 15px;
        line-height: 20px;
        position: relative;

        .editor__list-icon,
        .painter__list-icon {
          content: '';
          position: absolute;
          height: 22px;
          width: 22px;
          background-repeat: no-repeat;
          left: 20px;
          top: 45%;
          transform: translateY(-50%);
        }
      }

      .editor__list-alert,
      .painter__list-alert {
        margin-top: 50px;
      }

      &-block {
        color: rgba(34, 34, 34, 0.4);
        padding-left: 15px;
        display: flex;
        font-size: 13px;
        line-height: 15px;
        position: relative;
        &:before {
          content: '';
          background-image: url('../images/arrow-black.svg');
          background-repeat: no-repeat;
          position: absolute;
          right: 30px;
          top: 50%;
          transform: translateY(-100%);
          width: 22px;
          height: 22px;
        }
      }

      &-elips {
        height: 30px;
        width: 30px;
        position: relative;
        .editor__list-icon,
        .painter__list-icon {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          left: 0px;
          top: 0%;
        }
      }

      &-subtext {
        padding-left: 15px;
        margin-bottom: 20px;

        span {
          font-size: 11px;
          line-height: 11px;
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }

    &__bar {
      cursor: pointer;
      background: #ffffff;
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.02), 0px 4px 15px rgba(0, 0, 0, 0.05);
      border-radius: 62px;
      width: 50px;
      height: 50px;
      position: relative;
      transition: all 0.5s;

      &-items {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      &-item {
        background-color: black;
        width: 18px;
        height: 2px;
        margin: 3px 0;
      }
      &:hover {
        background: black;
        .painter__bar-item,
        .editor__bar-item {
          background-color: #fff;
        }
      }
    }

    &__problem {
      cursor: pointer;
      margin-left: 30px;
    }
  }
`
