import styled from 'styled-components';

const getCircleBorderColor = (index, step) =>
  index <= step ? 'primary1' : 'grey5';

const getCircleBgColor = (index, step) =>
  index === step ? 'primary1' : 'background';

const getRectangleBgColor = (index, step) =>
  index < step ? 'primary1' : 'grey5';

const getFontColor = (index, step) => do {
  if (index === step) 'white-hover';
  else if (index < step) 'primary1';
  else 'grey5';
};

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const Circle = styled.div`
  width: 44px;
  height: 44px;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  font-family: Roboto;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => {
    const borderColor = getCircleBorderColor(props.index, props.step);
    const bgColor = getCircleBgColor(props.index, props.step);
    const color = getFontColor(props.index, props.step);
    return `
      border-color: var(--${borderColor});
      background-color: var(--${bgColor});
      color: var(--${color});
    `;
  }}
`;

export const Rectangle = styled.div`
  width: 84px;
  height: 2px;
  ${(props) => {
    const bgColor = getRectangleBgColor(props.index, props.step);
    return `
      background-color: var(--${bgColor});
    `;
  }}
`;
