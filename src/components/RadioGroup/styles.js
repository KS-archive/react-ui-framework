import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;
  margin: 0;
  padding: 2px;
  min-width: 96px;
`;

export const Label = styled.label`
  margin-bottom: var(--space-sm);
  font-size: var(--font-xs);
  color: var(--grey3);
  font-weight: var(--bold);
  line-height: var(--font-xs-lh);
  transition: all 0.3s var(--ease-in-out);
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2px;
  border-radius: 4px;
  transition: all 0.3s var(--ease-in-out);

  > div {
    margin: 0;
  }
`;

export const Error = styled.div`
  padding-top: 2px;
  transform: translateY(${({ error }) => (error ? 0 : 'var(--space-md)')});
  opacity: ${({ error }) => (error ? 1 : 0)};
  font-size: var(--font-xs);
  color: var(--error);
  transition: all 0.3s var(--ease-in-out);
`;
