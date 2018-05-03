import styled from 'styled-components';

const getColor = kind => do {
  if (kind === 'primary') 'primary2';
  else if (kind === 'accent') 'accent1';
  else if (kind === 'white') 'white0';
  else kind;
};

const ButtonBase = styled.button`
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 4px 16px;
  min-width: 96px;
  min-height: 40px;
  outline: none;
  border: none;
  border-radius: 4px;
  font-family: var(--mainFont);
  font-weight: var(--normal);
  font-size: var(--font-md);
  line-height: var(--font-md-lh);
  transition: all 0.3s var(--ease-in-out);

  &:hover {
    transition: all 0.3s var(--ease-in-out);
  }

  &:active {
    transition: all 0.3s var(--ease-out);
  }
`;

export const Ghost = ButtonBase.extend`
  ${(props) => {
    const colorBase = getColor(props.kind);
    return `
      background-color: transparent;
      color: var(--${colorBase});
      border: 2px solid var(--${colorBase});

      &:hover {
        color: var(--${colorBase}-hover);
        border: 2px solid var(--${colorBase}-hover);
        background-color: rgba(255, 255, 255, 0.04);
      }

      &:active {
        color: var(--${colorBase}-active);
        border: 2px solid var(--${colorBase}-active);
        background-color: rgba(0, 0, 0, 0.04);
      }`;
  }}
`;

export const Filled = ButtonBase.extend`
  color: ${props => props.kind === 'white' ? 'var(--grey2)' : '#fff'};
  ${(props) => {
    const colorBase = getColor(props.kind);
    return `
      background-color: var(--${colorBase});

      &:hover {
        background-color: var(--${colorBase}-hover);
      }

      &:active {
        background-color: var(--${colorBase}-active);
      }`;
  }}
`;
