import styled from 'styled-components';

export const Container = styled.div`
  min-width: 96px;
  color: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;
export const Page = styled.div`
  width: 25px;
  height: 25px;
  margin: 2px;
  font-size: 16px;
  line-height: 25px;
  font-family: Roboto;
  text-align: center;
  color: white;

  &:hover {
    color:pink;
    border: 1px solid pink;
    border-radius: 4px;
  }
`;
export const Label = styled.button`
  width: 25px;
  height: 25px;
  margin: 2px;
  font-size: 16px;
  line-height: 25px;
  font-family: Roboto;
  text-align: center;
  color: pink;
  background: none;
  border: none;
`;

