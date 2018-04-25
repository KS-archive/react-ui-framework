import React from 'react';
import styled from 'styled-components';

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

const Ghost = ButtonBase.extend`
  position: relative;
  color: var(--primary2);
  background-color: transparent;
  border: 2px solid var(--primary2);

  &:hover {
    color: var(--primary2-hover);
    border: 2px solid var(--primary2-hover);
  }

  &:active {
    color: var(--primary2-active);
    border: 2px solid var(--primary2-active);
  }
`;

const Filled = ButtonBase.extend`
  color: #fff;
  background-color: var(--primary2);

  &:hover {
    background-color: var(--primary2-hover);
  }

  &:active {
    background-color: var(--primary2-active);
  }
`;

export default ({ children, ghost, className, onClick }) => {
  const Component = ghost ? Ghost : Filled;
  return <Component className={className} onClick={onClick}>{children}</Component>;
};

