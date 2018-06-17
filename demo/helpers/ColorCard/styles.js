import styled from 'styled-components';

export const Card = styled.div`
  width: 160px;
  margin: var(--space-md);
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
`;

export const Color = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
  background-color: ${props => props.color};
  border-radius: 4px 4px 0 0;
`;

export const CopiedLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--overlay);
  height: 40px;
  padding: 0 var(--space-md);
  border-radius: 4px;
  font-size: var(--font-md);
  font-weight: var(--medium);
  line-height: 1;
  text-align: center;
  color: #fff;
  opacity: ${props => props.copied ? 1: 0};
  transition: all 0.3s var(--ease-in-out);
`;

export const Content = styled.div`
  padding: var(--space-md);
`;

export const ColorText = styled.div`
  padding-bottom: var(--space-sm);
  font-size: var(--font-lg);
  font-weight: var(--bold);
`;

export const Value = styled.div`
  font-size: var(--font-sm);
  line-height: var(--font-sm-lh);
`;

export const Bold = styled.span`
  font-weight: var(--bold);
`;
