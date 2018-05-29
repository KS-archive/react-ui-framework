import styled from 'styled-components';

export const Container = styled.li`
  cursor: pointer;
  display: flex;
  color: var(--grey2);

  &:hover {
    > div::before {
      opacity: 0.25;
    }
  }
`;

export const Input = styled.input`
  position: absolute;
  visibility: hidden;

  &:checked ~ div {
    border: 1px solid var(--primary2);

    &::before {
      opacity: 1;
    }
  }
`;

export const Label = styled.label`
  top: 1px;
  margin-left: var(--space-sm);
  font-weight: var(--regular);
  font-size: var(--font-md);
  transition: all 0.3s linear;
`;

export const Check = styled.div`
  position: relative;
  border: 1px solid var(--grey2);
  background-color: #fff;
  border-radius: 100%;
  height: 20px;
  width: 20px;
  transition: all 0.3s linear;

  &::before {
    content: '';
    display: block;
    position: absolute;
    opacity: 0;
    background-color: var(--primary2);
    border-radius: 100%;
    height: 12px;
    width: 12px;
    top: 3px;
    left: 3px;
    transition: all 0.3s linear;
  }
`;

