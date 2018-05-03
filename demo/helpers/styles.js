import styled from 'styled-components';
import { Button } from 'react-ui-framework';

export const Container = styled.div`
  width: 100%;
  padding: var(--space-lg);
`;

export const Section = styled.div`
  margin-bottom: var(--space-lg);
`;

export const Flexbox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Header = styled.div`
  font-size: var(--font-lg);
  line-height: var(--font-lg-lh);
  color: var(--grey1);
  margin-bottom: var(--space-md);
`;

export const StyledButton = styled(Button)`
  margin: var(--space-sm);
`;
