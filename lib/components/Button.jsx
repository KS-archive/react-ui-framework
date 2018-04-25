import React from 'react';
import styled from 'styled-components';

const ButtonBase = styled.button`
  border-radius: 4px;
  outline: none;
  border: 1px solid var(--primary2);
  display: inline-block;
  cursor: pointer;
  font-weight: var(--normal);
  font-family: var(--mainFont);
  font-size: var(--font-md);
  line-height: var(--font-md-lh);
  padding: 8px 16px;
  max-width: 250px;
`;

const Ghost = ButtonBase.extend`
  color: var(--primary2);
  background-color: transparent;
`;

const Filled = ButtonBase.extend`
  color: #fff;
  background-color: var(--primary2);
`;

export default ({ children, size, ghost, className, onClick }) => {
  const Component = ghost ? Ghost : Filled;
  return <Component className={className} onClick={onClick}>{children}</Component>
}

