import Container from '../Container';

export default Container.extend`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: var(--grid-gap);
`;
