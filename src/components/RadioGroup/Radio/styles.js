import styled from 'styled-components';

export const Container = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;

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
  font-family: var(--mainFont);
  font-weight: var(--regular);
  font-size: var(--font-md);
  line-height: var(--font-md-lh);
  color: var(--text2);
  transition: all 0.3s linear;
`;

export const Check = styled.div`
  position: relative;
  border: ${({ error }) => (error ? '1px solid var(--error)' : '1px solid var(--grey3)')};
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
    background-color: ${({ error }) => (error ? 'var(--error)' : 'var(--primary2)')};
    border-radius: 100%;
    height: 12px;
    width: 12px;
    top: 3px;
    left: 3px;
    transition: all 0.3s linear;
  }
`;
