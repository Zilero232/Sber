import { css } from '@emotion/core'

export const box = css`
  display: flex;
  margin: 0 auto;
  padding-top: 70px;
  width: 1200px;
  justify-content: space-between;
  align-items: flex-start;

  .painter {
    &__block {
      &-progress {
        color: black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      &-check {
        width: 385px;
        text-align: center;
        background-color: #fff;
        filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.02));
        filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.05));
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.02), 0px 4px 15px rgba(0, 0, 0, 0.05);
        border-radius: 20px;

        img {
          width: 150px;
          height: 150px;
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

      &-text {
        font-family: 'ArialRegular';
        padding: 20px 0 10px 0;
        font-size: 15px;
        line-height: 120%;
        color: rgba(0, 0, 0, 0.7);
        max-width: 270px;
        margin: 0 auto;
      }
      &-top {
        font-family: 'ArialBold';
        width: 385px;
        background-image: url('../images/painter-bg.jpg');
        height: 152px;
      }
      &-bottom {
        font-family: 'ArialRegular';
        background: #ffffff;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.02), 0px 4px 30px rgba(0, 0, 0, 0.05);
        border-radius: 20px;
        min-height: 500px;
        margin-bottom: 50px;
        color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        line-height: 16px;
        &-btn {
          display: flex;
        }
        &-1,
        &-2 {
          cursor: pointer;
          margin: 20px;
          padding: 10px 20px;
        }
        &-1 {
          font-family: 'ArialBold';
          background: #ffffff;
          box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.05);
          border-radius: 28px;
        }
        &-progress {
          position: relative;
          &:after {
            content: '';
            position: absolute;
            background-image: url(../images/progress.svg);
            background-repeat: no-repeat;
            width: 22px;
            height: 22px;
            top: 0;
            left: -30px;
          }
        }
        &-content {
          padding: 20px;
        }
      }
    }
  }
`

export const errorBox = css`
  width: 1075px;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.02), 0px 4px 30px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  padding: 40px 0;
  font-family: 'ArialRegular';

  .painter__error {
    &-title {
      padding-left: 20px;
      font-size: 27px;
      line-height: 31px;
    }
    &-text {
      padding-left: 20px;
      font-size: 15px;
      line-height: 17px;
    }
  }
`
