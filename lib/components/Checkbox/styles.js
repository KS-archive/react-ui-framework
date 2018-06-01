import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  user-select: none;
  display: block;
  position: relative;
  margin: 2px;
  padding-left: 28px;
  border-radius: 4px;

  &:hover span::after {
    opacity: 0.25;
  }

  .error {
    position: absolute;
    visibility: ${props => props.error && typeof props.error === 'string' ? 'visible' : 'hidden'};
    top: ${props => props.error && typeof props.error === 'string' ? '20px' : 0};
    opacity: ${props => props.error && typeof props.error === 'string' ? 1 : 0};
    left: 0;
    padding-top: 2px;
    font-size: var(--font-xs);
    color: var(--error);
    font-weight: var(--regular);
    transition: all 0.3s var(--ease-in-out);
  }

  ${props => props.error && `
    span {
      border: 1px solid var(--error) !important;

      &::after {
        color: var(--error);
      }
    }
  `}
`;

export const Label = styled.label`
  cursor: pointer;
  position: relative;
  top: 1px;
  font-family: var(--mainFont);
  font-size: var(--font-md);
  font-weight: var(--regular);
  color: var(--text2);
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;

  &:checked ~ span {
    border: 1px solid var(--primary2);
  }

  &:checked ~ span::after {
    opacity: 1;
  }
`;

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 1px solid var(--grey2);
  border-radius: 4px;
  transition: all 0.3s var(--ease-in-out);

  &::after {
    content: "\f00d";
    position: absolute;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    font-size: var(--font-lg);
    font-weight: var(--fa-light);
    color: var(--primary2);
    transition: all 0.3s var(--ease-in-out);
  }
`;

