import styled from 'styled-components';

export const Container = styled.div`
  min-width: 96px;
`;

export const Items = styled.div`
  width: 100%;
  padding: 2px;
  border-radius: 4px;
  box-shadow: ${({ error }) => error ? '0 0 1px var(--error)' : '0 0 2px transparent'};
  transition: all 0.3s var(--ease-in-out);

  > div {
    margin: 0;
  }
`;

export const Error = styled.div`
  padding-top: 2px;
  transform: translateY(${({ error }) => error ? 0 : 'var(--space-md)'});
  opacity: ${({ error }) => error ? 1 : 0};
  font-size: var(--font-xs);
  color: var(--error);
  transition: all 0.3s var(--ease-in-out);
`;

