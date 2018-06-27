import styled from 'styled-components';

const getCircleBorderColor = (index, step) => {
  if (index >= step) return 'blue';
  else return 'gray';
};

const getCircleBgColor = (index, step) => {
  if (index === step) return 'blue';
  else return 'gray';
};

const getRectangleBgColor = (index, step) => {
  if (index < step) return 'blue';
  else return 'gray';
};

const getFontColor = (index, step) => {
  if (index === step) return 'white';
  else if (index < step) return 'blue';
  else return 'gray';
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-family: Roboto;
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
  background-color: #CCCCCC; 
  ${(props) => {
    const bgColor = getRectangleBgColor(props.index, props.step);
    return `
      background-color: var(--${bgColor});
    `;
  }}
`;
