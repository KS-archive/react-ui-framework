import styled from 'styled-components';
import { Link } from 'react-router-dom';

// const getColor = kind => do {
//   if (kind === 'primary') 'primary2';
//   else if (kind === 'accent') 'accent1';
//   else if (kind === 'white') 'white';
//   else if (kind === 'grey') 'grey2';
//   else kind;
// };

export const Container = styled.div`
  width: 48px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 8px lightgray;
  color: var(--grey1)
`;

export const Hamburger = styled.div`
  margin-top: 16px;
`;

export const HidingArrow = styled.div`
  display: none;
`;

export const Links = styled.div`
  
`;

export const Item = styled(Link)`
  width: 48px;
  height: 24px;
  margin-top: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--grey1);
  
  &:hover,
  &:active {
    color: var(--primary1);
    border-left: 2px solid var(--primary1);
    width: 46px;
  }
`;

export const Icon = styled.div`
  
`;

export const Label = styled.div`
  display: none;
`;
