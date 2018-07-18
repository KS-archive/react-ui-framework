import styled from 'styled-components';

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
  border: 1px solid black;
`;

export const Hamburger = styled.div`
  margin-top: 16px;
`;

export const Arrow = styled.div`
  display: none;
`;

export const Links = styled.div`
  
`;

export const Link = styled.div`
  // margin-top: 16px;
`;

export const Icon = styled.div`
  margin-top: 18px;
`;

export const Label = styled.div`
  display: none;
`;
