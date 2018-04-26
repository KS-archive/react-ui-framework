import styled from 'styled-components';

export default styled.div`
  grid-column: ${props => props.xxl};

  @media (max-width: 1599px) {
    grid-column: ${props => props.xl};
  }

  @media (max-width: 1199px) {
    grid-column: ${props => props.lg};
  }

  @media (max-width: 959px) {
    grid-column: ${props => props.md};
  }

  @media (max-width: 767px) {
    grid-column: ${props => props.sm};
  }

  @media (max-width: 479px) {
    grid-column: ${props => props.xs};
  }
`;
