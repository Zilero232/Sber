import { css } from '@emotion/core'

export const box = css`
  display: flex;
  margin: 0 auto;
  padding-top: 70px;
  width: 1200px;
  justify-content: space-between;
  align-items: flex-start;

  .editor {
    &__block {
      &-check {
        width: 385px;
        text-align: center;
        background-color: #fff;
        filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.02));
        filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.05));
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.02), 0px 4px 15px rgba(0, 0, 0, 0.05);
        border-radius: 20px;

        img {
          width: 198px;
          height: 198px;
        }
      }

      &-title {
        font-family: 'ArialBold';
        font-size: 20px;
        line-height: 23px;
        margin: 20px;
        color: #000000;
        font-weight: 700;
        text-align: left;
      }

      &-text {
        font-family: 'ArialRegular';
        padding: 20px 0 10px 0;
        font-size: 15px;
        line-height: 120%;
        color: rgba(0, 0, 0, 0.7);
        max-width: 270px;
        margin: 0 auto;
      }

      &-btn {
        font-family: 'ArialBold';
        cursor: pointer;
        background: #6200ee;
        box-shadow: 0px 1px 2px rgba(58, 58, 68, 0.24), 0px 2px 4px rgba(90, 91, 106, 0.24);
        border-radius: 99px;
        display: inline-block;
        padding: 12px 24px 12px 60px;
        color: #fff;
        font-size: 15px;
        line-height: 150%;
        position: relative;
        margin-bottom: 20px;

        &:before {
          position: absolute;
          content: '';
          width: 16px;
          height: 15px;
          background-image: url(../images/arrow-fff.svg);
          left: 10%;
          top: 40%;
          transform: translateY(-25%);
        }
      }

      &-marketing {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      &-top,
      &-bottom {
        font-family: 'ArialBold';
        width: 385px;
        background: linear-gradient(
            94.42deg,
            rgba(75, 154, 210, 0.73) 0%,
            rgba(184, 86, 200, 0.36) 100%
          ),
          #f9bfbf;
        border-radius: 20px;
        padding: 10px 10px 70px 20px;
      }

      &-subtitle {
        font-size: 20px;
        line-height: 23px;
        color: #fff;
      }

      &-bottom {
        padding: 10px 10px 20px 20px;
        margin-top: 40px;
        color: #fff;
        background: #6200ee;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 28px;
      }

      &-subtext {
        margin-top: 10px;
        font-family: 'ArialRegular';
        font-size: 14px;
        line-height: 16px;
      }

      &-gradient {
        display: inline-block;
        width: 100px;
        height: 100px;
        background: linear-gradient(135deg, #4682b9 0%, rgba(176, 46, 198, 0) 100%);
      }
    }
  }
`
