import {css} from 'emotion.instance';

export const applicationWrapper = css`
  min-height: 100vh;
  background: #6a899c;
  flex-direction: column;
  overflow: hidden;
  margin: 20px;
  position: relative;
`;
export const mobileApplicationWrapper = css`
  min-height: 100vh;
  background: #6a899c;
  flex-direction: column;
  overflow: hidden;
  margin-left: 10px;
  position: relative;
`;
export const buttonTopContainer = css`
  margin: 5px 20px;
  display: flex;
  justify-content: space-between;

  button:nth-of-type(3) {
    margin-left: auto;
  }
`;
