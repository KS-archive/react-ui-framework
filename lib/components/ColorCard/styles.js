import styled from 'styled-components';

export const Card = styled.div`
  min-width: 96px;
  margin: var(--space-md);
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
`;

export const Color = styled.div`
  width: 100%;
  min-width: 96px;
  height: 96px;
  background-color: ${props => props.color};
`;

export const ColorText = styled.div`
  padding: var(--space-sm);
  font-weight: var(--bold);
  text-transform: uppercase;
`;
