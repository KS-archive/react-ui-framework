import styled from 'styled-components';

export const Container = styled.div`
  min-width: 96px;
  color: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;
export const PageContainer = styled.div`

  color: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

export const PageDisabled = styled.a`
  width: 25px;
  height: 25px;
  margin: 2px;
  font-size: 16px;
  line-height: 25px;
  font-family: Roboto;
  text-align: center;
  color: #E0E0E0;
  text-decoration: none;
  border: 1px solid none;
  border-radius: 4px;

  &:hover {
    color:#2F80ED;
    border: 1px solid #2F80ED;
    border-radius: 4px;
  }
`;
export const PageActive = styled.a`
  width: 25px;
  height: 25px;
  margin: 2px;
  font-size: 16px;
  line-height: 25px;
  font-family: Roboto;
  text-align: center;
  text-decoration: none;

    color:#2F80ED;
    border: 1px solid #2F80ED;
    border-radius: 4px;
  
`;
export const Label = styled.button`
  width: 25px;
  height: 25px;
  margin: 2px;
  font-size: 16px;
  line-height: 25px;
  font-family: Roboto;
  text-align: center;
  color: #E0E0E0;
  background: none;
  border: none;
  transition: all 0.7s ease-in-out;
  &:hover{
      color: #2F80ED;
  }
`;

