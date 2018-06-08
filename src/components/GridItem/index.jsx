import styled from 'styled-components';
import { media } from '../../utils';

export default styled.div`
  grid-column: ${props => props.xxl};
  ${media.xl`grid-column: ${props => props.xl};`}
  ${media.lg`grid-column: ${props => props.lg};`}
  ${media.md`grid-column: ${props => props.md};`}
  ${media.sm`grid-column: ${props => props.sm};`}
  ${media.xs`grid-column: ${props => props.xs};`}
`;
